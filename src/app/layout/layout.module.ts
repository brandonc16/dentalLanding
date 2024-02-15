import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutComponent, NavbarComponent],
  exports: [LayoutComponent],
  providers: [],
})
export class LayoutModule {}
