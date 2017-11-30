import TextStyle from './textStyle';

describe('TextStyle', () => {
  describe('#constructor', () => {
    it('should construct text style successfully', () => {
      const color = 'color';
      const backgroundColor = 'backgroundColor';
      const format = 'format';
      const textStyle = new TextStyle(color, backgroundColor, format);
      expect(textStyle.color).toEqual(color);
      expect(textStyle.backgroundColor).toEqual(backgroundColor);
      expect(textStyle.format).toEqual(format);
    });
  });

  describe('#mergeStyles', () => {
    const firstColor = 'firstColor';
    const firstBackgroundColor = 'firstBackgroundColor';
    const firstFormat = 'firstFormat';
    const secondColor = 'secondColor';
    const secondBackgroundColor = 'secondBackgroundColor';
    const secondFormat = 'secondFormat';
    it('should use second style', () => {
      const firstTextStyle = new TextStyle(firstColor, firstBackgroundColor, firstFormat);
      const secondTextStyle = new TextStyle(secondColor, secondBackgroundColor, secondFormat);
      expect(TextStyle.mergeStyles(firstTextStyle, secondTextStyle)).toEqual(secondTextStyle);
    });
    it('should use first style for null second style values', () => {
      const firstTextStyle = new TextStyle(firstColor, firstBackgroundColor, firstFormat);
      const secondTextStyle = new TextStyle(null, null, null);
      expect(TextStyle.mergeStyles(firstTextStyle, secondTextStyle)).toEqual(firstTextStyle);
    });
  });
});
