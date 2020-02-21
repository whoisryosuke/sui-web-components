import { Component, Element, Host, Prop, h } from "@stencil/core";

import { setup } from "../../utils/props";

@Component({
  tag: "sui-select",
  styleUrl: "select.css"
})
export class Select {
  /**
   * Ref to component in DOM
   */
  @Element() el: HTMLElement;
  /**
   * Automatically sets focus to dropdown
   */
  @Prop() autofocus?: boolean;

  /**
   * Is disabled?
   */
  @Prop() disabled?: boolean;

  /**
   * Form ID that dropdown belongs to
   */
  @Prop() form?: string;

  /**
   * Allows multiple options to be selected at once
   */
  @Prop() multiple?: boolean;

  /**
   * The name of the dropdown
   */
  @Prop() name?: string;

  /**
   * Sets dropdown as a required field
   */
  @Prop() required?: boolean;

  /**
   * Number of visible options
   */
  @Prop() size?: number;

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
    // width("select", this.width, this.el.style);
    // height("select", this.height, this.el.style);
    // maxWidth("select", this.maxWidth, this.el.style);
    // minWidth("select", this.minWidth, this.el.style);
    // maxHeight("select", this.maxHeight, this.el.style);
    // minHeight("select", this.minHeight, this.el.style);
    // const paddingProp = this.padding || this.p;
    // const marginProp = this.margin || this.m;
    // margin("select", marginProp, this.el.style);
    // padding("select", paddingProp, this.el.style);
    // display("select", this.display, this.el.style);
    // // Color
    // color("select", this.color, this.el.style);
    // const bgProp = this.background || this.bg;
    // bg("select", bgProp, this.el.style);
    // // Fonts
    // fontSize("select", this.fontSize, this.el.style);
    // textAlign("select", this.textAlign, this.el.style);
    // lineHeight("select", this.lineHeight, this.el.style);
    // fontWeight("select", this.fontWeight, this.el.style);
    // letterSpacing("select", this.letterSpacing, this.el.style);
    // // Border
    // border("select", this.border, this.el.style);
    // borderTop("select", this.borderTop, this.el.style);
    // borderBottom("select", this.borderBottom, this.el.style);
    // borderLeft("select", this.borderLeft, this.el.style);
    // borderRight("select", this.borderRight, this.el.style);
    // borderWidth("select", this.borderWidth, this.el.style);
    // borderStyle("select", this.borderStyle, this.el.style);
    // borderColor("select", this.borderColor, this.el.style);
    // borderRadius("select", this.borderRadius, this.el.style);
  }

  render() {
    const { autofocus, disabled, form, multiple, name, required, size } = this;
    // Determine what element will be displayed
    // Defaults to select, `as` prop takes precedence
    let TagType = "select";
    if (this.as !== undefined) {
      TagType = this.as;
    }
    return (
      <Host>
        <TagType
          class={{
            "sui-select": true
          }}
          {...autofocus}
          disabled={disabled}
          form={form}
          multiple={multiple}
          name={name}
          required={required}
          size={size}
        >
          <slot></slot>
        </TagType>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </Host>
    );
  }
}
