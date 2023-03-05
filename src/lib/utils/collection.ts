export const chunk = <T>(arr: T[], size = 1) => {
  const result: Array<Array<T>> = [];

  let index = 0;

  while (index < arr.length) {
    result.push(arr.slice(index, (index += size)));
  }

  return result;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const interleave = (...params: Array<any>[]): any[] => {
  const [head, ...tail] = params;

  if (head == null) {
    return interleave(...tail);
  }

  const [aHead, ...aTail] = head;

  return aHead === undefined
    ? tail.length === 0
      ? []
      : interleave(...tail)
    : [aHead, ...interleave(...[...tail, aTail])];
};
/* eslint-enable @typescript-eslint/no-explicit-any */
