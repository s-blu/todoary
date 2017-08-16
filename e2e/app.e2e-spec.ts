import { TodoaryPage } from './app.po';

describe('todoary App', () => {
  let page: TodoaryPage;

  beforeEach(() => {
    page = new TodoaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
