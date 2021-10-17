import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service'
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {


  name:any;
  price:any;
  description:any;
  imageUrl:any

  platterForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    imageUrl: new FormControl(),
    })

  allAppointmentsFromDB:any=[]
  displayedColumns: string[] = ['name', 'surname', 'email','cellPhoneNumber','platform','reason','slot','delete'];
  constructor(private formBuilder: FormBuilder,private dataService: DataService) { }
  ngOnInit(): void {
    this.getAllAppointments()
    this.platterForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description:['', Validators.required],
      imageUrl:['', Validators.required]
    })

    this.platterForm.valueChanges.subscribe(value => {
      this.name = value.name;
      this.price = value.price;
      this.description = value.description;
      this.imageUrl =value.imageUrl
      console.log(value)
    });
  }

  getAllAppointments(){
    this.dataService.getAppointments().subscribe((data)=>{
      console.log(data)
    this.allAppointmentsFromDB=data
    })  
  }

  deleteAppointment(id:any,){
    this.dataService.deleteAppointment(id).subscribe((data)=>{
      this.getAllAppointments()
      alert(`The Appointment has been deleted`)
    })  
  }
  

}
