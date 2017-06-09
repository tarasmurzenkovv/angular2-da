import { PrjectTrackerPage } from './app.po';

describe('prject-tracker App', () => {
  let page: PrjectTrackerPage;

  beforeEach(() => {
    page = new PrjectTrackerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
