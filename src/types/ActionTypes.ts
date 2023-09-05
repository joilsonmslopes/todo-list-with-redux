export type Payload = Object | any;
export type Type = string;

export interface Action {
  type: Type | Type[];
  payload?: Payload;
}
