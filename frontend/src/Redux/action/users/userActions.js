import axios from "axios";
import { bindActionCreators } from "redux";
import {
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT_SUCCESS,
	USER_PROFILE_REQUEST,
	USER_PROFILE_SUCCESS,
	USER_PROFILE_FAIL,
} from "../actiontype";
const registerUserAction = (name, email, password) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: USER_REGISTER_REQUEST,
			});

			const config = {
				"Content-Type": "application/json",
			};
			const { data } = await axios.post(
				"http://localhost:4000/api/users/register",
				{ name, email, password },
				config
			);
			dispatch({
				type: USER_REGISTER_SUCCESS,
				payload: data,
      });
      //save user in local storage
      localStorage.setItem('userAuthData',JSON.stringify(data))
		} catch (error) {
			dispatch({
				type: USER_REGISTER_FAIL,
				payload: error.response && error.response.data.message,
			});
		}
	};
};


const LoginUserAction = (email,password) =>
{
  return async dispatch => {
    try {
      dispatch({
				type: USER_LOGIN_REQUEST,
      });
      const config = {
				"Content-Type": "application/json",
			};
			const { data } = await axios.post(
				"http://localhost:4000/api/users/login",
				{ email, password },
				config
      );
      dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: data,
      });
          localStorage.setItem("userAuthData", JSON.stringify(data));
    } catch (error) {
      dispatch({
				type: USER_LOGIN_FAIL,
				payload: error.response && error.response.data.message,
			});
    }
  }
  
}
	
const Logout = ()=>
{
	return async dispatch =>
	{
		try {
			localStorage.removeItem('userAuthData')
			dispatch({
				type:USER_LOGOUT_SUCCESS
			})
		} catch (error) {
			
		}
		
		}

}
//profile action
 const profileAction = () => {
	return async (dispatch, getState) => {
		const { userInfo } = getState().userInfo;
		
		try {
			dispatch({
				type: USER_PROFILE_REQUEST,
			});
			const config = {
				headers: {
					authorization: `Bearer ${userInfo.Token}`,
				},
			};
		var data
			await fetch("http://localhost:4000/api/users/profile",config)
			.then((res) => res.json())
			.then((json) => data=json);
			
			
			dispatch({
				type: USER_PROFILE_SUCCESS,
				payload:data,
			});
		} catch (error) {
			dispatch({
				type: USER_PROFILE_FAIL,
				payload: error.response && error.response.data.message,
			});
		}
	};
};

export { registerUserAction,LoginUserAction,Logout,profileAction};