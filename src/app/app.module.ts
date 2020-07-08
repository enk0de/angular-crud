import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { LyHammerGestureConfig, LyThemeModule, LY_THEME, LY_THEME_NAME, StyleRenderer, LyTheme2 } from '@alyle/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MinimaLight } from '@alyle/ui/themes/minima';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BoardModule,
    BrowserAnimationsModule,
    HammerModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: LyHammerGestureConfig
  }, StyleRenderer, LyTheme2, {
    provide: LY_THEME_NAME,
    useValue: 'minima-light'
  }, {
    provide: LY_THEME,
    useClass: MinimaLight,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
