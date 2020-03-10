import { Component, Element, Host, Prop, h } from "@stencil/core";

import { setup } from "utility-props";

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
      "button",
      this
    );
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
