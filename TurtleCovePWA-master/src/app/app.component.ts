import { InstallCounterService } from './services/install-counter/install-counter.service';
import { PluginsService } from 'src/app/services/plugins-service/plugins.service.ts';
import { Component } from '@angular/core';

//import { StatusBar, Style } from '@capacitor/status-bar';
// removed import { SplashScreen } from '@capacitor/splash-screen'; only needed for mobile app


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private plugins: PluginsService, private installCounter: InstallCounterService) {
    //this.initializeApp();
  }

  //initializeApp() {
    // window.addEventListener('appinstalled', () => {
    //   this.installCounter.incrementCount();
    // });
    //StatusBar.setStyle({
      //style: Style.Dark
   // });
    //StatusBar.setBackgroundColor({ color: '#08582e' });
    // removed SplashScreen.hide();
  }

