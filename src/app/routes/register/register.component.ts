import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor-detail.model';
import { servicesDental } from 'src/app/services/form-request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  letterform!: FormGroup;
  formApoinment!: FormGroup;
  doctors: Doctor[] = [];

  constructor( private requestForm: servicesDental,
    private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.getDetailDoctor()
    this.letterform = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required]
    });
    this.formApoinment = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      fecha: ['', Validators.required],
      doctor: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

  getDetailDoctor(){
    this.requestForm.doctorsInfoService().subscribe(
      (resp:any)=>{
       this.doctors =resp.list
       console.log(this.doctors,'dfdfsdfsdf');
       
        
      })
  }

  subbmitForm(){
this.requestForm.newsLetterService(this.letterform.value).subscribe(
  (resp:any)=>{
    if(resp.status === 200){
      Swal.fire({
        icon: 'success',
       
        text: ' You have subscribed to our newsletter!',
       
      });
      this.letterform.reset();
     
    }else{
      Swal.fire({
        icon: 'error',
     
        text: '   Failed to subscribe to our newsletter. Please try again later.',
       
      })
    }

})
  }

  submitApoinment(){
    this.requestForm.sendApoinment(this.formApoinment.value).subscribe(
      (resp:any)=>{
        if(resp.status === 200){
          Swal.fire({
            icon: 'success',
           
            text: 'Appointment has been sent!',
           
          })
          this.formApoinment.reset();
        }else{
          Swal.fire({
            icon: 'error',
         
            text: '   Failed to send Appointment',
           
          })
        }
      })
  }

}
