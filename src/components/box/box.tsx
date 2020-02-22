import { Component, Element, Host, Prop, h } from "@stencil/core";

import { setup } from "../../utils/props";

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
  @Prop() m: string | string[] | number | number[];

  /**
   * CSS property for responsive padding
   */
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
   * CSS property display
   */
  @Prop() display: string;

  /**
   * CSS property position
   */
  @Prop() position: string;

  /**
   * CSS properties for positioning
   */
  @Prop() top: string | number;
  @Prop() bottom: string | number;
  @Prop() left: string | number;
  @Prop() right: string | number;
  @Prop() zIndex: string | number;

  /**
   * CSS property for border
   */
  @Prop() border: string | number;

  /**
   * CSS property for borderTop
   */
  @Prop() bt: string | number;

  /**
   * CSS property for borderBottom
   */
  @Prop() bb: string | number;

  /**
   * CSS property for borderLeft
   */
  @Prop() bl: string | number;

  /**
   * CSS property for borderRight
   */
  @Prop() br: string | number;

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

  /**
   * Flex property align-items
   */
  @Prop() alignItems: string;

  /**
   * Flex property align-content
   */
  @Prop() alignContent: string;

  /**
   * Flex property justify-content
   */
  @Prop() justifyContent: string;

  /**
   * Flex property flex-wrap
   */
  @Prop() flexWrap: string;

  /**
   * Flex property flex-direction
   */
  @Prop() flexDirection: string;

  componentWillRender() {
    setup(
      [
        "width",
        "max-width",
        "min-width",
        "height",
        "max-height",
        "min-height",
        "padding",
        "margin",
        "font-size",
        "text-align",

        "font-family",
        "line-height",
        "font-weight",
        "letter-spacing",
        "color",
        "background-color",
        "border",
        "border-top",
        "border-bottom",
        "border-left",
        "border-right",
        "border-width",
        "border-style",
        "border-color",
        "border-radius",
        "display",
        "position",
        "z-index",
        "top",
        "bottom",
        "left",
        "right",
        "align-items",
        "align-content",
        "justify-content",
        "flex-wrap",
        "flex-direction"
      ],
      "box",
      this
    );
    // // Sizing
    // width("box", this.width, this.el.style);
    // height("box", this.height, this.el.style);
    // maxWidth("box", this.maxWidth, this.el.style);
    // minWidth("box", this.minWidth, this.el.style);
    // maxHeight("box", this.maxHeight, this.el.style);
    // minHeight("box", this.minHeight, this.el.style);
    // const paddingProp = this.padding || this.p;
    // const marginProp = this.margin || this.m;
    // margin("box", marginProp, this.el.style);
    // padding("box", paddingProp, this.el.style);

    // // Color
    // color("box", this.color, this.el.style);
    // const bgProp = this.background || this.bg;
    // bg("box", bgProp, this.el.style);

    // // Fonts
    // fontSize("box", this.fontSize, this.el.style);
    // textAlign("box", this.textAlign, this.el.style);
    // lineHeight("box", this.lineHeight, this.el.style);
    // fontWeight("box", this.fontWeight, this.el.style);
    // letterSpacing("box", this.letterSpacing, this.el.style);

    // // Border
    // border("box", this.border, this.el.style);
    // borderTop("box", this.borderTop, this.el.style);
    // borderBottom("box", this.borderBottom, this.el.style);
    // borderLeft("box", this.borderLeft, this.el.style);
    // borderRight("box", this.borderRight, this.el.style);
    // borderWidth("box", this.borderWidth, this.el.style);
    // borderStyle("box", this.borderStyle, this.el.style);
    // borderColor("box", this.borderColor, this.el.style);
    // borderRadius("box", this.borderRadius, this.el.style);

    // // Position
    // display("box", this.display, this.el.style);
    // position("box", this.position, this.el.style);
    // zIndex("box", this.zIndex, this.el.style);
    // top("box", this.top, this.el.style);
    // bottom("box", this.bottom, this.el.style);
    // left("box", this.left, this.el.style);
    // right("box", this.right, this.el.style);

    // // Flex
    // alignItems("box", this.alignItems, this.el.style);
    // alignContent("box", this.alignContent, this.el.style);
    // justifyContent("box", this.alignContent, this.el.style);
    // flexWrap("box", this.flexWrap, this.el.style);
    // flexDirection("box", this.flexDirection, this.el.style);
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
