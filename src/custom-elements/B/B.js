import { CustomBaseElement } from "../base/base.js";

const customBtemplate = document.createElement("template");
customBtemplate.innerHTML = `
<div>B</div>
<slot></slot>
`;

export class CustomBElement extends CustomBaseElement {
  constructor() {
    super();

    this.shadowRoot.append(customBtemplate.content.cloneNode(true));
  }
}
