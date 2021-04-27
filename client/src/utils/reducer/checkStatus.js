export default function checkStatus(state, action) {
  let changed = state.findIndex((el) => el._id === action.payload.id);
  console.log(action.payload.id);
  let newState = [...state];
  newState[changed].isDone = !newState[changed].isDone;
  return newState;
}
