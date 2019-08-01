import { userMobileMenuLinks, staffMobileMenuLinks, adminMobileMenuLinks } from '../components/componentsData';

const getMobileMenuLinks = (type) => {
  switch (type) {
    case 'user':
      default:
      return userMobileMenuLinks;

    case 'staff':
      return staffMobileMenuLinks;

    case 'admin':
      return adminMobileMenuLinks;
  }
};

export default getMobileMenuLinks;
