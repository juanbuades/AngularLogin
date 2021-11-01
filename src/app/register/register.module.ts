import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Este module se encarga de exportar el componente de registro de usuario en forma de modulo
//para poder importarlo en los modulos de la aplicacion (app.module.ts)
@NgModule({
    declarations: [RegisterComponent],
    //Es importante importar FormsModule y ReactiveFormsModule para el funcionamiento del modulo
    //ademas del commonModule que viene por defecto.
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    exports: [RegisterComponent],
    providers: [],
})
export class RegisterModule {}