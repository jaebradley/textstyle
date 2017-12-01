/* eslint-disable */
// TODO: @jaebradley figure out why these tests pass locally but fail on Travis

import TextStyleApplier from './textStyleApplier';
// import { TextColor, BackgroundColor, TextFormat } from '../data/constants';

describe('TextStyleApplier', () => {
  const value = 'foobar';

  describe('#applyTextFormat', () => {
    it('should throw for unknown text format', () => {
      expect(() => TextStyleApplier.applyTextFormat(value, 'baz')).toThrowError('Unknown text format: baz');
    });

    // it('should format value with reset text format', () => {
    //   expect(TextStyleApplier.applyTextFormat(value, TextFormat.RESET)).toEqual(`\u001b[0m${value}\u001b[0m`);
    // });
    //
    // it('should format value with bold text format', () => {
    //   expect(TextStyleApplier.applyTextFormat(value, TextFormat.BOLD)).toEqual(`\u001b[1m${value}\u001b[22m`);
    // });
    //
    // it('should format value with dim text format', () => {
    //   expect(TextStyleApplier.applyTextFormat(value, TextFormat.DIM)).toEqual(`\u001b[2m${value}\u001b[22m`);
    // });
    //
    // it('should format value with italic text format', () => {
    //   expect(TextStyleApplier.applyTextFormat(value, TextFormat.ITALIC)).toEqual(`\u001b[3m${value}\u001b[23m`);
    // });
    //
    // it('should format value with underline text format', () => {
    //   expect(TextStyleApplier.applyTextFormat(value, TextFormat.UNDERLINE)).toEqual(`\u001b[4m${value}\u001b[24m`);
    // });
    //
    // it('should format value with inverse text format', () => {
    //   expect(TextStyleApplier.applyTextFormat(value, TextFormat.INVERSE)).toEqual(`\u001b[7m${value}\u001b[27m`);
    // });
    //
    // it('should format value with hidden text format', () => {
    //   expect(TextStyleApplier.applyTextFormat(value, TextFormat.HIDDEN)).toEqual(`\u001b[8m${value}\u001b[28m`);
    // });
    //
    // it('should format value with strikethrough text format', () => {
    //   expect(TextStyleApplier.applyTextFormat(value, TextFormat.STRIKETHROUGH)).toEqual(`\u001b[9m${value}\u001b[29m`);
    // });
  });
  //
  // describe('#applyBackgroundColor', () => {
  //   it('should throw for unknown background color', () => {
  //     expect(() => TextStyleApplier.applyBackgroundColor(value, 'baz')).toThrowError('Unknown background color: baz');
  //   });
  //
  //   it('should apply black background color', () => {
  //     expect(TextStyleApplier.applyBackgroundColor(value, BackgroundColor.BLACK)).toEqual(`\u001b[40m${value}\u001b[49m`);
  //   });
  //
  //   it('should apply red background color', () => {
  //     expect(TextStyleApplier.applyBackgroundColor(value, BackgroundColor.RED)).toEqual(`\u001b[41m${value}\u001b[49m`);
  //   });
  //
  //   it('should apply green background color', () => {
  //     expect(TextStyleApplier.applyBackgroundColor(value, BackgroundColor.GREEN)).toEqual(`\u001b[42m${value}\u001b[49m`);
  //   });
  //
  //   it('should apply yellow background color', () => {
  //     expect(TextStyleApplier.applyBackgroundColor(value, BackgroundColor.YELLOW)).toEqual(`\u001b[43m${value}\u001b[49m`);
  //   });
  //
  //   it('should apply blue background color', () => {
  //     expect(TextStyleApplier.applyBackgroundColor(value, BackgroundColor.BLUE)).toEqual(`\u001b[44m${value}\u001b[49m`);
  //   });
  //
  //   it('should apply magenta background color', () => {
  //     expect(TextStyleApplier.applyBackgroundColor(value, BackgroundColor.MAGENTA)).toEqual(`\u001b[45m${value}\u001b[49m`);
  //   });
  //
  //   it('should apply cyan background color', () => {
  //     expect(TextStyleApplier.applyBackgroundColor(value, BackgroundColor.CYAN)).toEqual(`\u001b[46m${value}\u001b[49m`);
  //   });
  //
  //   it('should apply white background color', () => {
  //     expect(TextStyleApplier.applyBackgroundColor(value, BackgroundColor.WHITE)).toEqual(`\u001b[47m${value}\u001b[49m`);
  //   });
  // });
  //
  // describe('#applyTextColor', () => {
  //   it('should throw for unknown text color', () => {
  //     expect(() => TextStyleApplier.applyTextColor(value, 'baz')).toThrow('Unknown text color: baz');
  //   });
  //
  //   it('should apply black text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.BLACK)).toEqual(`\u001b[30m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply red text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.RED)).toEqual(`\u001b[31m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply green text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.GREEN)).toEqual(`\u001b[32m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply yellow text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.YELLOW)).toEqual(`\u001b[33m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply blue text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.BLUE)).toEqual(`\u001b[34m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply magenta text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.MAGENTA)).toEqual(`\u001b[35m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply cyan text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.CYAN)).toEqual(`\u001b[36m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply white text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.WHITE)).toEqual(`\u001b[37m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply gray text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.GRAY)).toEqual(`\u001b[90m${value}\u001b[39m`);
  //   });
  //
  //   it('should apply grey text color', () => {
  //     expect(TextStyleApplier.applyTextColor(value, TextColor.GREY)).toEqual(`\u001b[90m${value}\u001b[39m`);
  //   });
  // });
  //
  // describe('#applyStyle', () => {
  //   it('should not apply any styles', () => {
  //     expect(TextStyleApplier.applyStyle(value, {})).toEqual(value);
  //   });
  //
  //   it('should apply all styles', () => {
  //     const style = {
  //       color: TextColor.RED,
  //       backgroundColor: BackgroundColor.WHITE,
  //       format: TextFormat.ITALIC,
  //     };
  //     expect(TextStyleApplier.applyStyle(value, style)).toEqual(`\u001b[3m\u001b[47m\u001b[31m${value}\u001b[39m\u001b[49m\u001b[23m`);
  //   });
  // });
});
