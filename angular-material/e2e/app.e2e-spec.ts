import { AngularMaterialPage } from './app.po';

describe('angular-material App', () => {
  let page: AngularMaterialPage;

  beforeEach(() => {
    page = new AngularMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
