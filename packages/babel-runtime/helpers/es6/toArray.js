import _Array$from from "../../core-js/array/from";
export default function (arr) {
  return Array.isArray(arr) ? arr : _Array$from(arr);
}