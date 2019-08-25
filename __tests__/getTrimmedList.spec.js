import getTrimmedList from '../src/helpers/getTrimmedList';

const list = [{ name: 'list 1' }, { name: 'list 2' }, { name: 'list 3' }, { name: 'list 4' }];

describe('getTrimmedList', () => {
  it('returns a trimmed list based on count', () => {
    expect(getTrimmedList(list, 2)).toEqual([{ name: 'list 1' }, { name: 'list 2' }]);
  });
});
