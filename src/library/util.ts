export const isEmpty = (obj: any) =>
  [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;

export  const serializeData = (arrayToObject: any) =>
  Object.keys(arrayToObject).reduce((object: any, key: any) => {
  Object.keys(arrayToObject[key]).reduce(
    (_, k) => (object[k] = Object.values(arrayToObject[key])[0] as any),
    {}
  );

  return object;
}, {});