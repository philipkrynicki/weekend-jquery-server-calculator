console.log('hello world!');

$(handleReady);



function handleReady() {
    console.log('jquery loaded!');

    // Click listeners
    ('#numberInOne').on('click');

    ('First').on('click', processAddition);
    
    ('#Second').on('click', processSubtraction);

    ('#Third').on('click', processMultiplication);

    ('#Fourth').on('click', processDivision);

    ('#numberInTwo').on('click');
    
    ('#Equals').on('click', processEquals);

    ('#submit').on('click', processClear);

    getResults();


}

let operator = 0;

function processEquals() {
    console.log('in handleEquals');

    let submittedNumbers = {
        numberOne: $('#numberInOne').val(),
        operator: operator,
        numberTwo: $('#numberInTwo').val(),
    }
        $.ajax( {
            method: 'POST',
            url: '/numbers',
            data: submittedNumbers,
        }).then(function(response){
            console.log(response);
            getResults();
        })
    }



function processAddition( numOne, numTwo ) {
    return numOne + numTwo;    
}

function processSubtraction( numOne, numbTwo) {
    
} 





function getResults() {
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
    for(let math of math) {
        $('#number').append(``)
    }
    alert("hello");
    })
}