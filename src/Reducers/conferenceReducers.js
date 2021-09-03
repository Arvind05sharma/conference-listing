import { CONFERENCE_DETAILS } from "../Actions/types";

const initialState = {
  conferenceDetails: [],
  loading: true,
};

/**
 * Reducer Called for state management for the Conference List.
 * @param {*} [state=initialState] initail state of the list.
 * @param {*} action State Update.
 * @return {*}
 */
const conferenceReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CONFERENCE_DETAILS:
      return {
        ...state,
        conferenceDetails: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default conferenceReducer;
