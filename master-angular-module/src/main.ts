import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// import { platformBrowser } from '@angular/platform-browser';

// import { AppModuleNgFactory } from './app.module.ngfactory';

// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
//     .then(success => console.log(`Bootstrap success`))
//     .catch(error => console.log(error));

