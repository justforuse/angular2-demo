import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome';

  constructor(private translate:TranslateService){
    translate.addLangs(['zh-CN']);
    translate.setDefaultLang('zh-CN');

    let broswerLang = translate.getBrowserLang();
    translate.use(broswerLang.match(/zh-CN/) ? broswerLang : 'zh-CN');
  }
}
