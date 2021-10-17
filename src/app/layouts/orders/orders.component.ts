import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  allOrdersFromDB:any=[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders(){
    this.dataService.getOrders().subscribe((data)=>{
      console.log(data)
    this.allOrdersFromDB=data
    })  
  }

  addToDelivered(order:any){
    console.log(order)
  }

}
