import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../service/ticket.service';
import { debounceTime } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.scss'],
})
export class SupportTicketComponent implements OnInit {
  ticketForm!: FormGroup;
  fileToUpload!: File;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.ticketFormCreation();

    this.ticketForm
      .get('userid')!
      .valueChanges.pipe(debounceTime(500))
      .subscribe((userid) => this.getdata(userid));
  }

  getdata(userid: string) {
    this.ticketService.getUserInfo(userid).subscribe((data: any) => {
      this.ticketForm.patchValue({
        name: data.userName,
        emailid: data.emailId,
      });
    });
  }

  ticketFormCreation() {
    this.ticketForm = this.formBuilder.group({
      userid: ['', Validators.required],
      name: ['', Validators.required],
      emailid: ['', Validators.required],
      platform: ['', Validators.required],
      category: ['', Validators.required],
      problemDescription: ['', Validators.required],
    });
  }

  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    this.fileToUpload = files[0] as File;
    // this.setControl(this.fileToUpload.name);
  };

  onSubmit() {
    const formData = new FormData();
    formData.append('userid', this.ticketForm.get('userid')?.value);
    formData.append('platform', this.ticketForm.get('platform')?.value);
    formData.append('category', this.ticketForm.get('category')?.value);
    formData.append(
      'problemDescription',
      this.ticketForm.get('problemDescription')?.value
    );
    if (this.fileToUpload) {
      formData.append('File', this.fileToUpload, this.fileToUpload.name);
    }

    this.ticketService.postSupportTicket(formData).subscribe((data: any) => {
      this.toastrService.success(
        'Request Submitted , Your Ticket Number :  ' + data.ticketNumber,
        'success'
      );
    });
  }
}
