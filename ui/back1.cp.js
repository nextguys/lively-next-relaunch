import { component } from 'lively.morphic/index.js';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';

export const PaginationButtonEnabled = component({
  type: Text,
  name: 'button',
  extent: pt(25, 20),
  fixedWidth: true,
  textAlign: 'center',
  borderColor: Color.rgb(23, 160, 251),
  dynamicCursorColoring: true,
  fill: Color.rgb(255, 255, 255),
  lineWrapping: 'by-words',
  padding: rect(1, 1, 0, 0),
  position: pt(332.5, 458.3),
  textAndAttributes: ['', {
    fontFamily: '"Font Awesome 6 Free", "Font Awesome 6 Brands"',
    fontWeight: '900'
  }, ' ', {}]
});

export const PaginationButtonHovered = component(PaginationButtonEnabled, {
  fontSize: 15
});

export const PaginationButtonDisabled = component(PaginationButtonEnabled, {
  fontColor: Color.gray
});

export const PaginationButton = component(PaginationButtonEnabled, {
  master: {
    auto: PaginationButtonEnabled,
    hover: PaginationButtonHovered,
    states: {
      disabled: PaginationButtonDisabled
    }
  }
});
