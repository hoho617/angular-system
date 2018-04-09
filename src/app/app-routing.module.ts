import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaseManageComponent } from './case-manage/case-manage.component';
import { SourceManageComponent } from './source-manage/source-manage.component';
import { SerialManageComponent } from './serial-manage/serial-manage.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },{
    path:'home',
    component:HomeComponent
  },{
    path:'case-manage',
    component:CaseManageComponent
  },{
    path:'source-manage',
    component:SourceManageComponent
  },{
    path:'serial-manage',
    component:SerialManageComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
