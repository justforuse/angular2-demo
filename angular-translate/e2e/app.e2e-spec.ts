import { AngularTranslatePage } from './app.po';

describe('angular-translate App', () => {
  let page: AngularTranslatePage;

  beforeEach(() => {
    page = new AngularTranslatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
