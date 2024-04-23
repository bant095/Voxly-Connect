import { GLOBALTYPES } from '../actions/globalTypes';

const initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
