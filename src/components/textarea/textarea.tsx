import { Component, Element, Host, Prop, h } from "@stencil/core";

import { setup } from "../../utils/props";

@Component({
  tag: "sui-textarea",
  styleUrl: "textarea.css",
  shadow: true
})
export class Textarea {
  /**
   * Ref to component in DOM
   */
  @Element() el: HTMLElement;

  /**
   * Text to display inside textarea
   */
  @Prop() text?: string;

  /**
   * Automatically sets focus to textarea
   */
  @Prop() autofocus?: boolean;

  /**
   * Visible width of a text area
   */
  @Prop() cols?: number;

  /**
   * Is disabled?
   */
  @Prop() disabled?: boolean;

  /**
   * Form ID that dropdown belongs to
   */
  @Prop() form?: string;

  /**
   * The name of the textarea
   */
  @Prop() name?: string;

  /**
   * Instructional text that shows before the textarea has a value.
   */
  @Prop() placeholder?: string;

  /**
   * Sets dropdown as a readonly field
   */
  @Prop() readonly?: boolean;

  /**
   * Sets dropdown as a required field
   */
  @Prop() required?: boolean;

  /**
   * The visible number of lines in a text area
   */
  @Prop() rows?: number;

  /**
   * Add newlines to your form submission (soft by default)
   */
  @Prop() wrap?: "hard" | "soft";

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
    // width("textarea", this.width, this.el.style);
    // height("textarea", this.height, this.el.style);
    // maxWidth("textarea", this.maxWidth, this.el.style);
    // minWidth("textarea", this.minWidth, this.el.style);
    // maxHeight("textarea", this.maxHeight, this.el.style);
    // minHeight("textarea", this.minHeight, this.el.style);
    // const paddingProp = this.padding || this.p;
    // const marginProp = this.margin || this.m;
    // margin("textarea", marginProp, this.el.style);
    // padding("textarea", paddingProp, this.el.style);
    // display("textarea", this.display, this.el.style);
    // // Color
    // color("textarea", this.color, this.el.style);
    // const bgProp = this.background || this.bg;
    // bg("textarea", bgProp, this.el.style);
    // // Fonts
    // fontSize("textarea", this.fontSize, this.el.style);
    // textAlign("textarea", this.textAlign, this.el.style);
    // lineHeight("textarea", this.lineHeight, this.el.style);
    // fontWeight("textarea", this.fontWeight, this.el.style);
    // letterSpacing("textarea", this.letterSpacing, this.el.style);
    // // Border
    // border("textarea", this.border, this.el.style);
    // borderTop("textarea", this.borderTop, this.el.style);
    // borderBottom("textarea", this.borderBottom, this.el.style);
    // borderLeft("textarea", this.borderLeft, this.el.style);
    // borderRight("textarea", this.borderRight, this.el.style);
    // borderWidth("textarea", this.borderWidth, this.el.style);
    // borderStyle("textarea", this.borderStyle, this.el.style);
    // borderColor("textarea", this.borderColor, this.el.style);
    // borderRadius("textarea", this.borderRadius, this.el.style);
  }

  render() {
    return (
      <Host>
        <textarea
          class={{
            "sui-textarea": true
          }}
          autofocus={this.autofocus}
          cols={this.cols}
          disabled={this.disabled}
          form={this.form}
          name={this.name}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          rows={this.rows}
          wrap={this.wrap}
        >
          {this.text}
        </textarea>
      </Host>
    );
  }
}
