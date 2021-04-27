export default function editTitle(state, action) {
  let edited = state.findIndex((el) => el._id === action.payload.id);
   let newState = [...state];
  newState[edited].title = action.payload.title;
  return newState;
}
