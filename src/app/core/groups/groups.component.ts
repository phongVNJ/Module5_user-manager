import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor() { }

  listGroup = [
    {id: 1, name: 'Man'},
    {id: 2, name: 'Women'},
    {id: 3, name: 'Other'}
  ];

  ngOnInit(): void {
  }

}
