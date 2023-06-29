import { GET_MOVIEDATA_FAILURE, GET_MOVIEDATA_REQUEST, GET_MOVIEDATA_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    movie: [],
    isError: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIEDATA_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
                isError: false
            }
        case GET_MOVIEDATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movie: action.payload,
                isError: false
            }
        case GET_MOVIEDATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        default:
            return {
                ...state
            }
    }
}