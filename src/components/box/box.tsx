import { Component, Host, h } from "@stencil/core";

const breakpoints = ["desktop", "tablet", "mobile"];

const convertNumToCSS = number => {
  if (typeof number == "number") {
    return `${Math.floor(number * 100)}%`;
  }
  return number;
};

@Component({
  tag: "sui-box",
  styleUrl: "box.css",
  shadow: true
})
export class Box {
  @Element() el: HTMLElement;
  /**
   * Responsive width
   */
  @Prop() width: string | string[];

  componentWillRender() {
    const { width } = this;
    // Calculate responsive width props to CSS vars
    if (Array.isArray(width) || typeof width === "object") {
      // Loop through width array and set CSS vars
      width.reverse().map((currentValue, index) => {
        this.el.style.setProperty(
          `--sui-button-width-${breakpoints[index]}`,
          convertNumToCSS(currentValue)
        );
        if (width.length - 1 === index) {
          this.el.style.setProperty(
            `--sui-button-width`,
            convertNumToCSS(currentValue)
          );
        }
      });
    } else if (width === null) {
      this.el.style.setProperty(`--sui-button-width`, width);
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
