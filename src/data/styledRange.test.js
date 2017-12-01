import StyledRange from './styledRange';

describe('StyledRange', () => {
  describe('#constructor', () => {
    it('should construct successfully', () => {
      const range = 'range';
      const style = 'style';
      const styledRange = new StyledRange(range, style);
      expect(styledRange.range).toEqual(range);
      expect(styledRange.style).toEqual(style);
    });
  });
});
