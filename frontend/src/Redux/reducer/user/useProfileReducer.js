import {
	USER_PROFILE_SUCCESS,
	USER_PROFILE_REQUEST,
	USER_PROFILE_FAIL,
} from "../../action/actiontype";

const userProfileReducer = (state = {}, action) => {
	switch (action.type) {
		// Profile
		case USER_PROFILE_REQUEST:
			return {
				loading: true,
			};
		case USER_PROFILE_SUCCESS:
			return {
				user: action.payload,
			};
		case USER_PROFILE_FAIL:
			return {
				loading: false,
				payload: action.payload,
			};
		default:
			return state;
	}
};

export default userProfileReducer;
