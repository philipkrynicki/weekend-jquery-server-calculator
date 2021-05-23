console.log('hello world!');

$(handleReady);



function handleReady() {
    console.log('jquery loaded!');

    // Click listeners
    ('#First').on('click', processAddition);

    ('#Second').on('click', processSubtraction);

    ('#Third').on('click', processMultiplication);

    ('#Fourth').on('click', processDivision);

    ('#Equals').on('click', processEquals);

    ('#submit').on('click', processClear);

    getResults();


}

let operator = 0;

function processEquals() {
    console.log('in handleEquals');

    let submittedNumbers = {
        numberOne: $('#inputOne').val(),
        operator: operator,
        numberTwo: $('#inputTwo').val()

        $.ajax( {
            method: 'POST',
            url: '/numbers',
            data: submittedNumbers
        }).then(function.(response){
            console.log(response);
        })
    }
}


function processAddition( numOne, numTwo ) {
    return numOne + numTwo;    
}





function getQuotes() {
    // got to server route / quotes
    // promise "when I come back I do something else"   .then is usually working with a promise
    $.ajax({
        method: 'GET' ,
        url: '/numbers'
    }).then(function (response) {
        // response is what was in the res.send()
        console.log(response)
        // empty DOM
        $('$number').empty;
    // append quotes to DOM
    for(let quote of response) {
        $('#quote').append(`
        <li>${quote.text} By: ${quote.author}</li>
        `)
    }
    alert("hello");
    })
}