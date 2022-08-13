import {
	FETCH_USERS_FAIL,
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
} from "../../action/actiontype";

const BookList = (state = [], action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				loading: true,
			};
		case FETCH_USERS_SUCCESS:
			console.log(action.payload);
			return {
				books: action.payload,
			};

		case FETCH_USERS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export { BookList};
