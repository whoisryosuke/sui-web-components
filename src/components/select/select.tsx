import { Component, Element, Host, Prop, h } from "@stencil/core";

import { setup } from "utility-props";

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
      "select",
      this
    );
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
