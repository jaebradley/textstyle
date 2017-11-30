class TextStyle {
  constructor(color, backgroundColor, format) {
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.format = format;
  }

  static mergeStyles(firstTextStyle, secondTextStyle) {
    const color = secondTextStyle.color || firstTextStyle.color;
    const backgroundColor = secondTextStyle.backgroundColor || firstTextStyle.backgroundColor;
    const format = secondTextStyle.format || firstTextStyle.format;
    return new TextStyle(color, backgroundColor, format);
  }
}

export default TextStyle;
