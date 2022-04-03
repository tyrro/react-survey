import axios from 'axios';

export default async function fetchJson(resource, init) {
  try {
    const response = await axios(resource, init);

    return response.data;
  } catch (error) {
    const response = error.response;
    throw new FetchError({
      message: response.statusText,
      response,
      data: response.data,
    });
  }
}

export class FetchError extends Error {
  constructor({ message, response, data }) {
    super(message);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }

    this.name = 'FetchError';
    this.response = response;
    this.data = data ?? { message: message };
  }
}
