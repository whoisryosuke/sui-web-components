import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "sui-select",
  styleUrl: "select.css"
})
export class Select {
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
   * Sets dropdown as a required input field
   */
  @Prop() required?: boolean;

  /**
   * Number of visible options
   */
  @Prop() size?: number;

  render() {
    const { autofocus, disabled, form, multiple, name, required, size } = this;
    return (
      <Host>
        <select
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
        </select>
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
