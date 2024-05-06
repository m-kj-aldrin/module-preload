import { CustomAElement } from "./custom-elements/A/A";
import { CustomBElement } from "./custom-elements/B/B";

declare global {
  interface HTMLElementTagNameMap {
    "x-a": CustomAElement;
    "x-b": CustomBElement;
  }
}
