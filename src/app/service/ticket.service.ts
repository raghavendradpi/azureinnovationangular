import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISupport } from '../models/ISupport';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  API_URL = environment.apiUrl;
  USER_API_URL = environment.userapiUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  postSupportTicket(formData: any) {
    return this.http.post(this.API_URL + 'ticket', formData);
  }

  getUserInfo(userid: string) {
    let params = new HttpParams();
    params = params.append('userid', userid);
    params = params.append('code', environment.codeUser);
    return this.http.get(this.USER_API_URL + 'GetUserInformation', { params });
  }

  getAllTickets(): Observable<ISupport[]> {
    return this.http.get<ISupport[]>(this.API_URL + 'ticket');
  }
}
