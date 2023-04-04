const InitState = {
  type: "",
  counter: 0,
  porfile: {
    id: "",
    imageUrl: ""
  }
};
function reducer(state = InitState, action) {
  switch (action.type) {
    case "counter":
      return { ...state, counter: action.counter };
    case "action":
      return { ...state, type: action.action };
    default:
      return { ...state };
  }
}