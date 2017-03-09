import { OptimizeWithImmutablePage } from './app.po';

describe('optimize-with-immutable App', () => {
  let page: OptimizeWithImmutablePage;

  beforeEach(() => {
    page = new OptimizeWithImmutablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
