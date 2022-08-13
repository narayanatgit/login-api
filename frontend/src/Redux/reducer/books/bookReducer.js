const {
	CREATE_BOOK_REQUEST,
	CREATE_BOOK_SUCCESS,
	CREATE_BOOK_FAIL,
	USER_LOGOUT_SUCCESS,
} = require("../../action/actiontype");

const bookReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_BOOK_REQUEST:
			return {
				loading: true,
			};
		case CREATE_BOOK_SUCCESS:
		
			return {
				book: action.payload,
			};
		case CREATE_BOOK_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_LOGOUT_SUCCESS:
			return {
				
			}
		default:
			return state;
	}
};

export { bookReducer };
