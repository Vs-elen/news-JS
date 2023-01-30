/* eslint-disable require-jsdoc */
import AppController from '../controller/controller';
import AppView from '../view/appView';
import { INews } from '../types/types';

class App {
  public controller: AppController;
  public view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }
  public start(): void {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event): void =>
      this.controller.getNews(e, (data: Readonly<INews>): void => this.view.drawNews(data))
    );
    this.controller.getSources((data: Readonly<INews>): void => this.view.drawSources(data));
  }
}

export default App;
