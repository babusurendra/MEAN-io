import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UsersService } from './users-list.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { PostsInterface } from '../graphql/schema';
@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private users: any = [];

  // Inject Angular2Apollo service
  constructor(private myservice: UsersService) {
  }

  public ngOnInit() {
    this.myservice.showUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
