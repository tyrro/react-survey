import { formatDate } from './date';

describe('Date helper', () => {
  describe('formatTodaysDate', () => {
    it('returns formatted date', () => {
      const date = new Date('19 April 2022');

      expect(formatDate(date)).toEqual('Tuesday, April 19');
    });
  });
});
