import { Component, Element, Host, Prop, h } from "@stencil/core";

import {
  width,
  height,
  color,
  bg,
  fontSize,
  display,
  margin,
  padding,
  alignItems,
  alignContent,
  flexWrap,
  flexDirection
} from "../../utils/props";

@Component({
  tag: "sui-box",
  styleUrl: "box.css",
  shadow: true
})
export class Box {
  /**
   * Ref to component in DOM
   */
  @Element() el: HTMLElement;

  /**
   * Responsive width
   */
  @Prop() width: string | string[] | number | number[];

  /**
   * Responsive height
   */
  @Prop() height: string | string[] | number | number[];

  /**
   * Responsive fontSize
   */
  @Prop() fontSize: string | string[] | number | number[];

  /**
   * Responsive margin
   */
  @Prop() margin: string | string[] | number | number[];
  @Prop() m: string | string[] | number | number[];

  /**
   * Responsive padding
   */
  @Prop() padding: string | string[] | number | number[];
  @Prop() p: string | string[] | number | number[];

  /**
   * Text color
   */
  @Prop() color: string;

  /**
   * Text bg
   */
  @Prop() bg: string;

  /**
   * CSS property display
   */
  @Prop() display: string;

  /**
   * Flex property align-items
   */
  @Prop() alignItems: string;

  /**
   * Flex property align-content
   */
  @Prop() alignContent: string;

  /**
   * Flex property flex-wrap
   */
  @Prop() flexWrap: string;

  /**
   * Flex property flex-direction
   */
  @Prop() flexDirection: string;

  componentWillRender() {
    width("box", this.width, this.el.style);
    height("box", this.height, this.el.style);
    color("box", this.color, this.el.style);
    bg("box", this.bg, this.el.style);
    fontSize("box", this.fontSize, this.el.style);
    display("box", this.display, this.el.style);
    margin("box", this.margin, this.el.style);
    padding("box", this.padding, this.el.style);
    alignItems("box", this.alignItems, this.el.style);
    alignContent("box", this.alignContent, this.el.style);
    flexWrap("box", this.flexWrap, this.el.style);
    flexDirection("box", this.flexDirection, this.el.style);
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
