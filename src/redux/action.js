import axios from "axios"
import { GET_MOVIEDATA_FAILURE, GET_MOVIEDATA_REQUEST, GET_MOVIEDATA_SUCCESS } from "./actionType";

export const getmoviedata = () => (dispatch) => {
    dispatch({
        type: GET_MOVIEDATA_REQUEST,
        payload: true
    })
    axios.get("https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9")
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_MOVIEDATA_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err.message);
            dispatch({
                type: GET_MOVIEDATA_FAILURE,
                payload: true
            })
        })
}