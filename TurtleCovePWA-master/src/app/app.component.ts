import { InstallCounterService } from './services/install-counter/install-counter.service';
import { PluginsService } from 'src/app/services/plugins-service/plugins.service';
import { Component } from '@angular/core';

import { StatusBar, StatusBarStyle, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private plugins: PluginsService, private installCounter: InstallCounterService) {
    this.initializeApp();
  }

  initializeApp() {
    // window.addEventListener('appinstalled', () => {
    //   this.installCounter.incrementCount();
    // });
    StatusBar.setStyle({
      style: StatusBarStyle.Dark
    });
    StatusBar.setBackgroundColor({ color: '#08582e' });
    SplashScreen.hide();
  }
}
