import { NgModule } from '@angular/core';

// 1. Routing Libraries
import { RouterModule, Routes } from '@angular/router';

// 2. Import the UserComponent
import { UsersComponent } from './users/users.component';

// user view component
import { UserViewComponent } from './user-view/user-view.component';

// user create component  
import { UserCreateComponent } from './user-create/user-create.component';

// user edit component
import { UserEditComponent } from './user-edit/user-edit.component';

// articles component
import { ArticlesComponent } from './articles/articles.component';

// article view component 
import { ArticleViewComponent } from './article-view/article-view.component';

// article create component
import { ArticleCreateComponent } from './article-create/article-create.component';

// article edit component
import { ArticleEditComponent } from './article-edit/article-edit.component';
// login component
import { LoginComponent } from './login/login.component';
// 3. Declare your routes
const routes: Routes = [
  // 4. The default route
  { path: '', redirectTo: '/login', pathMatch: 'full'},
    // route for login component
  { path: 'login', component: LoginComponent },
  // 5. Map /users to the UsersComponent
  { path: 'users', component: UsersComponent },
  //route for user view component
  { path: 'users/view/:id', component: UserViewComponent }, 
  //route for create user component
  { path: 'users/create', component: UserCreateComponent }, 
  // route for edit user component
  { path: 'users/edit/:id', component: UserEditComponent }, 
  // route for articles component
  { path: 'articles', component: ArticlesComponent }, 
  // route for article view component
  { path: 'articles/view/:id', component: ArticleViewComponent },
  // route for article create component
  { path: 'articles/create', component: ArticleCreateComponent },
  // route for article edit component
  { path: 'articles/edit/:id', component: ArticleEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}