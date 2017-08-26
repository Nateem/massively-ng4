import { Component, OnInit } from '@angular/core';
import {TestdataService} from '../testdata.service';
@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  data:any;
  constructor(private _tdata:TestdataService) { }

  ngOnInit() {
  }
  showdata(){
    this._tdata.getData().subscribe(
      (data)=>{
        console.log(data);
        
        this.data = data;
      },
      (err)=>console.log(err),
      ()=>console.log("Finished")
      
    )
  }
}
