import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DentalServiceComponent } from '../dental-service/dental-service.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { RegisterComponent } from '../register/register.component';
import { FooterComponent } from '../footer/footer.component';


const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent , DentalServiceComponent,AboutUsComponent, RegisterComponent, FooterComponent ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class HomeModule {}
