import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';
import {UsersService} from './list/users-list.service';
import { 
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule
 } from '@angular/material';

import { routes } from './users.routes';
import {UsersListComponent} from './list/users-list.component';
// import { PostListComponent } from './post-list/post-list.component';
// import { postDetailComponent } from './post-detail/post-detail.component';
// import { NewPostComponent } from './new-post/new-post.component';
// import { EditPostComponent } from './edit-post/edit-post.component';
// import {PostsFilterPipe} from './posts-filter/posts-filter.pipe'

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
    // ApolloModule.forRoot(client)
  ],
  providers:[UsersService]
})
export class UsersModule {
  public static routes = routes;
}
