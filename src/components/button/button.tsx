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
  tag: "sui-button",
  styleUrl: "button.css",
  shadow: true
})
export class Button {
  /**
   * Ref to component in DOM
   */
  @Element() el: HTMLElement;

  /**
   * Displays button as link
   */
  @Prop() href: string | undefined;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * Sets button content to this text
   */
  @Prop() text: string | undefined;

  /**
   * Is disabled?
   */
  @Prop() disabled: boolean;

  /**
   * HTML element to use as basis
   */
  @Prop() as: string;

  /**
   * The button or input type (usually submit)
   */
  @Prop() type: "submit" | "reset" | "button";

  /**
   * Optional prop for input to show text
   */
  @Prop() value: string;

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
    width("button", this.width, this.el.style);
    height("button", this.height, this.el.style);
    maxWidth("button", this.maxWidth, this.el.style);
    minWidth("button", this.minWidth, this.el.style);
    maxHeight("button", this.maxHeight, this.el.style);
    minHeight("button", this.minHeight, this.el.style);
    const paddingProp = this.padding || this.p;
    const marginProp = this.margin || this.m;
    margin("button", marginProp, this.el.style);
    padding("button", paddingProp, this.el.style);
    display("button", this.display, this.el.style);

    // Color
    color("button", this.color, this.el.style);
    const bgProp = this.background || this.bg;
    bg("button", bgProp, this.el.style);

    // Fonts
    fontSize("button", this.fontSize, this.el.style);
    textAlign("button", this.textAlign, this.el.style);
    lineHeight("button", this.lineHeight, this.el.style);
    fontWeight("button", this.fontWeight, this.el.style);
    letterSpacing("button", this.letterSpacing, this.el.style);

    // Border
    border("button", this.border, this.el.style);
    borderTop("button", this.borderTop, this.el.style);
    borderBottom("button", this.borderBottom, this.el.style);
    borderLeft("button", this.borderLeft, this.el.style);
    borderRight("button", this.borderRight, this.el.style);
    borderWidth("button", this.borderWidth, this.el.style);
    borderStyle("button", this.borderStyle, this.el.style);
    borderColor("button", this.borderColor, this.el.style);
    borderRadius("button", this.borderRadius, this.el.style);
  }

  render() {
    const { color, disabled, href, target, text, type, value } = this;
    // Determine what element will be displayed
    // Defaults to button, `as` prop takes precedence
    let TagType = "button";
    if (href !== undefined) {
      TagType = "a";
    }
    if (this.as !== undefined) {
      TagType = this.as;
    }
    return (
      <Host>
        <TagType
          class={{
            "sui-button": true,
            [color]: color !== undefined,
            disabled: disabled
          }}
          aria-disabled={disabled ? "true" : null}
          href={href}
          type={type}
          value={value}
          target={target}
        >
          {value === undefined && (text || <slot />)}
        </TagType>
      </Host>
    );
  }
}
