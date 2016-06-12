export class GzeportPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gzeport-app h1')).getText();
  }
}
