export function isEmptyObj(obj: object) {
  return JSON.stringify(obj) === '{}';
}

export default {
  isEmptyObj,
};
