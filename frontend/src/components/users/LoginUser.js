import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import { LoginUserAction } from "../../Redux/action/users/userActions";
import ErrorMessage from "../ErrorMessage";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const state = useSelector((state) => state.userInfo);
		const {loading, userInfo,error } =state;
  function handle(e)
  {
    e.preventDefault()

    dispatch(LoginUserAction(email, password));
   

  }
  useEffect(() => {
		if (userInfo) {
			 navigate("/profile");
		} else {
		}
	}, userInfo);
	return (
		<div className="row container-height">
			<div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          {loading && <h1>loading</h1>}
          {error && <ErrorMessage>{error }</ErrorMessage>}
					<form  onSubmit={handle}>
						<fieldset>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
                <input
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>
							<button type="submit" className="btn btn-info m-auto">
								Login
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
