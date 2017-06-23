var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story",
        "ending" : 0
},
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 6
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "Describe the current setting",
        "ending" : 0
},
    {
        "id": 3,
        "choices": {
            "first": 4,
            "second": 6
        },
        "choiceText": "Go Right",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending" : 0
},
    {
        "id": 4,
        "choices": {
            "first": 8,
            "second": 9
        },
        "choiceText": "Go Right",
        "title": "The Gardens",
        "description": "This is looking better...",
        "ending" : 1
    },
    {
        "id": 6,
        "choices": {
            "first": 10,
            "second": 11
        },
        "choiceText": "Go Right",
        "title": "Chomp Chomp",
        "description": "Yummmmmmm.",
        "ending" : -1
    }];


//updates the screen to show the current description and choices
//requires the id of the new set of instructions
function nextStep(id) {
    //first we need to get the new item from the list of instructions
    var instruction = getItem(instructions, id);

    //then we need to update the screen with the main description
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);

    //then get the items for choice1 and 2 from the list
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);

    //check to see if they are endpoints

    //if endpoints then end the game
    if(instruction.ending === -1) {
        sadDay();
    }
    else if (instruction.ending === 1) {
        happyDay();
    }

    //if not update those sections on the screen with the choiceText
    updateElement('choiceOne', choice1.choiceText);
    updateElement('choiceTwo', choice2.choiceText);
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);
}

//1. create the getItem, updateElement, and updateButton functions

//getItem: gets an item from a list by id
//requires the list and id of the desired element
nextStep(1);
function getItem(instructions, id) {
    for (var i = 0; i < instructions.length; i++) {
        if (id === instructions[i].id) {
            return instructions[i];
        }
    }
}

//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.
function updateElement(title, instructions) {
    document.getElementById(title).innerHTML = instructions;
}


//updateButton: sets the onclick event for a button with the id of the item it chooses
function updateButton(button, choice) {
    document.getElementById(button).setAttribute('onclick', 'nextStep(' + choice + ')');
}


//2. then create and use a function to initialize the game to step 1

//3. other needed functions
//restart: resets the game back to the beginning.

function resetGame(id) {
    document.getElementById('gameEnd').innerHTML = " ";
    nextStep(id);
}

//happy ending: does whatever we want it to do when they end in a good place
function happyDay(){
    document.getElementById('gameEnd').innerHTML = 'THE END!  You live to adventure another day...'
}

//sad ending: does whatever we want it to do if they end at a bad place
function sadDay(){
    document.getElementById('gameEnd').innerHTML = 'THE END!  Sorry, you died...'
}

// Collaborators: Sam Daw and ME!
