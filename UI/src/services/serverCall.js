const serverCall = (payload) => {
  const {
    method, url, token, data,
  } = payload;
  let callData;

  if (data) {
    callData = JSON.stringify(data);
  } else {
    callData = '';
  }
  const options = {
    method,
    body: callData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': token || '',
    },
  };

  return fetch(url, options)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export default serverCall;
