import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsModule } from "./contacts/contacts.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [

  {path: 'detail/:id/:name/:phonenumber' , component: ContactDetailComponent},
  {path: '' , redirectTo: '/contacts' , pathMatch: 'full'},
  {path: '**' , component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    ContactsModule,
    RouterModule.forRoot(routesConfig)],
  declarations: [
    PageNotFoundComponent,

    ContactDetailComponent,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
