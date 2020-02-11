# sui-switch



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                 | Type      | Default         |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------- | --------- | --------------- |
| `checked`  | `checked`  | The value of the input.                                                                                     | `boolean` | `false`         |
| `external` | `external` | If true, disables the checked toggle using internal onClick. For use with other state management solutions. | `boolean` | `false`         |
| `name`     | `name`     | The name of the control, which is submitted with the form data.                                             | `string`  | `this.switchId` |


## Events

| Event        | Description                         | Type                                   |
| ------------ | ----------------------------------- | -------------------------------------- |
| `suiChanged` | Emitted when the value has changed. | `CustomEvent<SwitchChangeEventDetail>` |


## Methods

### `getInputElement() => Promise<HTMLInputElement>`

Returns the native `<input>` element used under the hood.

#### Returns

Type: `Promise<HTMLInputElement>`



### `setFocus() => Promise<void>`

Sets focus on the specified `ion-input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
