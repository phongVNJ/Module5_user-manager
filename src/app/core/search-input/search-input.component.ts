import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor() { }

  @Output() keyword: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getKeyword(event) {
    const value = event.target.value;
    this.keyword.emit(value);
  }



}
