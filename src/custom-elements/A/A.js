import { CustomBaseElement } from "../base/base.js";

const customAtemplate = document.createElement("template");
customAtemplate.innerHTML = `
<div class="bla">A</div>
<slot></slot>
`;

export class CustomAElement extends CustomBaseElement {
  constructor() {
    super();

    this.shadowRoot.append(customAtemplate.content.cloneNode(true));
  }
}
