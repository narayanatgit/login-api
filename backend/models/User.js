const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});
//populating books the user created it

UserSchema.virtual("books", {
	ref: "Book",
	foreignField: 'createdBy',
	localField:'_id'
});

UserSchema.set('toJSON',{virtuals:true})

UserSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);

	next();
});
UserSchema.methods.isPasswordMatch = async function (bodyPassword) {
	
	return bcrypt.compareSync(bodyPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
