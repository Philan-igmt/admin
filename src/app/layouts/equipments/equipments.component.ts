import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service'
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  equipments:any=[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllEquipments()
  }

  getAllEquipments(){
    this.dataService.getEquipments().subscribe(data=>{
      this.equipments = data
      console.log(data)
    })
  }

  deleteTool(id:any){
    console.log(id)
  }
}
