import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cuota } from 'src/app/domain/cuota';
import { solicitud } from 'src/app/domain/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.scss']
})
export class SolicitudComponent {
  signUpForm: FormGroup;
  cuotas: Cuota[] = [];

  constructor(private formBuilder: FormBuilder, private solicitudServices: SolicitudService){
    this.signUpForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      monto: [0, [Validators.required, Validators.min(0)]],
      meses: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const solicitud: solicitud = this.signUpForm.value;
      this.solicitudServices.agregarSolicitud(solicitud).subscribe(
        (cuotas: Cuota[]) => {
          this.cuotas = cuotas;
          console.log('Registro exitoso', cuotas);
          alert("Ingresado correctamente")
        },
        error => {
          console.error('Error al registrar el cliente', error);
        }
      );
    }
  }

}