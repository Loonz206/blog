// reducers should always have a return statement and never be undefined
// reducers create state or data that is to be used in your application based off of existing data, and the action
// reducers are never to make api requests, reach into dom to pull values, just previous state and action
// must not mutate the actual state, use filter or spread operator to create new arrays/objects
const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};

export default postsReducer;
