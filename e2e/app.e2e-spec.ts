import { AngularCliCircleciDockerPage } from './app.po';

describe('angular-cli-circleci-docker App', () => {
  let page: AngularCliCircleciDockerPage;

  beforeEach(() => {
    page = new AngularCliCircleciDockerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
