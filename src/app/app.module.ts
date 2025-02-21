import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '@modules/counter/counter.component';
import { BlogComponent } from '@modules/blog/blog.component';
import { ContentEffects, contentReducer, counterReducer } from './store';

@NgModule({
  declarations: [AppComponent, CounterComponent, BlogComponent],
  imports: [
    FormsModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot({ content: contentReducer, counter: counterReducer }),
    EffectsModule.forRoot([ContentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
