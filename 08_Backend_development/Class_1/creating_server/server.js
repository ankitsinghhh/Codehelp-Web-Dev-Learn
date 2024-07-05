//1. go to a folder where you want 
//2. npm init -y 
//3. npm i epxresss
// create server.js file


//server instantiate
const express = require('express'); // express ka istance bna rhe hai 
const app = express(); //express ka single instance initiate krke uska naam app rakh diye ab

//used to parse req.body -> PUT OR POST
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //specifically parse json data  and add it to request .body object
 // specifically bol rhe ki json data parsse krna 





// listening to port 3000 --> server ko lga diya ki listen kre is port 3000 pe
app.listen(3000, () =>{
    console.log("server started at port 3000");
} ) //activating server on port 3000






//Routes----------------------------------------------------------->




//get request
app.get('/', (request, response) =>{ 
    // app k upr get request apply krdie
    // iska route v define kr diya ki jb v us route pe aenge , tab response k andar ncihe wali string send kr denge
    response.send("hello world this is my first server")
})
// jab v server me us route pe aenge tab vo string milegi

//post request
app.post('/api/cars' , (request, response) =>{
// humnse is server pe ye post ka route define kr diya h 
//jab v is route pe jaenge tab request bdoy me se name aur brand nikaal liya jaega
    const {name,brand} = request.body //request ki bdoy me se data parse krne k liye body parser jruri h 
    console.log(name)
    console.log(brand)
    response.send("car submitted successfully") //response me aur ye string send hogi 
})

// to test post method , we use postman



// connecting express to mongodb

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) // This is a Promise
.then( () => console.log("connection successfull") )
 .catch( (err) => console.log("this is an error") );