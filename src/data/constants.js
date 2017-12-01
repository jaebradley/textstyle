const TextColor = Object.freeze({
  BLACK: { name: 'black' },
  RED: { name: 'red' },
  GREEN: { name: 'green' },
  YELLOW: { name: 'yellow' },
  BLUE: { name: 'blue' },
  MAGENTA: { name: 'magenta' },
  CYAN: { name: 'cyan' },
  WHITE: { name: 'white' },
  GRAY: { name: 'gray' },
  GREY: { name: 'grey' },
});

const BackgroundColor = Object.freeze({
  BLACK: { name: 'black' },
  RED: { name: 'red' },
  GREEN: { name: 'green' },
  YELLOW: { name: 'yellow' },
  BLUE: { name: 'blue' },
  MAGENTA: { name: 'magenta' },
  CYAN: { name: 'cyan' },
  WHITE: { name: 'white' },
});

const TextFormat = Object.freeze({
  RESET: { name: 'reset' },
  BOLD: { name: 'bold' },
  DIM: { name: 'dim' },
  ITALIC: { name: 'italic' },
  UNDERLINE: { name: 'underline' },
  INVERSE: { name: 'inverse' },
  HIDDEN: { name: 'hidden' },
  STRIKETHROUGH: { name: 'strikethrough' },
});

export {
  TextColor,
  BackgroundColor,
  TextFormat,
};
