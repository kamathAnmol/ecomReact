// export const CreateAction = (type, payload) => {
//   return { type, payload };
// };

import { AnyAction } from "redux";
export type ActionTypeWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type ActionType<T> = {
  type: T;
};

export function CreateAction<T extends String, P>(
  type: T,
  payload: P
): ActionTypeWithPayload<T, P>;

export function CreateAction<T extends String>(
  type: T,
  payload: void
): ActionType<T>;

export function CreateAction<T extends string, p>(type: T, payload: p) {
  return {
    type,
    payload,
  };
}
