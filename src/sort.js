export default function orderByProps(obj, [...args]) {
  const sortABC = [];
  const sortArgs = [];
  args.forEach((element) => {
    sortArgs.push({ [element]: obj[element] });
  });
  for (const key in obj) {
    if (!args.includes(key)) {
      sortABC.push({ [key]: obj[key] });
    }
  }
  sortABC.sort((a, b) => {
    if (Object.keys(a)[0] > Object.keys(b)[0]) {
      return 1;
    }
    return -1;
  });
  const result = [...sortArgs, ...sortABC];
  return result;
}
