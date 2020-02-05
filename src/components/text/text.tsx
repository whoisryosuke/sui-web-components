import { Component, Element, Host, Prop, h } from "@stencil/core";

import {
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  color,
  bg,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  display,
  margin,
  padding,
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius
} from "../../utils/props";

@Component({
  tag: "sui-text",
  styleUrl: "text.css",
  shadow: true
})
export class Text {
  /**
   * Ref to component in DOM
   */
  @Element() el: HTMLElement;

  /**
   * HTML element to use as basis
   */
  @Prop() as?: string;

  /**
   * Sets component content to this text. Alternative to slots.
   */
  @Prop() text: string | undefined;

  /**
   * Responsive width
   */
  @Prop() width: string | string[] | number | number[];

  /**
   * Responsive min-width
   */
  @Prop() minWidth: string | string[] | number | number[];

  /**
   * Responsive max-width
   */
  @Prop() maxWidth: string | string[] | number | number[];

  /**
   * Responsive height
   */
  @Prop() height: string | string[] | number | number[];

  /**
   * Responsive min-height
   */
  @Prop() minHeight: string | string[] | number | number[];

  /**
   * Responsive max-height
   */
  @Prop() maxHeight: string | string[] | number | number[];

  /**
   * Responsive fontSize
   */
  @Prop() fontSize: string | string[] | number | number[];

  /**
   * Responsive textAlign
   */
  @Prop() textAlign: string | string[] | number | number[];

  /**
   * CSS property for lineHeight
   */
  @Prop() lineHeight: string | string[] | number | number[];

  /**
   * CSS property for fontWeight
   */
  @Prop() fontWeight: string | string[] | number | number[];

  /**
   * CSS property for letterSpacing
   */
  @Prop() letterSpacing: string | string[] | number | number[];

  /**
   * CSS property for responsive margin
   */
  @Prop() margin: string | string[] | number | number[];
  @Prop() m: string | string[] | number | number[];

  /**
   * CSS property for responsive padding
   */
  @Prop() padding: string | string[] | number | number[];
  @Prop() p: string | string[] | number | number[];

  /**
   * CSS property display
   */
  @Prop() display: string;

  /**
   * CSS property for text color
   */
  @Prop() color: string;

  /**
   * CSS property for background color
   */
  @Prop() background: string;
  @Prop() bg: string;

  /**
   * CSS property for border
   */
  @Prop() border: string | number;

  /**
   * CSS property for borderTop
   */
  @Prop() borderTop: string | number;
  /**
   * CSS property for borderBottom
   */
  @Prop() borderBottom: string | number;
  /**
   * CSS property for borderLeft
   */
  @Prop() borderLeft: string | number;
  /**
   * CSS property for borderRight
   */
  @Prop() borderRight: string | number;

  /**
   * CSS property for borderWidth
   */
  @Prop() borderWidth: string | number;
  /**
   * CSS property for borderStyle
   */
  @Prop() borderStyle: string;
  /**
   * CSS property for borderColor
   */
  @Prop() borderColor: string;
  /**
   * CSS property for borderRadius
   */
  @Prop() borderRadius: string | number;

  componentWillRender() {
    // Sizing
    width("text", this.width, this.el.style);
    height("text", this.height, this.el.style);
    maxWidth("text", this.maxWidth, this.el.style);
    minWidth("text", this.minWidth, this.el.style);
    maxHeight("text", this.maxHeight, this.el.style);
    minHeight("text", this.minHeight, this.el.style);
    const paddingProp = this.padding || this.p;
    const marginProp = this.margin || this.m;
    margin("text", marginProp, this.el.style);
    padding("text", paddingProp, this.el.style);
    display("text", this.display, this.el.style);

    // Color
    color("text", this.color, this.el.style);
    const bgProp = this.background || this.bg;
    bg("text", bgProp, this.el.style);

    // Fonts
    fontSize("text", this.fontSize, this.el.style);
    textAlign("text", this.textAlign, this.el.style);
    lineHeight("text", this.lineHeight, this.el.style);
    fontWeight("text", this.fontWeight, this.el.style);
    letterSpacing("text", this.letterSpacing, this.el.style);

    // Border
    border("text", this.border, this.el.style);
    borderTop("text", this.borderTop, this.el.style);
    borderBottom("text", this.borderBottom, this.el.style);
    borderLeft("text", this.borderLeft, this.el.style);
    borderRight("text", this.borderRight, this.el.style);
    borderWidth("text", this.borderWidth, this.el.style);
    borderStyle("text", this.borderStyle, this.el.style);
    borderColor("text", this.borderColor, this.el.style);
    borderRadius("text", this.borderRadius, this.el.style);
  }

  render() {
    const { text } = this;
    // Determine what element will be displayed
    // Defaults to paragraph, `as` prop takes precedence
    let TagType = "p";
    if (this.as !== undefined) {
      TagType = this.as;
    }
    return (
      <Host>
        <TagType
          class={{
            "sui-text": true
          }}
        >
          {text || <slot />}
        </TagType>
      </Host>
    );
  }
}
