import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
onLogout() {
throw new Error('Method not implemented.');
}
searchPatients() {
throw new Error('Method not implemented.');
}

  patients:Patient[]=[];
searchText: any;

  constructor(private patientService: PatientService, private adminauthService:AdminauthService, private router:Router){}

    ngOnInit():void{
      this.getPatient();
    }
  getPatient(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })

    }
    delete(id:number){
      this.patientService.delete(id).subscribe(data=>{
        console.log(data);
        this.getPatient();
      })
    }
    logout(){
      this.adminauthService.logout();
      this.router.navigate(['home']);
    }
  }

