/* eslint-disable require-jsdoc */
import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'a0de5a10c46c456abe1bcc97c950e655', // key https://newsapi.org/
    });
  }
}

export default AppLoader;
