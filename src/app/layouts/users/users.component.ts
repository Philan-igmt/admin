import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUsersFromDB:any=[]
  displayedColumns: string[] = ['username', 'email','role','delete'];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.dataService.getUsers().subscribe((data)=>{
      console.log(data)
    this.allUsersFromDB=data
    })  
  }

  deleteUser(id:any,name:any){
    this.dataService.deleteUser(id).subscribe((data)=>{
      this.getUsers()
      alert(`THE User ${name} has been deleted`)
    })  
  }

}
