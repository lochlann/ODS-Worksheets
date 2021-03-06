import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable} from "rxjs"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-sf-V2';

  itemValue="";
  items: Observable<any[]>;

  constructor(public db:AngularFireDatabase){
    this.items = db.list('items').valueChanges();
  }

  onSubmit(){
    
  }
}
