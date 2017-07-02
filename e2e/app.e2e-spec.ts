import { AngularMyappPage } from './app.po';

describe('angular-myapp App', () => {
  let page: AngularMyappPage;

  beforeEach(() => {
    page = new AngularMyappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
