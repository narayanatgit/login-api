const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
	mongoose.connect(
		"mongodb+srv://don:"+process.env.PASSWORD+"@cluster0.d6yifpd.mongodb.net/?retryWrites=true&w=majority"
    ,
    {
      
      useNewUrlParser: true,
      
    }
  ).then(()=>console.log("connected")).catch(err=>console.log(err));
};

module.exports = dbConnect;