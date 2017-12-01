# textstyler
[![Build Status](https://travis-ci.org/jaebradley/textstyler.svg?branch=master)](https://travis-ci.org/jaebradley/textstyler)
[![npm](https://img.shields.io/npm/v/textstyler.svg)](https://www.npmjs.com/package/textstyler)
[![npm_downloads](https://img.shields.io/npm/dt/textstyler.svg)](https://www.npmjs.com/package/textstyler)
[![GitHub release](https://img.shields.io/github/release/jaebradley/textstyler.svg)](https://github.com/jaebradley/textstyler/releases)

## Introduction
Apply text styling to substrings (represented by character index ranges)

I mostly built this library to handle text match results returned by [the GitHub Search API](https://developer.github.com/v3/search/)
```json
{
    "fragment": " without crashing', () => {\n  const div = document.createElement('div');\n  ReactDOM.render(<App />, div);\n});\n",
    "matches": [
        {
            "text": "React",
            "indices": [
                75,
                80
            ]
        }
    ]
}
```

## Install
`npm install textstyler --save`

## API

### Text Style Options

Pretty much a 1-to-1 mapping with the [`colors` package](https://github.com/Marak/colors.js)

__TextColors__:
* BLACK
* RED
* GREEN
* YELLOW
* BLUE
* MAGENTA
* CYAN
* WHITE
* GRAY
* GREY

__BackgroundColors__:
* BLACK
* RED
* GREEN
* YELLOW
* BLUE
* MAGENTA
* CYAN
* WHITE

__TextFormat__:
* RESET
* BOLD
* DIM
* ITALIC
* UNDERLINE
* INVERSE
* HIDDEN
* STRIKETHROUGH

### Style

* `TextStyler.style(text, styledSubstrings)`
  * `text` is a string to apply formatting to
  * `styledSubstrings` are an array of `StyledRange` objects
    * A `StyledRange` takes
      * A `Range`
        * Takes a `start` and an `end` parameter
        * These are numbers that represent the __inclusive__ character indices to apply a particular `TextStyle` to
      * A `TextStyle`
        * Takes a `color`, `backgroundColor`, and `format` parameter
        * `color` represents the text color
        * `backgroundColor` represents the text background color
        * `format` represents some text format (like __bold__ text)
    * `StyledRange`s are applied in order - text styles are merged based on the last text style

#### Example
```javascript
import { Range, TextStyler, StyledRange, TextStyle, TextColor, TextFormat, BackgroundColor } from 'textstyler';

const value = 'foobar';
const range = new Range(1, 3);
const anotherRange = new Range(2, 4);

const style = new TextStyle(TextColor.CYAN, BackgroundColor.WHITE, TextFormat.ITALIC);
const anotherStyle = new TextStyle(TextColor.RED, BackgroundColor.BLUE, TextFormat.BOLD);

const styledRange = new StyledRange(range, style);
const anotherStyledRange = new StyledRange(anotherRange, anotherStyle);

const styledText = TextStyler.style(value, [ styledRange, anotherStyledRange ]);
```
The above example should output
![alt-ext](https://imgur.com/Bmf5vQq.png)
