import { Component, Element, Host, Prop, h } from "@stencil/core";

import { setup } from "utility-props";

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
   * CSS property for font-family
   */
  @Prop() fontFamily: string | string[] | number | number[];

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
        "right"
      ],
      "textarea",
      this
    );
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
