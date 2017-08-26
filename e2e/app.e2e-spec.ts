import { MainFrPage } from './app.po';

describe('main-fr App', () => {
  let page: MainFrPage;

  beforeEach(() => {
    page = new MainFrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
