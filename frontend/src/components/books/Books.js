import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/action/book/bookAction";
import { BookList } from "../../Redux/reducer/books/BookList";
import Loading from "../loading/Loading";
const Books = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		//dispatch action
		dispatch(fetchAction());
	}, [dispatch]);

	//GRAB THE DATA FROM OUR STORE

	const { books, loading } = useSelector((state) => {
		return state.bookList;
	});
	console.log(books);
	console.log(loading);

	return (
		<div>
			<div className="row">
				<div className="col">
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">Author</th>
								<th scope="col">Book Name</th>
								<th scope="col">Action</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{loading ? (
								<Loading />
							) : (
								<>
									{books &&
										books.map((book) => {
											return (
												<>
													{/* Map through here */}
													<tr className="table-dark">
														<th scope="row">{book.title}</th>
														<td>{book.author}</td>
														<td>
															<i
																className="fas fa-trash "
																style={{
																	color: "red",
																	cursor: "progress",
																}}
															></i>
														</td>
														<td>
															<i
																className="far fa-edit"
																style={{
																	color: "yellow",
																	cursor: "progress",
																}}
															></i>
														</td>
													</tr>
													{/* End of map thr */}
												</>
											);
										})}
								</>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Books;
