import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { AdminComponent } from './admin/admin.component';
import { AzureConceptImplementedComponent } from './azure-concept-implemented/azure-concept-implemented.component';
import { AzureConceptLearntComponent } from './azure-concept-learnt/azure-concept-learnt.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SupportTicketComponent,
    AdminComponent,
    AzureConceptImplementedComponent,
    AzureConceptLearntComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
