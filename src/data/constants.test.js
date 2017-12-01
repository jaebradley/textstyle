import { TextColor, BackgroundColor, TextFormat } from './constants';

describe('Constants', () => {
  describe('TextColor', () => {
    it('should validate text color values', () => {
      expect(TextColor.BLACK).toEqual({ name: 'black' });
      expect(TextColor.RED).toEqual({ name: 'red' });
      expect(TextColor.GREEN).toEqual({ name: 'green' });
      expect(TextColor.YELLOW).toEqual({ name: 'yellow' });
      expect(TextColor.BLUE).toEqual({ name: 'blue' });
      expect(TextColor.MAGENTA).toEqual({ name: 'magenta' });
      expect(TextColor.CYAN).toEqual({ name: 'cyan' });
      expect(TextColor.WHITE).toEqual({ name: 'white' });
      expect(TextColor.GRAY).toEqual({ name: 'gray' });
      expect(TextColor.GREY).toEqual({ name: 'grey' });
    });
  });

  describe('BackgroundColor', () => {
    it('should validate background color', () => {
      expect(BackgroundColor.BLACK).toEqual({ name: 'black' });
      expect(BackgroundColor.RED).toEqual({ name: 'red' });
      expect(BackgroundColor.GREEN).toEqual({ name: 'green' });
      expect(BackgroundColor.YELLOW).toEqual({ name: 'yellow' });
      expect(BackgroundColor.BLUE).toEqual({ name: 'blue' });
      expect(BackgroundColor.MAGENTA).toEqual({ name: 'magenta' });
      expect(BackgroundColor.CYAN).toEqual({ name: 'cyan' });
      expect(BackgroundColor.WHITE).toEqual({ name: 'white' });
    });
  });

  describe('TextFormat', () => {
    it('should validate text format', () => {
      expect(TextFormat.RESET).toEqual({ name: 'reset' });
      expect(TextFormat.BOLD).toEqual({ name: 'bold' });
      expect(TextFormat.DIM).toEqual({ name: 'dim' });
      expect(TextFormat.ITALIC).toEqual({ name: 'italic' });
      expect(TextFormat.UNDERLINE).toEqual({ name: 'underline' });
      expect(TextFormat.INVERSE).toEqual({ name: 'inverse' });
      expect(TextFormat.HIDDEN).toEqual({ name: 'hidden' });
      expect(TextFormat.STRIKETHROUGH).toEqual({ name: 'strikethrough' });
    });
  });
});
