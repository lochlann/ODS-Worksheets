import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Worksheet } from './../models/worksheet.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import * as WorksheetActions from './../actions/worksheet.action';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addWorksheet(name, url){
    this.store.dispatch(new WorksheetActions.AddWorksheet({name: name, url: url}))
  }
}
