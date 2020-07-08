import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';
import { EditorComponent } from './editor/editor.component';
import { ReadComponent } from './read/read.component';
import { BoardComponent } from './board.component';
import { ListComponent } from './list/list.component';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig
} from '@alyle/ui';

/** Import the component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

const routes: Routes = [
  {
    path: 'read/:id',
    component: ReadComponent
  },
  {
    path: 'read',
    redirectTo: '/'
  },
  {
    path: 'create',
    component: EditorComponent,
    data: {type: 'create'}
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: '',
    component: ListComponent
  },
];

@NgModule({
  declarations: [EditorComponent, ReadComponent, BoardComponent, ListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(
      routes
    ),
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    BoardComponent
  ],
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    // Theme that will be applied to this module
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
  ]
})
export class BoardModule {
}
