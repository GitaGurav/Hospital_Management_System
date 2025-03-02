import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {

  medicine: Medicine = new Medicine();
  id:number=0;

  constructor(private route:ActivatedRoute ,private medicineService: MedicineService, private router:Router){}

  ngOnInit():void{
     this.id =this.route.snapshot.params['id'];
     this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine = data;
     })
  }
  onSubmit(){
  this.medicineService.updateMedicine(this.id, this.medicine).subscribe(data=>{
    console.log(data);
    this.goToMedicineList();
  })
  }
  goToMedicineList(){
    this.router.navigate(['view-medicine']);
  }
}
