//LIBRARY

//LOVE LIBRARY
const loveLibrary = {
    quote1: {
        author:"Joyce Carol Oates",
        quote:"In love there are two things: bodies and words."
    },
    quote2: {
        author:"Amy Poehler",
        quote:"Continue to share your heart with people even if it has been broken."
    },
    quote3: {
        author:"Coretta Scott King",
        quote:"Love is such a powerful force. It's there for everyone to embrace-that kind of unconditional love for all of humankind. That is the kind of love that impels people to go into the community and try to change conditions for others, to take risks for what they believe in."
    },
    quote4: {
        author:"Maiah Jane",
        quote:"colby colby colby he is so handsome... he always smells good"
    },
    quote5: {
        author:"Eckhart Tolle",
        quote:"To love is to recognize yourself in another."
    },
    quote6: {
        author:"Elizabeth Gilbert",
        quote:"To be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous."
    },
    quote7: {
        author:"Eric Fromm",
        quote:"Love isn't something natural. Rather it requires discipline, concentration, patience, faith, and the overcoming of narcissism. It isn't a feeling, it is a practice."
    },
    quote8: {
        author:"Friedrich Nietzsche",
        quote:"There is always some madness in love. But there is also always some reason in madness."
    },
    quote9: {
        author:"Jodi Picoult",
        quote:"I believe in love. I think it just hits you and pulls the rug out from underneath you and, like a baby, demands your attention every minute of the day."
    },
    quote10: {
        author:"Joe Manganiello",
        quote:"When you find that one that's right for you, you feel like they were put there for you, you never want to be apart."
    },
    quote11: {
        author:"John Krasinski",
        quote:"When you're lucky enough to meet your one person, then life takes a turn for the best. It can't get better than that."
    }
};

//NATURE LIBRARY
const natureLibrary = {
    quote1: {
        author:"Henry David Thoreau",
        quote:"Heaven is under our feet as well as over our heads."
    },
    quote2: {
        author:"Albert Einstein",
        quote:"Look deep into nature, and then you will understand everything better."
    },
    quote3: {
        author:"Native American proverb",
        quote:"We don't inherit the earth from our ancestors, we borrow it from our children."
    },
    quote4: {
        author:"Lao Tzu",
        quote:"Nature does not hurry, yet everything is accomplished."
    },
    quote5: {
        author:"Robert Louis Stevenson",
        quote:"It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
    },
    quote6: {
        author:"John Burroughs",
        quote:"I go to nature to be soothed and healed, and to have my senses put in order."
    },
    quote7: {
        author:"Mahatma Gandhi",
        quote:"To forget how to dig the earth and to tend the soil is to forget ourselves."
    },
    quote8: {
        author:"Carl Sagan",
        quote:"Preserve and cherish the pale blue dot, the only home we've ever known."
    },
    quote9: {
        author:"Frank Lloyd Wright",
        quote:"Study nature, love nature, stay close to nature. It will never fail you."
    },
    quote10: {
        author:"Voltaire",
        quote:"Men argue. Nature acts."
    }
};

let arrLove = Object.keys(loveLibrary);
let arrNature = Object.keys(natureLibrary);
let random;

const loveGenerate = () => {
   
    if(arrLove.length === 0){
        arrLove = Object.keys(loveLibrary);
    };

    random = Math.floor(Math.random() * (arrLove.length));       
    document.getElementById("poem").style.opacity = "1";
    document.getElementById("poem-author").innerHTML = loveLibrary[arrLove[random]].author;
    document.getElementById("poem-generated").innerHTML = loveLibrary[arrLove[random]].quote;
    arrLove.splice(random,1);   
};

const natureGenerate = () => {

    if(arrNature.length === 0){
        arrNature = Object.keys(natureLibrary);
    };

    random = Math.floor(Math.random() * (arrNature.length));
    document.getElementById("poem").style.opacity = "1";
    document.getElementById("poem-author").innerHTML = natureLibrary[arrNature[random]].author;
    document.getElementById("poem-generated").innerHTML = natureLibrary[arrNature[random]].quote;
    arrNature.splice(random,1);
};

const generate = () => {

    if(document.getElementById("genres").value === "love"){
        loveGenerate();
    }     
    else if(document.getElementById("genres").value === "nature"){
        natureGenerate();
    }
};
