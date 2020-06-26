import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './servise/common.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';



@NgModule({
  // 声明组件，user模快里面的组件放在这里
  declarations: [ProfileComponent, AddressComponent, OrderComponent, UserComponent],
  exports: [UserComponent, ProfileComponent],//暴露组件，让其他模快可以使用
  providers: [CommonService],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
