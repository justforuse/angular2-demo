import { Angular2D3DemoPage } from './app.po';

describe('angular2-d3-demo App', () => {
  let page: Angular2D3DemoPage;

  beforeEach(() => {
    page = new Angular2D3DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
