import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service'
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  allAppointmentsFromDB:any=[]
  displayedColumns: string[] = ['name', 'surname', 'email','cellPhoneNumber','delete'];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getPlatters(){
    this.dataService.getAppointments().subscribe((data)=>{
      console.log(data)
    this.allAppointmentsFromDB=data
    })  
  }

  deletePlatter(id:any,name:any){
    this.dataService.deletePlatter(id).subscribe((data)=>{
      this.getPlatters()
      alert(`THE PLATTER ${name} has been deleted`)
    })  
  }

}
