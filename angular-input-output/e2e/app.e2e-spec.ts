import { AngularInputOutputPage } from './app.po';

describe('angular-input-output App', () => {
  let page: AngularInputOutputPage;

  beforeEach(() => {
    page = new AngularInputOutputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
