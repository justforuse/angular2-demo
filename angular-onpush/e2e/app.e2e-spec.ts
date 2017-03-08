import { AngularOnpushPage } from './app.po';

describe('angular-onpush App', () => {
  let page: AngularOnpushPage;

  beforeEach(() => {
    page = new AngularOnpushPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
