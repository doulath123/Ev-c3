import { actionTypes } from "./action";

const initState = {
  isLoading: false,
  isError: false,
  data: []
};

function reducer(state = initState, action) {
    // write code here
    console.log(action.data)
    switch (action) {
        case action.ADD_USER_REQUEST:return{
            ...state,isLoading:true
        }
        case action.ADD_USER_SUCCESS:return{
            ...state,isLoading:false,data:[...state.data,action.data]
        }
        case action.ADD_USER_FAILURE:return{
            ...state,isLoading:false,isError:true
        }
    }
}

export default reducer;

// ADD_USER_REQUEST: "ADD_USER_REQUEST",
//     ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
//     ADD_USER_FAILURE: "ADD_USER_FAILURE"