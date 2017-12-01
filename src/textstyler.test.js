/* eslint-disable */
import TextStyler from './textstyler';
import Range from './data/range';
import StyledRange from './data/styledRange';
import TextStyle from './data/textStyle';
import { TextColor, BackgroundColor, TextFormat } from './data/constants';

describe('TextStyler', () => {
  const value = 'foobar';
  describe('#style integration tests', () => {
    const range = new Range(1, 3);
    const range2 = new Range(3, 5);
    const range3 = new Range(4, 6);
    const range4 = new Range(10, 11);

    // it('should return styled text with text and background colors', () => {
    //   const style = new TextStyle(TextColor.CYAN, null, null);
    //   const styledRange = new StyledRange(range, style);
    //   const style2 = new TextStyle(null, BackgroundColor.WHITE, null);
    //   const styledRange2 = new StyledRange(range, style2);
    //   const styledText = TextStyler.style(value, [styledRange, styledRange2]);
    //
    //   const getFormattedCharacter = character => (`\u001b[47m\u001b[36m${character}\u001b[39m\u001b[49m`);
    //   expect(styledText).toEqual(`f${getFormattedCharacter('o')}${getFormattedCharacter('o')}${getFormattedCharacter('b')}ar`);
    // });
    //
    // it('should return overlapping styled text', () => {
    //   const style = new TextStyle(TextColor.CYAN, BackgroundColor.WHITE, TextFormat.ITALIC);
    //   const style2 = new TextStyle(TextColor.RED, BackgroundColor.BLUE, TextFormat.BOLD);
    //   const styledRange = new StyledRange(range, style);
    //   const styledRange2 = new StyledRange(range2, style2);
    //   const styledText = TextStyler.style(value, [styledRange, styledRange2]);
    //   expect(styledText).toEqual('f\u001b[3m\u001b[47m\u001b[36mo\u001b[39m\u001b[49m\u001b[23m\u001b[3m\u001b[47m\u001b[36mo\u001b[39m\u001b[49m\u001b[23m\u001b[1m\u001b[44m\u001b[31mb\u001b[39m\u001b[49m\u001b[22m\u001b[1m\u001b[44m\u001b[31ma\u001b[39m\u001b[49m\u001b[22m\u001b[1m\u001b[44m\u001b[31mr\u001b[39m\u001b[49m\u001b[22m');
    // });
    //
    // it('should return styled text partially outside range', () => {
    //   const style = new TextStyle(TextColor.CYAN, BackgroundColor.WHITE, TextFormat.ITALIC);
    //   const styledRange = new StyledRange(range3, style);
    //   const styledText = TextStyler.style(value, [styledRange]);
    //   expect(styledText).toEqual('foob\u001b[3m\u001b[47m\u001b[36ma\u001b[39m\u001b[49m\u001b[23m\u001b[3m\u001b[47m\u001b[36mr\u001b[39m\u001b[49m\u001b[23m');
    // });

    // TODO: @jaebradley figure out why these tests pass locally but fail on Travis
    it('should not return styled text totally outside range', () => {
      const style = new TextStyle(TextColor.CYAN, BackgroundColor.WHITE, TextFormat.ITALIC);
      const styledRange = new StyledRange(range4, style);
      const styledText = TextStyler.style(value, [styledRange]);
      expect(styledText).toEqual('foobar');
    });
  });
});
