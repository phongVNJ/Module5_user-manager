import {Component, OnInit} from '@angular/core';
import {IUser} from '../iuser';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor() {
  }
  title = 'Users';
  users: IUser[] = [];
  // tslint:disable-next-line:typedef
  listGroup: any;
  ngOnInit(): void {
    // this.userFilter = this.users;
    this.users = this.getUserList();
  }
  getUserList(): IUser[] {
    const users = [
      {
        id: 1,
        name: 'duc',
        email: 'duc@gmail.com'
      },
      {
        id: 2,
        name: 'vinh',
        email: 'vinh@gmail.com'
      },
      {
        id: 3,
        name: 'tuan',
        email: 'tuan@gmail.com'
      }
    ];
    return users;
  }
  // tslint:disable-next-line:typedef
  search(event) {
    const keyword = event.target.value;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.getUserList();
  }
  // tslint:disable-next-line:typedef
  filterByKeyword(keyword) {
    return this.users.filter(user => {
      // tslint:disable-next-line:triple-equals
      return user.name.indexOf(keyword) != -1;
    });
  }
  // tslint:disable-next-line:typedef
  delete(id) {
    const userDeleted = [];
    this.users.map(user => {
      // tslint:disable-next-line:triple-equals
      if (user.id != id) {
        userDeleted.push(user);
      }
    });
    this.users = userDeleted;
  }
}
