import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = "http://localhost:8080/api/v1/patients";  

  constructor(private httpClient: HttpClient) { }

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.apiUrl}`);
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>('http://localhost:8080/api/v1/insert', patient);
  }
  
  

  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.apiUrl}/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<object> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, patient);  
  }

 
}

