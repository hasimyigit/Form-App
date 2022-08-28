const formState = {
  quesList: [],
  currentQues: null,
  currentAnswer: null,
};

export const formReducer = (state = formState, action) => {
  switch (action.type) {
    case "SET_QUESLIST":
      return { ...state, quesList: action.payload };
    case "CURRENT_QUES":
      return { ...state, currentQues: action.payload };
    case "CURRENT_ANSWER":
      return { ...state, currentAnswer: action.payload };
      case "DELETE_ANSWER":
        return { ...state, currentAnswer: null };
    default:
      return state;
  }
};
