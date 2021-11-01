import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactForm } from '../model/contact-form';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  formularioContacto = this.fb.group({
    nombre:['', Validators.required],
    apellido:['', Validators.required],
    telefono:['', Validators.required],
    correo:['', Validators.compose([Validators.email, Validators.required])],
    direccion:[''],
    localidad:[''],
    provincia:['',],
    contrasena:['', Validators.required],
    confirmContrasena:['', Validators.required],
    condiciones:[false, Validators.requiredTrue]
  });

  ngOnInit(): void {
    
  }

  enviarFormulario():void{
    console.log('Enviando formulario...')

    let value: ContactForm = new ContactForm(
      this.formularioContacto.value.nombre,
      this.formularioContacto.value.apellido,
      this.formularioContacto.value.telefono,
      this.formularioContacto.value.correo,
      this.formularioContacto.value.direccion,
      this.formularioContacto.value.localidad,
      this.formularioContacto.value.provincia,
      this.formularioContacto.value.contrasena,
      this.formularioContacto.value.confirmContrasena,
      this.formularioContacto.value.condiciones);
    
    this.registerService.sendFormContact();
  }

}
