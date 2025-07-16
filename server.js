const express = require('express')
const app = express();
const db = require('./db.js')
const server = 'http://localhost:3000';
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes.js');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuItemsRoutes.js');
app.use('/menuItem', menuRoutes);

app.get('/', function (req, res){
    res.send('Welcome to my hotel... Enjoy yourself...')
})

// Error handling middleware
app.listen(3000, ()=>{console.log(`Server is live on port ${server}` )})

































































































































// const { json } = require('express');
// var _ = require('lodash');

// var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,"Rajiv", "Rohan", 3, 1, 5, 6, "17", "18", "19", "20"];

// var filter= _.uniq(data)
// console.log('Unique values:', filter);




// // console.log('Server is running...');


// // function add(a, b){
// //     return a+b;
// // }
// // let result = add(5, 7);
// // console.log('The result of adding 5 and 3 is:', result);



// // let add = function add(a, b) {
// //     return a + b;
// // }   

// // let result = add(5, 7);
// // console.log('The result of adding 5 and 7 is:', result);



// // var add = (a ,b) => {
// //     return a + b;
// // }
// // let result = add(5, 7);
// // console.log('The result of adding 5 and 7 is:', result);




// // (function add(a, b) {
//     //     console.log( a + b);
//     // }) (5, 7);
    



// // Callback functions


// function callback (){
//     console.log('This is a callback function');
// }

// let add = function (a, b, callback) {
//     let result = a + b;
//     console.log('The result of adding', a, 'and', b, 'is:', result);
//     callback(); 
// }

// add(5,6, callback);






// var fs = require('fs');
// var os = require('os');

// // let user = os.userInfo();
// // console.log('User Info:', user);

// // fs.appendFile('greeting.txt', 'Hi ' + user.username + '\n', () => {
// //     console.log('File created successfully');
// // })

// console.log(os)
// console.log(fs)



// const notes = require('./notes.js');

// var age=notes.age;
// console.log('Age from notes:', age);


// const addNumbers = notes.addnumbers(5, 7);
// console.log("Add  Numbers:", addNumbers);






// const jsonString = '{"name": "John", "age": "24", "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name)


// const ObjectToConvert = {name:"Alice", age: 25};
// const jsonString = JSON.stringify(ObjectToConvert);
// console.log(jsonString)

// app.post("/items", function(res, req){
//     res.send("Data sent")
// })

// app.get('/rajiv', function (req, res){
//     res.send('I am Rajiv')
// })



// app.get('/barfi', function(req, res){
//     var costumize_barfi ={
//         name: "plane barfi",
//         size: "10 cm",
//         is_good: true

//     }
//     res.send(costumize_barfi);
// })