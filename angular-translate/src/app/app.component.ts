import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome';

  constructor(private translate: TranslateService) {
    translate.addLangs(['zh-CN', 'aa']);
    translate.setDefaultLang('zh-CN');

    let broswerLang = translate.getBrowserLang();
    translate.use(broswerLang.match(/aa|zh-CN/) ? broswerLang : 'zh-CN');
  }

  changeLang(lang) {
    console.log(lang);
    this.translate.use(lang);
  }
  toggleLang() {
    console.log(this.translate.getBrowserLang());
    console.log(this.translate.getBrowserCultureLang());
  }
}
