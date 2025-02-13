export const initialVal = { count: 0 };

export const reducer = (val, action) => {
  switch (action.type) {
    case "increment":
      return { ...val, count: val.count + 1 };
    case "decrement":
      return { ...val, count: val.count - 1 };
    case "reset":
      return { ...val, count: 0 };
    default:
      return { val };
  }
};
