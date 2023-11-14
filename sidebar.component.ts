import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  viewname = "hanan";
  newnumber = 10;
event:any ="";
textdata= "";
password=" ";

  changename() {
    this.viewname = " ";
  }
  getname() {
    return this.viewname;
  }
  getnumber() {
    var numb = this.newnumber + 30;
    var sum = numb + 50;
    return sum;
  }
  onclick(event:any){
   console.log(event);
    
  }

}
