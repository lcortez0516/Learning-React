const initialVal = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };

    default:
      return { ...state };
  }
};

export { initialVal, reducer };
