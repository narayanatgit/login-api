import axios from "axios";
import {
	CREATE_BOOK_FAIL,
	CREATE_BOOK_REQUEST,
	CREATE_BOOK_SUCCESS,
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAIL,
} from "../actiontype";

const bookAction = (bookdata) => {

	return async (dispatch) => {
		try {
			dispatch({
				type: CREATE_BOOK_REQUEST,
			});

			const config = {
				"Content-Type": "application/json",
			};

			const { data } = await axios.post(
				"http://localhost:4000/api/books/",
				bookdata,
				config
			);

			dispatch({
				type: CREATE_BOOK_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: CREATE_BOOK_FAIL,
				payload: error.response && error.response.data.message,
			});
		}
	};
};

const fetchAction = () => {
	return async (dispatch) => {
		
		try {
			dispatch({
				type: FETCH_USERS_REQUEST,
			});

			const config = {
				"Content-Type": "application/json",
			};

			const { data } = await axios.get(
				"http://localhost:4000/api/books/",

				config
			);
            
			dispatch({
				type: FETCH_USERS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: FETCH_USERS_FAIL,
				payload: error.response && error.response.data.message,
			});
		}
	};
};

export { bookAction,fetchAction };
