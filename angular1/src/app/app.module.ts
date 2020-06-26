import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// angular的內置的模快
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//項目小的時候一般不需要自定義模快，項目比較大的時候很多個組件的時候，會導致應用加載比較慢，
// 所以組件比較多的時候進行模塊化
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
//引入自定义模快
import { UserModule } from './module/user/user.module';
import { ProductModule } from './module/product/product.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
