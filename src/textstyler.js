import StyledRange from './data/styledRange';
import TextStyle from './data/textStyle';
import TextStyleApplier from './services/textStyleApplier';

class TextStyler {
  static style(text, styledSubstrings) {
    const characterStyles = TextStyler.getCharacterStyles(styledSubstrings);
    return TextStyler.applyStyles(text, characterStyles);
  }

  static getCharacterStyles(styledSubstrings) {
    const characterStyles = {};
    styledSubstrings.forEach((styledSubstring) => {
      if (styledSubstring instanceof StyledRange) {
        TextStyler.validateRange(styledSubstring);

        for (let i = styledSubstring.range.start; i <= styledSubstring.range.end; i += 1) {
          if (i in characterStyles) {
            characterStyles[i] = TextStyle.mergeStyles(characterStyles[i], styledSubstring.style);
          } else {
            characterStyles[i] = styledSubstring.style;
          }
        }
      } else {
        throw new Error(`Unable to apply style for ${styledSubstring}`);
      }
    });
    return characterStyles;
  }

  static applyStyles(text, characterStyles) {
    let styledText = '';
    for (let i = 0; i < text.length; i += 1) {
      const currentCharacter = text[i];
      let styledCharacter = currentCharacter;
      if (i in characterStyles) {
        const style = characterStyles[i];
        styledCharacter = TextStyleApplier.applyStyle(currentCharacter, style);
      }
      styledText = `${styledText}${styledCharacter}`;
    }
    return styledText;
  }

  static validateRange(range) {
    if (range.start < 0) {
      throw new Error(`start value: ${range.start} cannot be less than 0`);
    }

    if (range.end < 0) {
      throw new Error(`end value: ${range.end} cannot be less than 0`);
    }

    if (range.start > range.end) {
      throw new Error(`start value: ${range.start} cannot be greater than the end value: ${range.end}`);
    }
  }
}

export default TextStyler;
