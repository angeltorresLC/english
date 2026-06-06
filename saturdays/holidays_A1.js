const s1Data = [
    { id: "i1", t: "Go on holiday", d: "To take a trip for fun and not for work." },
    { id: "i2", t: "Take a photo", d: "To use a camera to make a picture." },
    { id: "i3", t: "Pack a bag", d: "To put your clothes inside a suitcase." },
    { id: "i4", t: "Buy a ticket", d: "To pay money to travel on a train, bus, or plane." },
    { id: "i5", t: "Stay in a hotel", d: "To sleep in a building for visitors." },
    { id: "i6", t: "Take a taxi", d: "To pay a driver to take you somewhere in a car." },
    { id: "i7", t: "Wait in line", d: "To stand behind people to buy or do something." },
    { id: "i8", t: "Go sightseeing", d: "To walk around and visit famous places in a city." },
    { id: "i9", t: "Have a good time", d: "To feel happy and enjoy yourself." },
    { id: "i10", t: "Eat at a restaurant", d: "To pay for food cooked by someone else." },
    { id: "i11", t: "Send a postcard", d: "To mail a picture card to a friend." },
    { id: "i12", t: "Ride a bike", d: "To travel by bicycle." },
    { id: "i13", t: "Swim in the sea", d: "To move your body in the ocean water." },
    { id: "i14", t: "Rent a car", d: "To pay money to use a car for a short time." },
    { id: "i15", t: "Look at a map", d: "To check a paper or phone to find where to go." }
];

const s2Data = [
    {w: "Holiday", s: "Vacation"}, 
    {w: "Photo", s: "Picture"}, 
    {w: "Taxi", s: "Cab"}, 
    {w: "Shop", s: "Store"}, 
    {w: "Sea", s: "Ocean"},
    {w: "Big", s: "Large"},
    {w: "Fast", s: "Quick"},
    {w: "Bag", s: "Suitcase"},
    {w: "Good", s: "Great"},
    {w: "Happy", s: "Glad"},
    {w: "Start", s: "Begin"},
    {w: "End", s: "Finish"},
    {w: "City", s: "Town"}, 
    {w: "Cheap", s: "Low price"}, 
    {w: "Plane", s: "Airplane"}, 
    {w: "Walk", s: "Go on foot"}, 
    {w: "Beautiful", s: "Pretty"},
    {w: "Trip", s: "Journey"},
    {w: "Cold", s: "Chilly"},
    {w: "Hot", s: "Warm"}
];

const s3Data = [
    {q: "I want to take a ___ of this beautiful building.", a: "photo", o: ["photo","ticket","bag"], h: "You make this with a camera."},
    {q: "We sleep in a big ___ when we go to London.", a: "hotel", o: ["bus","hotel","sea"], h: "A building where visitors sleep."},
    {q: "You need a ___ to travel to another country.", a: "passport", o: ["passport","map","taxi"], h: "A small book with your name and photo from your country."},
    {q: "I will buy a ___ to travel on the train.", a: "ticket", o: ["ticket","postcard","bag"], h: "A piece of paper you buy to ride a train or plane."},
    {q: "My clothes are packed in my ___.", a: "bag", o: ["restaurant","bag","map"], h: "You put things in this to carry them."},
    {q: "Let's go to the ___ and swim in the water.", a: "beach", o: ["beach","airport","shop"], h: "A place with sand next to the ocean."},
    {q: "The plane leaves from the ___.", a: "airport", o: ["beach","hotel","airport"], h: "The place where airplanes take off and land."},
    {q: "It is very ___ in summer, so I wear a t-shirt.", a: "hot", o: ["hot","cold","fast"], h: "The opposite of cold."},
    {q: "I look at a ___ to find the museum.", a: "map", o: ["ticket","map","photo"], h: "A picture of the streets and city."},
    {q: "We want to eat, so we go to a ___.", a: "restaurant", o: ["bag","taxi","restaurant"], h: "A place where you buy and eat food."}
];

const s4Passages = [
    {
        text: `My family goes to the <strong>beach</strong> in summer. We travel by car. The journey is two hours long. At the beach, my brother <strong>swims</strong> in the sea. I sit in the sun and read a book. We eat ice cream in the afternoon. We stay in a small <strong>hotel</strong> near the water. It is a very happy <strong>holiday</strong>.`,
        data: [
            {q: "The family travels by train.", a: "F"},
            {q: "The journey takes two hours.", a: "T"},
            {q: "The brother reads a book on the beach.", a: "F"},
            {q: "They eat ice cream in the afternoon.", a: "T"},
            {q: "The hotel is very expensive.", a: "NG"}
        ]
    },
    {
        text: `I love visiting big cities. Next week, I am going to London. I have my <strong>ticket</strong> and my <strong>passport</strong>. I will fly on a <strong>plane</strong>. In London, I want to take a lot of <strong>photos</strong>. I will visit museums and walk in the parks. I will buy a postcard for my friend. I hope the weather is good!`,
        data: [
            {q: "The person is going to London next week.", a: "T"},
            {q: "The person travels to London by bus.", a: "F"},
            {q: "The person wants to take photos.", a: "T"},
            {q: "The person will buy a postcard for their mother.", a: "F"},
            {q: "The person has a big bag.", a: "NG"}
        ]
    },
    {
        text: `Today, Maria is going on holiday. She is at the <strong>airport</strong>. The airport is very large and busy. Maria has a small <strong>bag</strong>. She shows her <strong>passport</strong> to the man. Then, she waits for her <strong>flight</strong>. She drinks a coffee and reads a book. She is very excited to fly.`,
        data: [
            {q: "Maria is at the train station.", a: "F"},
            {q: "The airport has a lot of people.", a: "T"},
            {q: "Maria has a very big suitcase.", a: "F"},
            {q: "Maria buys a sandwich.", a: "F"},
            {q: "Maria is happy to travel.", a: "T"}
        ]
    }
];

const s5Pairs = [
    {id:1, t:"Travel"}, {id:1, t:"To go to a different place"},
    {id:2, t:"Arrive"}, {id:2, t:"To come to a place"},
    {id:3, t:"Leave"}, {id:3, t:"To go away from a place"},
    {id:4, t:"Swim"}, {id:4, t:"To move your body in the water"},
    {id:5, t:"Fly"}, {id:5, t:"To travel in the air in a plane"},
    {id:6, t:"Walk"}, {id:6, t:"To move on your feet"},
    {id:7, t:"Drive"}, {id:7, t:"To control a car"},
    {id:8, t:"Wait"}, {id:8, t:"To stay in a place until something happens"},
    {id:9, t:"Visit"}, {id:9, t:"To go and see a place or person"},
    {id:10, t:"Buy"}, {id:10, t:"To give money to get something"},
    {id:11, t:"Eat"}, {id:11, t:"To put food in your mouth"},
    {id:12, t:"Sleep"}, {id:12, t:"To rest in a bed"},
    {id:13, t:"Pack"}, {id:13, t:"To put your clothes in a bag"},
    {id:14, t:"Help"}, {id:14, t:"To do something good for someone"},
    {id:15, t:"Look"}, {id:15, t:"To use your eyes to see"}
];

const s6Data = [
    {w: "BEACH", h: "A place with sand next to the sea."}, 
    {w: "HOTEL", h: "A place where you pay to sleep."}, 
    {w: "TICKET", h: "You buy this to ride a bus or train."}, 
    {w: "PHOTO", h: "A picture made with a camera."}, 
    {w: "PLANE", h: "A big machine that flies in the sky."}, 
    {w: "TRAIN", h: "A long vehicle that travels on tracks."}, 
    {w: "WATER", h: "You drink this, or swim in it at the beach."}, 
    {w: "CITY", h: "A big place with many buildings and people (like London or Paris)."},
    {w: "PASSPORT", h: "A book that lets you travel to a new country."},
    {w: "BAG", h: "You put your clothes in this when you travel."}, 
    {w: "TAXI", h: "A car with a driver that you pay to take you places."}, 
    {w: "MAP", h: "A picture that shows you where streets and towns are."}, 
    {w: "SUN", h: "It is yellow, hot, and in the sky during the day."}
];

const s7Data = [
    {q: "What do you need to fly to another country?", o:["A passport", "A postcard"], a:0, h: "It is a small official book with your photo."},
    {q: "Where do planes fly from?", o:["A train station", "An airport"], a:1, h: "A place with lots of airplanes."},
    {q: "What do you use to take a picture?", o:["A camera", "A map"], a:0, h: "You can also use your phone to do this."},
    {q: "Where do you sleep when you are on holiday?", o:["A shop", "A hotel"], a:1, h: "It has rooms and beds for visitors."},
    {q: "What is a place with lots of sand and water?", o:["A beach", "A city"], a:0, h: "People go here to swim in the sea."},
    {q: "What do you need to buy to travel on a bus or train?", o:["A bag", "A ticket"], a:1, h: "You give the driver money for this piece of paper."},
    {q: "What do you look at to find the right street?", o:["A map", "A ticket"], a:0, h: "It shows where places are in a city."},
    {q: "Where do you put your clothes when you travel?", o:["In a bag", "In a taxi"], a:0, h: "Also called a suitcase."}
];

const s8Data = [
    {
        context: "<strong>Friend:</strong> Where do you want to go on holiday?<br><strong>You:</strong> I want to go to the beach to ________ in the sea.",
        options: ["swim", "fly", "drive"],
        a: 0,
        h: "To move in the water."
    },
    {
        context: "<strong>Teacher:</strong> How do you go to school?<br><strong>Student:</strong> I don't walk. I usually take the ________.",
        options: ["bus", "bag", "hotel"],
        a: 0,
        h: "A large vehicle that carries many people."
    },
    {
        context: "<strong>Friend:</strong> Do you like to travel by plane?<br><strong>You:</strong> Yes, traveling on a plane is very ________. It is not slow.",
        options: ["fast", "cold", "bad"],
        a: 0,
        h: "Moving very quickly."
    },
    {
        context: "<strong>Mum:</strong> What do you put in your suitcase?<br><strong>You:</strong> I ________ my clothes and my camera.",
        options: ["pack", "eat", "wait"],
        a: 0,
        h: "To put things into a bag."
    },
    {
        context: "<strong>Friend:</strong> Where do you sleep on holiday?<br><strong>You:</strong> I stay in a small ________ near the city center.",
        options: ["map", "hotel", "airport"],
        a: 1,
        h: "A place to sleep for visitors."
    },
    {
        context: "<strong>Friend:</strong> Do you take photos on holiday?<br><strong>You:</strong> Yes, I take lots of ________ with my phone.",
        options: ["pictures", "tickets", "passports"],
        a: 0,
        h: "Another word for photos."
    },
    {
        context: "<strong>Friend:</strong> Do you like big cities?<br><strong>You:</strong> Yes, I like to walk around and ________ famous museums.",
        options: ["visit", "fly", "buy"],
        a: 0,
        h: "To go and see a place."
    }
];