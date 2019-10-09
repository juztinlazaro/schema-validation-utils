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

export  const serializeObjectData = (arrayToObject: any) => {
  const x = Object.keys(arrayToObject).reduce((object: any, key: any) => {
    Object.keys(arrayToObject[key]).reduce(
      (_, k) => (object[k] = Object.values(arrayToObject[key])[0] as any),
      {}
    );

    return object;
  }, {});

 return Object.keys(x).reduce((object: any, k: any) => {
    if(x[k]) {
      object[k] = x[k]
    }

    return object
  },{});
}