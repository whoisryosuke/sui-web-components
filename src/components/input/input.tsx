import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";

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

import { InputChangeEventDetail, TextFieldTypes } from "../../interfaces";

@Component({
  tag: "sui-input",
  styleUrl: "input.css",
  shadow: true
})
export class Input {
  private nativeInput?: HTMLInputElement;
  private inputId = `sui-input-${inputIds++}`;

  @State() hasFocus = false;

  @Element() el!: HTMLElement;

  /**
   * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
   */
  @Prop() accept?: string;

  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
   */
  @Prop() autocapitalize = "off";

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete: "on" | "off" = "off";

  /**
   * Whether auto correction should be enabled when the user is entering/editing the text value.
   */
  @Prop() autocorrect: "on" | "off" = "off";

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop() max?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop() min?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
   */
  @Prop() multiple?: boolean;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
   */
  @Prop() pattern?: string;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string | null;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * If `true`, the element will have its spelling and grammar checked.
   */
  @Prop() spellcheck = false;

  /**
   * Works with the min and max attributes to limit the increments at which a value can be set.
   * Possible values are: `"any"` or a positive floating point number.
   */
  @Prop() step?: string;

  /**
   * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
   */
  @Prop() size?: number;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: TextFieldTypes = "text";

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = "";

  /**
   * Update the native input element when the value changes
   */
  @Watch("value")
  protected valueChanged() {
    this.suiChanged.emit({
      value: this.value == null ? this.value : this.value.toString()
    });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() suiChanged!: EventEmitter<InputChangeEventDetail>;

  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput!);
  }

  private getValue(): string {
    return typeof this.value === "number"
      ? this.value.toString()
      : (this.value || "").toString();
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() suiInput!: EventEmitter<KeyboardEvent>;

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || "";
    }
    this.suiInput.emit(ev as KeyboardEvent);
  };

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
    width("input", this.width, this.el.style);
    height("input", this.height, this.el.style);
    maxWidth("input", this.maxWidth, this.el.style);
    minWidth("input", this.minWidth, this.el.style);
    maxHeight("input", this.maxHeight, this.el.style);
    minHeight("input", this.minHeight, this.el.style);
    const paddingProp = this.padding || this.p;
    const marginProp = this.margin || this.m;
    margin("input", marginProp, this.el.style);
    padding("input", paddingProp, this.el.style);
    display("input", this.display, this.el.style);

    // Color
    color("input", this.color, this.el.style);
    const bgProp = this.background || this.bg;
    bg("input", bgProp, this.el.style);

    // Fonts
    fontSize("input", this.fontSize, this.el.style);
    textAlign("input", this.textAlign, this.el.style);
    lineHeight("input", this.lineHeight, this.el.style);
    fontWeight("input", this.fontWeight, this.el.style);
    letterSpacing("input", this.letterSpacing, this.el.style);

    // Border
    border("input", this.border, this.el.style);
    borderTop("input", this.borderTop, this.el.style);
    borderBottom("input", this.borderBottom, this.el.style);
    borderLeft("input", this.borderLeft, this.el.style);
    borderRight("input", this.borderRight, this.el.style);
    borderWidth("input", this.borderWidth, this.el.style);
    borderStyle("input", this.borderStyle, this.el.style);
    borderColor("input", this.borderColor, this.el.style);
    borderRadius("input", this.borderRadius, this.el.style);
  }

  render() {
    const value = this.getValue();
    const labelId = this.inputId + "-lbl";
    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{
          "has-value": this.hasValue(),
          "has-focus": this.hasFocus
        }}
      >
        <input
          class={{
            "sui-input": true
          }}
          ref={input => (this.nativeInput = input)}
          aria-labelledby={labelId}
          disabled={this.disabled}
          accept={this.accept}
          autoCapitalize={this.autocapitalize}
          autoComplete={this.autocomplete}
          autoCorrect={this.autocorrect}
          autoFocus={this.autofocus}
          inputMode={this.inputmode}
          min={this.min}
          max={this.max}
          minLength={this.minlength}
          maxLength={this.maxlength}
          multiple={this.multiple}
          name={this.name}
          pattern={this.pattern}
          placeholder={this.placeholder || ""}
          readOnly={this.readonly}
          required={this.required}
          spellCheck={this.spellcheck}
          step={this.step}
          size={this.size}
          type={this.type}
          value={value}
          onInput={this.onInput}
        />
        {this.type === "checkbox" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentcolor"
            aria-hidden="true"
            class="checked"
          >
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
        )}
        {this.type === "checkbox" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentcolor"
            aria-hidden="true"
            class="unchecked"
          >
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
          </svg>
        )}
        {this.type === "radio" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentcolor"
            aria-hidden="true"
            class="checked"
          >
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
        )}
        {this.type === "radio" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentcolor"
            aria-hidden="true"
            class="unchecked"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          </svg>
        )}
      </Host>
    );
  }
}

let inputIds = 0;
