import { Component } from '@angular/core';
import { Trainee} from './trainee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='NgClass';
  trainees: Trainee[] = [
    {id:1,name:'reshma',location:'cgnr'},
    {id:2,name:'asha',location:'pta'},
    {id:3,name:'rohit',location:'alpy'}]

  Hello()
  {
    alert('Hello');
  }
}
