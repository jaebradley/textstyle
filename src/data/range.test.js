import Range from './range';

describe('Range', () => {
  describe('#constructor', () => {
    it('should construct successfully', () => {
      const start = 'start';
      const end = 'end';
      const range = new Range(start, end);
      expect(range.start).toEqual(start);
      expect(range.end).toEqual(end);
    });
  });
});
