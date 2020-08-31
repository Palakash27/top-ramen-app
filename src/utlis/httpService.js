async function makeApiCall(url, method, body) {
  const options = {
    method: method,
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(url, options);
  return response.json();
}

export const httpService = {
  get: url => {
    return makeApiCall(url, 'GET');
  },
  post: (url, body) => {
    return makeApiCall(url, 'POST', body);
  },
  put: (url, body) => {
    return makeApiCall(url, 'PUT', body);
  },
  delete: url => {
    return makeApiCall(url, 'DELETE');
  },
};
