import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { PostReducer } from './core/state/post.reducer';
 
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({ posts: PostReducer,counter:counterReducer }) 
  ],
    exports: [
    BrowserAnimationsModule,
    // NgxLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
