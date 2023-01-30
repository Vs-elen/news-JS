/* eslint-disable require-jsdoc */
import { Endpoints, Methods, CallbackHandler } from '../types/types';
type Options = { [key: string]: string };

class Loader {
  private baseLink: string;
  private options?: Options;

  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<Data>(
    { endpoint = Endpoints.everything, options = {} },
    callback: CallbackHandler<Data> = (): void => {
      console.error('No callback for GET response');
    }
  ) {
    this.load(Methods.get, endpoint, callback, options);
  }

  errorHandler = (res: Response) => {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  };

  makeUrl(options: Options, endpoint: Endpoints) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<Data>(method: Methods, endpoint: Endpoints, callback: CallbackHandler<Data>, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response): Promise<Data> => res.json())
      .then((data: Data): void => callback(data))
      .catch((err): void => console.error(err));
  }
}

export default Loader;
