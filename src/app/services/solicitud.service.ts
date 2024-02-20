import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/enviroments/environment';
import { solicitud } from '../domain/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) { }

  agregarSolicitud(solicitud: solicitud){
    let url = `${environment.WS_PATH}/solicitud/agregar/`;
    return this.http.post<any>(url,solicitud);
  }

}