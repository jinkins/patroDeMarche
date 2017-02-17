import { PatroV2Page } from './app.po';

describe('patro-v2 App', function() {
  let page: PatroV2Page;

  beforeEach(() => {
    page = new PatroV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
