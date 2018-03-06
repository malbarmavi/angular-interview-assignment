import { SistekPage } from './app.po';

describe('sistek App', () => {
  let page: SistekPage;

  beforeEach(() => {
    page = new SistekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
