import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainviewComponent } from './mainview/mainview.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { CoverComponent } from './cover/cover.component';

const routeConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: MainviewComponent },
  { path: 'skills',component:SkillsComponent },
  { path: 'portfolio',component:PortfolioComponent },
  { path: 'blog',component:BlogComponent },
  { path: 'cover',component:CoverComponent },
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainviewComponent,
    CarouselComponent,
    SkillsComponent,
    PortfolioComponent,
    BlogComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
