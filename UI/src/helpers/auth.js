import serverCall from '../services/serverCall';
import authUrl from '../services/servicesUrls';


const isAuth = (user) => {
  const { token } = user;
  const authPayload = {
    url: authUrl,
    data: token,
    method: 'POST',
  };

  serverCall(authPayload)
    .then((res) => {
      const { status } = res;
      if (status === 200) {
        return true;
      }
      return false;
    });
};

export default isAuth;
