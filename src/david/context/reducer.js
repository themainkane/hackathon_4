export default function Reducer(state, action) {
  // console.log(state);
  // console.log(action);
  console.log(state.searchData)

  switch (action.type) {
    case "searchValue/set":
      return {
        ...state,
        searchValue: action.payload,
      };
    case "searchData/set":
      return {
        ...state,
        searchData: action.payload,
      };
    case "page/previous":
      return {
        ...state,
        page: action.payload,
      };
    case "page/next":
      return {
        ...state,
        page: action.payload,
      };
    case "userDetail/set":
      return {
        ...state,
        authorInfo: action.payload,
      };

    default:
      break;
  }
}
