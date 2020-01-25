import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "sui-button",
  styleUrl: "button.css",
  shadow: true
})
export class Button {
  /**
   * Background color
   */
  @Prop() color: string;

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
            [color]: color !== undefined,
            disabled: disabled
          }}
          aria-disabled={disabled ? "true" : null}
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
