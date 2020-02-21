import { Component, Element, Host, Prop, h } from "@stencil/core";

import { setup } from "../../utils/props";

@Component({
  tag: "sui-link",
  styleUrl: "link.css",
  shadow: true
})
export class Link {
  /**
   * Ref to component in DOM
   */
  @Element() el: HTMLElement;

  /**
   * Displays link as link
   */
  @Prop() href: string | undefined;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * Sets link content to this text
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
   * CSS property display
   */
  @Prop() display: string;

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
    // width("link", this.width, this.el.style);
    // height("link", this.height, this.el.style);
    // maxWidth("link", this.maxWidth, this.el.style);
    // minWidth("link", this.minWidth, this.el.style);
    // maxHeight("link", this.maxHeight, this.el.style);
    // minHeight("link", this.minHeight, this.el.style);
    // const paddingProp = this.padding || this.p;
    // const marginProp = this.margin || this.m;
    // margin("link", marginProp, this.el.style);
    // padding("link", paddingProp, this.el.style);
    // display("link", this.display, this.el.style);
    // // Color
    // color("link", this.color, this.el.style);
    // const bgProp = this.background || this.bg;
    // bg("link", bgProp, this.el.style);
    // // Fonts
    // fontSize("link", this.fontSize, this.el.style);
    // textAlign("link", this.textAlign, this.el.style);
    // lineHeight("link", this.lineHeight, this.el.style);
    // fontWeight("link", this.fontWeight, this.el.style);
    // letterSpacing("link", this.letterSpacing, this.el.style);
    // // Border
    // border("link", this.border, this.el.style);
    // borderTop("link", this.borderTop, this.el.style);
    // borderBottom("link", this.borderBottom, this.el.style);
    // borderLeft("link", this.borderLeft, this.el.style);
    // borderRight("link", this.borderRight, this.el.style);
    // borderWidth("link", this.borderWidth, this.el.style);
    // borderStyle("link", this.borderStyle, this.el.style);
    // borderColor("link", this.borderColor, this.el.style);
    // borderRadius("link", this.borderRadius, this.el.style);
  }

  render() {
    const { disabled, href, target, text } = this;
    // Determine what element will be displayed
    // Defaults to link, `as` prop takes precedence
    let TagType = "a";
    if (this.as !== undefined) {
      TagType = this.as;
    }
    return (
      <Host>
        <TagType
          class={{
            "sui-link": true,
            disabled: disabled
          }}
          aria-disabled={disabled ? "true" : null}
          href={href}
          target={target}
        >
          {text || <slot />}
        </TagType>
      </Host>
    );
  }
}
