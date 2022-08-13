import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-course';

  data = {
    title: 'Angular Course TEST'
  };
  

  onLogoClick(){
    alert("test");
    
  }
  
  onKeyUp(newTitle:string) {
      this.data.title = newTitle;
  }
}
