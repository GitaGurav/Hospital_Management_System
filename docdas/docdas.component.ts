import { PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdas',
  standalone: false,
  templateUrl: './docdas.component.html',
  styleUrl: './docdas.component.css'
})
export class DocdasComponent {
searchPatients() {
throw new Error('Method not implemented.');
}
searchText: any;

  constructor(private patientService:PatientService, private router:Router, private docauth:DocauthService){}
  patients:Patient[]=[];

  ngOnInit():void{
    this.getPatients();
  }
  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }
  update(id:number){
    this.router.navigate(['update-patient',id]);
  }
  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  view(id: number) {
    this.router.navigate(['/view-patient', id]);
  }
  logout(){
    this.docauth.logout();
    this.router.navigate(['home']);
  }

}
