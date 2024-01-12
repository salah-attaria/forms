import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }
  title = 'forms';
  submit(item:any){
    console.log(item)
    // if(item){
    //   console.log(item)
    // }else{
    //   alert('Please Enter The Valid Credentials!!')
    // }
  }

}
