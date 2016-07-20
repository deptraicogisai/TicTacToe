import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { TictactoeService } from './app/tictactoe.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[TictactoeService]);

