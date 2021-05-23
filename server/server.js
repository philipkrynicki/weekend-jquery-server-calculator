const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;



// without this bodyparser, we cannot find the data in a post
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('server/public'));

//  Variables were declared/defined in other project HERE
// let numOne = 1;
// let numTwo = 2;

// Function was defined to evaluate html input on the server
// console.log of the results
// write functions here
function processAddition () {
    return numOne + numTwo;  
}


app.post('/numbers', (req, res) => {
    // add the incoming quote to our quote list
    // request will have a lot, including our sent quote
    // send back a good response
    //req.body is made by body-parser
    // info from client
    console.log(req.body);
    subNumbers.push(req.body)

    // send back a good response 200 being okay
    res.sendStatus(201)

    // possibly call all *+-/ functions here
});

// Get is for getting existing data
app.get('/numbers', (req, res) => {
    console.log('got to /quotes');

    //respond
    // whatever is in the send 
    res.send()
})

// start listening for connections
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});

let subNumbers = []