import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.setValue();
  }

 setValue(){
  document.getElementById("showUsers")!.innerHTML="";
  let recordNo = 0;
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users")!)?JSON.parse(localStorage.getItem("users")!):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-2 bg-info" style="padding: 10px 20px;">'+ ++recordNo +'</div><div class="col-sm-2 bg-info" style="padding: 10px 10px;">'+user_records[i].username+'</div><div class="col-sm-3 bg-info" style="padding:10px 10px;">'+user_records[i].email+'</div><div class="col-sm-2 bg-info" style="padding: 10px 10px;">'+user_records[i].password+'</div><div class="col-sm-3" style="padding: 10px 10px;"><button type="button" class="btn btn-warning" style="margin: 0px 05px;" data-toggle="modal" data-target="#exampleModalCenter" onClick="">Edit</button><button type="button" style="margin: 0px 05px;" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter" onClick="">Delete</button></div>';
  document.getElementById("showUsers")!.appendChild(addDiv);

    }
}
}

}
