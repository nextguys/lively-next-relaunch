import { component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
const serialization = component({
  type: HTMLMorph,
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,984),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<ul>\n\
<li>Objects in lively.next (and in particular Morphs) support full serialization of the object state into a JSON format.</li>\n\
<li>This JSON snapshot can then in turn be used to reinitialize <em>(deserialize)</em> the serialized objects into memory.</li>\n\
<li>Since the control of the runtime in Javascript is limited (we can not yet create pure memory snapshots) there are caviats. For instance we are unable to reliably serialize closures.</li>\n\
<li>This means the in order to be able to successfuly serialize objects in lively.next, the classes of the objects need to be particulary designed with care such that they can be correctly <em>revived</em>.</li>\n\
<li>Correct revival is not trivial due to two reasons:\n\
<ul>\n\
<li>Invocation of setters need to be able to handle a case where a setter is triggered during deserialization vs during normal execution of a program.\n\
<ul>\n\
<li>The nature of execution between deserialization and normal execution varies heavily since normal execution usually implicitly respects certain constraints about properties (for instance property A cannot be defined before property B since it relies partially on A). Deserialization on the other hand cannot guess these implicit constraints and therefore relies on explicit knowledge of property dependencies.</li>\n\
<li>This aspect is usually easy to handle by keeping setter logic simple and avoiding doing overly much in response to property changes.</li>\n\
</ul>\n\
</li>\n\
<li>Reconstruction of non serializable objects needs to be handled correctly. For instance using 3rd part libraries to archieve certain capabilities requires those objects to be reinstantiated “at once”. In practice this aspect turns out to be the more tricky one, and oftern can only be approximately handled.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
\n\
</div>',
  layout: null,
  position: pt(813,472)
});



export { serialization }