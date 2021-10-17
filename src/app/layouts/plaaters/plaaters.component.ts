import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../../shared/service/data.service'
@Component({
  selector: 'app-plaaters',
  templateUrl: './plaaters.component.html',
  styleUrls: ['./plaaters.component.scss']
})
export class PlaatersComponent implements OnInit {

  allPlatterFromDB:any=[]

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

    displayedColumns: string[] = ['name', 'price', 'description','imageUrl','delete','update'];
  constructor(private formBuilder: FormBuilder,private dataService: DataService) { }

  ngOnInit(): void {
    this.getPlatters()
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

  getPlatters(){
    this.dataService.getPlatters().subscribe((data)=>{
    this.allPlatterFromDB=data
    })  
  }

  savePlatter(){
    this.dataService.addPlatter(this.name,this.price,this.description,this.imageUrl).subscribe((data)=>{
      this.getPlatters() 
      alert(`${this.name} IS ADDED AS A PLATTER`)
    })  
  }

  deletePlatter(id:any,name:any){
    this.dataService.deletePlatter(id).subscribe((data)=>{
      this.getPlatters()
      alert(`THE PLATTER ${name} has been deleted`)
    })  
  }



  updatePlatter(id:any){
    if((this.name &&this.price &&this.description && this.imageUrl !=='')||(this.name &&this.price &&this.description && this.imageUrl !==null)||this.name &&this.price &&this.description && this.imageUrl !==undefined){
        this.dataService.updatePlatter(id,this.name,this.price,this.description,this.imageUrl).subscribe((data)=>{
      this.getPlatters()
      alert(`THE PLATTER has been Updated`)
    })  
    }
  
  }

 

}
