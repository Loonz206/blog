// async action creator example
import jsonPlaceholder from "../apis/jsonPlaceholder";

const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export default fetchPosts;
