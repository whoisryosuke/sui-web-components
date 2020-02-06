import {
  Component,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h
} from "@stencil/core";
import { SwitchChangeEventDetail } from "../../interfaces";

@Component({
  tag: "sui-switch",
  styleUrl: "switch.css",
  shadow: true
})
export class Switch {
  private nativeSwitch?: HTMLInputElement;
  private switchId = `sui-input-${switchIds++}`;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.switchId;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * Update the native input element when the value changes
   */
  @Watch("checked")
  protected valueChanged() {
    this.suiChanged.emit({
      checked: this.checked
    });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() suiChanged!: EventEmitter<SwitchChangeEventDetail>;

  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeSwitch) {
      this.nativeSwitch.focus();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeSwitch!);
  }

  private getChecked(): boolean {
    return this.checked;
  }

  render() {
    const labelId = this.switchId + "-lbl";
    return (
      <Host>
        <button
          type="button"
          role="switch"
          aria-checked={this.checked ? "true" : "false"}
          aria-labelledby={labelId}
        >
          <div aria-hidden="true"></div>
        </button>
      </Host>
    );
  }
}
let switchIds = 0;
