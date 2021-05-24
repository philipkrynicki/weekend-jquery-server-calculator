console.log('hello world!');

$(handleReady);

function handleReady() {
    console.log('jquery loaded!');

    // Click listeners
    $('#numberInOne').on('click');
    $('#First').on('click', processAddition);
    $('#Second').on('click', processSubtraction);
    $('#Third').on('click', processMultiplication);
    $('#Fourth').on('click', processDivision);
    $('#numberInTwo').on('click');
    $('#Equals').on('click', processEquals);
    $('#submit').on('click', processClear);
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
    operator = 'plus';
}

function processSubtraction( numOne, numTwo) {
    operator = 'minus';
} 

function processMultiplication( numOne, numTwo) {
    operator = 'multiply';
}

function processDivision( numOne, numTwo) {
    operator = 'division';
}


function processClear () {
    console.log('time to delete the info');
    console.log($(this));
    $(this).closest('').remove();

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
        // code on line 77 needs a corrections.  $numbers is not referring to the /numbers
        $('$numbers').empty;
    // append quotes to DOM
    for(let math of math) {
        // append the results to the DOM
        // the code on line 82 is not correct and needs to be fixed, specifically #numbers
        $('#numbers').append(`  
        <li>${response}</li>
        `)
    }
    alert("You answer is ready");
    })
}