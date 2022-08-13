import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookReducer } from '../reducer/books/bookReducer';
import { BookList } from "../reducer/books/BookList"
import { userAuthReducer } from "../reducer/user/userAuthReducer";
import userProfileReducer from "../reducer/user/useProfileReducer"

const middleware = [thunk];



const reducer = combineReducers({
	bookCreated: bookReducer,
	bookList: BookList,
	userInfo: userAuthReducer,
	userProfile:userProfileReducer
	
});

const userAuthStorage = localStorage.getItem('userAuthData') ?
	JSON.parse(localStorage.getItem('userAuthData')) : null
const initialState = {
			userInfo:{userInfo:userAuthStorage}
		}
const store = legacy_createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export {store}