import axios from "axios";

export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";

export const FRIENDS_SAVED = "FRIENDS_SAVED";
export const SAVING_FRIENDS = "SAVING_FRIENDS";

export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";

export const DELETING_FRIEND = "DELETING_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";

const friendsAPI = "http://localhost:5000/api/friends";

export const fetchData = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(friendsAPI)
    .then(res => {
      console.log(res);
      dispatch({ type: FRIENDS_FETCHED, payload: res.data });
    })
    .catch(err => ({
      err
    }));
};
