import { EditorView, basicSetup } from "codemirror";

new EditorView({
    extensions: [basicSetup],
    parent: document.getElementById("editor")
});