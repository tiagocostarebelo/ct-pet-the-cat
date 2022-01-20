let currentHuman;
let petCounter = 0;

// Constructor function (can turn into class declaration)
function Cat(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = Math.round(Math.random() * 18);
    this.humanAge = humanAge;
    this.pet = pet;
    this.pettedBy = [];
    this.sayHello = sayHello;
    this.petCount = petCount;
    this.petList = petList;
    this.favoritePlay = favoritePlay;
}

function pet() {
    // get the name of the person who pets / I've went with a prompt and saved it to a variable to be used throughout
    // person must be added to the pettedBy array (not making any verifications if the person is duplicated as one can pet the cat more than once)
    // needs to increment 1 to the petCounter every time the pet method is called so when petCount method is called, petCounter is updated   
    currentHuman = prompt("What is your name?");
    if (currentHuman != "") {
        this.pettedBy.push(currentHuman);
        petCounter++;
        return `Hello ${currentHuman} it is nice to meet you.`
    } else {
        return alert("Please tell me your name if you want to pet me. I don't take petting from strangers.") //extra for funs
    }
}

function humanAge() {
    // make the human age by multiplying cat's age by 6. Added something for funs.
    return "My human age is " + this.age * 6 + ". Bonus points if you find my favorite play.";
};

function sayHello() {
    // Default is "Meow, my name is firstname lastname".
    // If the cat has been petted by 'Dan' at any point the cat should just say 'Meow'.
    if(this.pettedBy.includes('Dan')) {
        return "Meow";
    } else {
        return `Meow, my name is ${this.firstName} ${this.lastName}`;
    }        
}

function petCount() {
    //everytime pet() is called, petCounter is updated and it updates here when petCount is called.
    return `I was petted ${petCounter} times.`;
}

function petList() {
    //make the array turn into a comma separated list. 
    //Added a few conditions for fun.
    if (this.pettedBy.length < 1) {
        return "No one has petted me. Will you be the first to show me some love?"
    } else if (this.pettedBy.length == 1){
        return this.pettedBy.toString();
    } else {
        return this.pettedBy.join(", ");
    }
}


//Optional just for fun
function favoritePlay() {
    return `Well done ${currentHuman}. My favorite play is chasing light beams. One day I'll be a Jedi.. an improved version of Puss in Boots.`
}


const garfield = new Cat ("Garfield", "Jerome");

