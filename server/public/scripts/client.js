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