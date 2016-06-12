import { GzeportPage } from './app.po';

describe('gzeport App', function() {
  let page: GzeportPage;

  beforeEach(() => {
    page = new GzeportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gzeport works!');
  });
});
