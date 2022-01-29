import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AzureConceptImplementedComponent } from './azure-concept-implemented/azure-concept-implemented.component';
import { AzureConceptLearntComponent } from './azure-concept-learnt/azure-concept-learnt.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';

const routes: Routes = [
  {
    path: 'support',
    component: SupportTicketComponent,
    data: { title: 'Helpdesk Support' },
  },
  {
    path: 'azure-implemented',
    component: AzureConceptImplementedComponent,
    data: { title: 'Azure Implemented' },
  },
  {
    path: 'azure-concept-learnt',
    component: AzureConceptLearntComponent,
    data: {
      title: 'Azure Concept Learnt',
    },
  },
  {
    path: 'tickets',
    component: AdminComponent,
    data: {
      title: 'Fetch the Ticket Data',
    },
  },
  { path: '', pathMatch: 'full', redirectTo: 'support' },
  { path: '**', component: SupportTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
