// TODO: @jaebradley figure out why these tests pass locally but fail on Travis
// import colors from 'colors';
//
// import { TextColor, BackgroundColor, TextFormat } from '../data/constants';
//
// class TextStyleApplier {
//   static applyStyle(value, style) {
//     let styledValue = value;
//
//     if (style.color) {
//       styledValue = TextStyleApplier.applyTextColor(styledValue, style.color);
//     }
//
//     if (style.backgroundColor) {
//       styledValue = TextStyleApplier.applyBackgroundColor(styledValue, style.backgroundColor);
//     }
//
//     if (style.format) {
//       styledValue = TextStyleApplier.applyTextFormat(styledValue, style.format);
//     }
//
//     return styledValue;
//   }
//
//   static applyTextColor(value, textColor) {
//     switch (textColor) {
//       case TextColor.BLACK:
//         return colors.black(value);
//       case TextColor.RED:
//         return colors.red(value);
//       case TextColor.GREEN:
//         return colors.green(value);
//       case TextColor.YELLOW:
//         return colors.yellow(value);
//       case TextColor.BLUE:
//         return colors.blue(value);
//       case TextColor.MAGENTA:
//         return colors.magenta(value);
//       case TextColor.CYAN:
//         return colors.cyan(value);
//       case TextColor.WHITE:
//         return colors.white(value);
//       case TextColor.GRAY:
//         return colors.gray(value);
//       case TextColor.GREY:
//         return colors.grey(value);
//       default:
//         throw new Error(`Unknown text color: ${textColor}`);
//     }
//   }
//
//   static applyBackgroundColor(value, backgroundColor) {
//     switch (backgroundColor) {
//       case BackgroundColor.BLACK:
//         return colors.bgBlack(value);
//       case BackgroundColor.RED:
//         return colors.bgRed(value);
//       case BackgroundColor.GREEN:
//         return colors.bgGreen(value);
//       case BackgroundColor.YELLOW:
//         return colors.bgYellow(value);
//       case BackgroundColor.BLUE:
//         return colors.bgBlue(value);
//       case BackgroundColor.MAGENTA:
//         return colors.bgMagenta(value);
//       case BackgroundColor.CYAN:
//         return colors.bgCyan(value);
//       case BackgroundColor.WHITE:
//         return colors.bgWhite(value);
//       default:
//         throw new Error(`Unknown background color: ${backgroundColor}`);
//     }
//   }
//
//   static applyTextFormat(value, textFormat) {
//     switch (textFormat) {
//       case TextFormat.RESET:
//         return colors.reset(value);
//       case TextFormat.BOLD:
//         return colors.bold(value);
//       case TextFormat.DIM:
//         return colors.dim(value);
//       case TextFormat.ITALIC:
//         return colors.italic(value);
//       case TextFormat.UNDERLINE:
//         return colors.underline(value);
//       case TextFormat.INVERSE:
//         return colors.inverse(value);
//       case TextFormat.HIDDEN:
//         return colors.hidden(value);
//       case TextFormat.STRIKETHROUGH:
//         return colors.strikethrough(value);
//       default:
//         throw new Error(`Unknown text format: ${textFormat}`);
//     }
//   }
// }
//
// export default TextStyleApplier;
