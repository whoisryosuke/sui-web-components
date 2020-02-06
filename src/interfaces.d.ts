export interface InputChangeEventDetail {
  value: string | number | undefined | null;
}
export interface SwitchChangeEventDetail {
  checked: boolean;
}

export type TextFieldTypes =
  | "date"
  | "email"
  | "number"
  | "checkbox"
  | "radio"
  | "range"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url"
  | "time";
