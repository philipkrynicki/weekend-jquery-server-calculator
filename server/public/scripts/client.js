console.log('hello world!');

$(handleReady);

function handleReady() {
    console.log('jquery loaded!');

    // Click listeners
    ('#First').on('click', processAddition);

    ('#Second').on('click', processSubtraction);

    ('#Third').on('click', processMultiplication);

    ('#Fourth').on('click', processDivision);

    ('#Equals').on('click', processEquals(('#numberInOne').val, ('#numberInTwo').val));

    ('#submit').on('click', processClear);

    getResults();


}


function processAddition( numOne, numTwo ) {
    return numOne + numTwo;    
}

function addQuote() {
    let newQuote = {
        text: $('#textIn').val(),
        author: $('#authorIn').val()
    }
    // add to array...
    // push it into quoteList
    // MAKE POST REQUEST WITH newQuote
    // data should always be an object

    $.ajax({
        url: '/number',
        method: 'POST',
        data: newQuote // becomes req.body on the server
    }).then(function (response) {
        console.log(response)
        getQuotes();
    })
}

function getQuotes() {
    // got to server route / quotes
    // promise "when I come back I do something else"   .then is usually working with a promise
    $.ajax({
        method: 'GET' ,
        url: '/quotes'
    }).then(function (response) {
        // response is what was in the res.send()
        console.log(response)
        // empty DOM
        $('$quotes').empty;
    // append quotes to DOM
    for(let quote of response) {
        $('#quote').append(`
        <li>${quote.text} By: ${quote.author}</li>
        `)
    }
    alert("hello");
    })
}