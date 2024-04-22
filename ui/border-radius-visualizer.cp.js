import { component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { Color } from "lively.graphics/color.js";
import { Text } from "lively.morphic/text/morph.js";
"format esm";
const BorderRadiusVisualizer = component({
  type: BorderRadiusVisualizer,
  name: undefined,
  borderColor: Color.rgb(189,195,199),
  borderStyle: "dashed",
  extent: pt(253.7,130),
  fill: Color.rgb(253,254,254),
  submorphs: [{
  type: Text,
  name: "aText copy1",
  clipMode: "hidden",
  extent: pt(137.3,34),
  fixedHeight: true,
  fixedWidth: true,
  fontColor: Color.rgb(121,125,127),
  fontSize: 16,
  lineHeight: 1.5,
  lineWrapping: true,
  position: pt(14.5,8.5),
  textAlign: "left",
  textAndAttributes: ["borderRadius", {
      fontSize: 20,
      fontWeight: "bold"
    }]
}, {
  name: "dummy",
  borderRadius: 1,
  extent: pt(59.3,53),
  fill: Color.rgb(52,152,219),
  position: pt(173.7,56)
}]
});



export { BorderRadiusVisualizer }