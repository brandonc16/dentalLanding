import { Component, ElementRef, ViewChild } from '@angular/core';
import { Doctor } from 'src/app/models/doctor-detail.model';
import { servicesDental } from 'src/app/services/form-request.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  @ViewChild('carousel') carousel!: ElementRef; 

  constructor(private doctorDetail: servicesDental, ){

  }
  doctors: Doctor[] = [];
  ngOnInit(): void {
    this.getDetailDoctor()
   
  }
  getDetailDoctor(){
    this.doctorDetail.doctorsInfoService().subscribe(
      (resp:any)=>{
       this.doctors =resp.list
       console.log(this.doctors,'en aboutus');
       
        
      })
  }



  scroll(direction: number) {
    console.log('entro',direction);
    
    this.carousel.nativeElement.scrollBy({
      left: direction * 300, 
      behavior: 'smooth'
    });
  }
  isPrevDisabled(): boolean {
    const element = this.carousel.nativeElement as HTMLElement;
    return element.scrollLeft === 0; // Comprueba si el scroll está en el inicio
  }

  isNextDisabled(): boolean {
    const element = this.carousel.nativeElement as HTMLElement;
    return element.scrollLeft + element.clientWidth >= element.scrollWidth; // Comprueba si el scroll está en el final
  }

  
}
