import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contentReducer } from './store/content.reducer';
import { ContentEffects } from './store/content.effects';
import { SharedModule } from './shared/shared.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot({ content: contentReducer }),
    EffectsModule.forRoot([ContentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
