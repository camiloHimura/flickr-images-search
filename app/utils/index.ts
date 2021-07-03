import * as R from 'ramda';
import { KEY_CODES } from '../contans';
import { iInput } from '../interfaces';

export const isNotEmpty = R.complement(R.isEmpty);
export const getInput = (inputOrEvent: iInput): HTMLInputElement =>
  R.pathOr(R.path(['target'], inputOrEvent), ['current'], inputOrEvent);

export const getInputValue = R.pipe(getInput, R.prop('value'));

export const isNotEmptyInput = R.pipe(getInputValue, R.converge(R.and, [isNotEmpty, R.length]));

export const inputGte = (length: number) =>
  R.pipe(
    getInputValue,
    R.trim,
    R.converge(R.and, [isNotEmpty, (val: string) => R.gte(val.length, length)]),
  );

export const isKeyCode = (code: number): ((obj: unknown) => boolean) =>
  R.anyPass([
    R.propSatisfies(R.equals(code), 'keyCode'),
    R.propSatisfies(R.equals(code), 'charCode'),
  ]);

export const isEnter = isKeyCode(KEY_CODES.ENTER);

export const setInputValue =
  (inputOrEvent: iInput) =>
  (val: string): void => {
    getInput(inputOrEvent).value = val;
  };
