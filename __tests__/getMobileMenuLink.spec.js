import { userMobileMenuLinks, staffMobileMenuLinks, adminMobileMenuLinks } from '../src/components/componentsData';
import getMobileMenuLinks from '../src/helpers/getMobileMenuLinks';

describe('getMobileMenuLinks', () => {
  it('returns default userMobileMenuLinks', () => {
    expect(getMobileMenuLinks('')).toEqual(userMobileMenuLinks);
  });

  it('returns userMobileMenuLinks', () => {
    expect(getMobileMenuLinks('user')).toEqual(userMobileMenuLinks);
  });

  it('returns staffMobileMenuLinks', () => {
    expect(getMobileMenuLinks('staff')).toEqual(staffMobileMenuLinks);
  });

  it('returns adminMobileMenuLinks', () => {
    expect(getMobileMenuLinks('admin')).toEqual(adminMobileMenuLinks);
  });
});
