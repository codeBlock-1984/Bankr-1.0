import GetDateString from '../src/helpers/getDateString';

const { getShortDateString, getLongDateString } = GetDateString;

const rawTimeStamp = '2019-05-26T23:32:14.752Z';

describe('GetDateString', () => {
  describe('GetShortDateString', () => {
    it('returns short date string', () => {
      expect(getShortDateString(rawTimeStamp)).toEqual('Mon May 27 2019 00:32:14');
    });
  });

  describe('GetLongDateString', () => {
    it('returns short date string', () => {
      expect(getLongDateString(rawTimeStamp)).toEqual('Mon May 27 2019 00:32:14 ');
    });
  });
});
