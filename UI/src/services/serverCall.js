const serverCall = (payload) => {
  const {
    method, url, token, data,
  } = payload;
  let options;

  if (data) {
    options = {
      method,
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': token || '',
      },
    };
  } else {
    options = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': token || '',
      },
    };
  }

  return fetch(url, options)
    .then(res => res.json());
};

export default serverCall;
