// Establish Connection

const mongoose = require('mongoose');

main().then(() => {console.log("Connection Successful")})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Setting the user Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age : Number
});

const User = mongoose.model("User", userSchema); // model(class) is created
// User.find({age : {$gte : 47}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


// User.updateOne({name: "Bruce"},{age: 49}).then((res) => {
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })

// User.findOneAndUpdate({name: "Bruce"},{age : 55},{new: true}).then((res) =>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

User.deleteOne({name: "Bruce"},{age: 55}).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
})


// User.insertMany([
//     {name : "Tony",email : "tony@gmail.com",age : 50},
//     {name : "Bruce",email : "bruce@gmail.com",age : 47},
//     {name : "Peter",email : "peter@gmail.com",age : 30}
// ]).then((res) => {
//     console.log(res);
// })

// const user1 = new User({
//     name : "Adam",
//     email : "adam@yahoo.in",
//     age : 48
// });

// const user2 = new User({
//     name : "Eve",
//     email : "eve@google.com",
//     age : 48
// });

// user1.save();
// user2 .save();