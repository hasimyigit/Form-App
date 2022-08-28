const resultState = null;

export const  resultReducer = (state = resultState, action) => {
    switch (action.type) {
      case 'SET_USER_COUNT_IN_QUES':
        return { ...state,userCount:action.payload }
        case 'SET_RESULT':
        return { ...state,labels: action.payload.labels, data:action.payload.data }
      default:
        return state
    }
  }
