const userState = null;

export const  userReducer = (state = userState, action) => {
    switch (action.type) {
      case 'SET_LOGIN':
        return { profile:action.payload }
      case 'SIGN_OUT':
        return null
      default:
        return state
    }
  }
