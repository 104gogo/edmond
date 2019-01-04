import { HOST } from '../configs/constants';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function request(url, options) {
  const response = await fetch(`${HOST}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  checkStatus(response);

  const ret = await response.json();

  return ret;
}

export default request;
