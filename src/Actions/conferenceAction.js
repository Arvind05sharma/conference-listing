import axios from "axios";
import { conferenceDetails } from "../api/api";
import { CONFERENCE_DETAILS } from "./types";

export /**
 * Api called to get the conference details.
 * method : GET API
 */
const conferenceData = () => async (dispatch) => {
  const res = await axios.get(conferenceDetails);
  try {
    dispatch({
      type: CONFERENCE_DETAILS,
      payload: res.data,
    });
  } catch (error) {
    return error;
  }
  return res;
};
