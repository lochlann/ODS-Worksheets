import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Worksheet } from './../models/worksheet.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import * as WorksheetActions from './../actions/worksheet.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  worksheets: Observable<Worksheet[]>;

  constructor(private store: Store<AppState>) {
    this.worksheets = store.select('worksheet')
   }

  ngOnInit(): void {
  }

  delWorksheet(index){
    this.store.dispatch(new WorksheetActions.RemoveWorksheet(index))
  }
}
