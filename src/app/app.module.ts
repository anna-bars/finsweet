import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AuthorComponent } from './pages/author/author.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { CategoryComponent } from './pages/category/category.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { AccountComponent } from './admin/pages/account/account.component';
import { loginGuard } from './guards/login.guard';
import { accountGuard } from './guards/account.guard';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { AdminBlogComponent } from './admin/components/admin-blog/admin-blog.component';
import { AdminCategoryComponent } from './admin/components/admin-category/admin-category.component';
import { AdminAuthorsComponent } from './admin/components/admin-authors/admin-authors.component';
import { AdminSubscribeComponent } from './admin/components/admin-subscribe/admin-subscribe.component';
import { AdminPrivacyPolicyComponent } from './admin/components/admin-privacy-policy/admin-privacy-policy.component';




const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Finsweet',
      },
      {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
        title: 'About us',
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent),
        title: 'Contact us'
      },
      {
        path: 'author',
        loadComponent: () => import('./pages/author/author.component').then(m => m.AuthorComponent),
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent),
        title: 'Blog',
      },
      {
        path: 'blog-post',
        loadComponent: () => import('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent),
      },
      {
        path: 'category',
        loadComponent: () => import('./pages/category/category.component').then(m => m.CategoryComponent),
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
      },

    ]
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
        canActivate: [accountGuard]
      },
      {
        path: "account",
        component: AccountComponent,
        canActivateChild: [loginGuard],
        children: [
          {
            path: "",
            component: DashboardComponent
          },
          {
            path: "blog",
            component: AdminBlogComponent
          },
          {
            path: "category",
            component: AdminCategoryComponent
          },
          {
            path: "authors",
            component: AdminAuthorsComponent
          },
          {
            path: "subscribe",
            component: AdminSubscribeComponent
          },
          {
            path: "privacy-policy",
            component: AdminPrivacyPolicyComponent
          }

        ]
      }
    ]
  }
]
 
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top' }),
    HomeComponent,
    BlogComponent,
    AboutUsComponent, 
    ContactUsComponent,
    AuthorComponent, 
    BlogPostComponent,
    CategoryComponent,
    PrivacyPolicyComponent,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginComponent,
    AccountComponent,
    DashboardComponent,
    AdminBlogComponent,
    AdminCategoryComponent,
    AdminAuthorsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
