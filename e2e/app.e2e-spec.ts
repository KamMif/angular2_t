import { TAngular2Page } from './app.po';

describe('t-angular2 App', () => {
  let page: TAngular2Page;

  beforeEach(() => {
    page = new TAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
