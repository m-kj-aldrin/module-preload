const globalShadowStyleSheet = new CSSStyleSheet();

{
  const globalShadowStyleText = await (
    await fetch("/src/style/globalShadow.css")
  ).text();

  globalShadowStyleSheet.replaceSync(globalShadowStyleText);
}

const customBasetemplate = document.createElement("template");
customBasetemplate.innerHTML = `

`;

export class CustomBaseElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.adoptedStyleSheets = [globalShadowStyleSheet];

    this.shadowRoot.append(customBasetemplate.content.cloneNode(true));
  }
}
