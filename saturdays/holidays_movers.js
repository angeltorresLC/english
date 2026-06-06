// --- Stage 1: Vocabulary Matching ---
const s1Data = [
    { id: "i1", t: "✈️ Go on holiday", d: "🏖️ To take a trip for fun and not for work." },
    { id: "i2", t: "📸 Take a photo", d: "🖼️ To use a camera to make a picture." },
    { id: "i3", t: "🎒 Pack a bag", d: "👕 To put your clothes inside a suitcase." },
    { id: "i4", t: "🎫 Buy a ticket", d: "💰 To pay money to travel on a train, bus, or plane." },
    { id: "i5", t: "🏨 Stay in a hotel", d: "🛏️ To sleep in a building for visitors." },
    { id: "i6", t: "🚕 Take a taxi", d: "🚗 To pay a driver to take you somewhere in a car." },
    { id: "i7", t: "🧍‍♂️ Wait in line", d: "🚶‍♂️ To stand behind people to buy or do something." },
    { id: "i8", t: "🏛️ Go sightseeing", d: "👀 To walk around and visit famous places in a city." },
    { id: "i9", t: "🥳 Have a good time", d: "😁 To feel happy and enjoy yourself." },
    { id: "i10", t: "🍽️ Eat at a restaurant", d: "🍕 To pay for food cooked by someone else." },
    { id: "i11", t: "💌 Send a postcard", d: "📬 To mail a picture card to a friend." },
    { id: "i12", t: "🚲 Ride a bike", d: "🚴‍♂️ To travel by bicycle." },
    { id: "i13", t: "🏊‍♂️ Swim in the sea", d: "🌊 To move your body in the ocean water." },
    { id: "i14", t: "🚙 Rent a car", d: "🔑 To pay money to use a car for a short time." },
    { id: "i15", t: "🗺️ Look at a map", d: "📍 To check a paper or phone to find where to go." },
    // NEW ONES ADDED BELOW
    { id: "i16", t: "🏰 Build a sandcastle", d: "🏖️ To make a small house out of sand on the beach." },
    { id: "i17", t: "🍦 Eat ice cream", d: "😋 To eat a sweet, cold food on a hot day." },
    { id: "i18", t: "🎁 Buy a present", d: "🧸 To get a nice gift for a friend or family member." },
    { id: "i19", t: "🐒 See animals", d: "🦒 To look at animals in a zoo or on a safari." },
    { id: "i20", t: "⛺ Sleep in a tent", d: "🌲 To camp outside in the forest or mountains." }
];

// --- Stage 2: Synonym Bridges ---
const s2Data = [
    {w: "🌴 Holiday", s: "🏖️ Vacation"}, 
    {w: "📸 Photo", s: "🖼️ Picture"}, 
    {w: "🚕 Taxi", s: "🚖 Cab"}, 
    {w: "🏪 Shop", s: "🏬 Store"}, 
    {w: "🌊 Sea", s: "🐋 Ocean"},
    {w: "🐘 Big", s: "🐳 Large"},
    {w: "🐆 Fast", s: "⚡ Quick"},
    {w: "🎒 Bag", s: "🧳 Suitcase"},
    {w: "👍 Good", s: "🌟 Great"},
    {w: "😁 Happy", s: "😊 Glad"},
    {w: "🟢 Start", s: "🏁 Begin"},
    {w: "🛑 End", s: "✅ Finish"},
    {w: "🏙️ City", s: "🏘️ Town"}, 
    {w: "🪙 Cheap", s: "🏷️ Low price"}, 
    {w: "✈️ Plane", s: "🛫 Airplane"}, 
    {w: "🚶‍♂️ Walk", s: "👟 Go on foot"}, 
    {w: "🌸 Beautiful", s: "✨ Pretty"},
    {w: "🗺️ Trip", s: "🧭 Journey"},
    {w: "🥶 Cold", s: "❄️ Chilly"},
    {w: "🥵 Hot", s: "☀️ Warm"},
    // NEW ONES ADDED BELOW
    {w: "⛵ Boat", s: "🚢 Ship"},
    {w: "🏃‍♂️ Run", s: "💨 Dash"},
    {w: "🎉 Fun", s: "😊 Joy"},
    {w: "😋 Yummy", s: "🍕 Tasty"},
    {w: "👨‍👩‍👧 Mum & Dad", s: "👪 Parents"}
];

// --- Stage 3: Syntax Completion ---
const s3Data = [
    {q: "I want to take a ___ 📸 of this beautiful building.", a: "photo", o: ["photo","ticket","bag"], h: "You make this with a camera."},
    {q: "We sleep in a big ___ 🏨 when we go to London.", a: "hotel", o: ["bus","hotel","sea"], h: "A building where visitors sleep."},
    {q: "You need a ___ 🛂 to travel to another country.", a: "passport", o: ["passport","map","taxi"], h: "A small book with your name and photo from your country."},
    {q: "I will buy a ___ 🎫 to travel on the train.", a: "ticket", o: ["ticket","postcard","bag"], h: "A piece of paper you buy to ride a train or plane."},
    {q: "My clothes are packed in my ___ 🎒.", a: "bag", o: ["restaurant","bag","map"], h: "You put things in this to carry them."},
    {q: "Let's go to the ___ 🏖️ and swim in the water.", a: "beach", o: ["beach","airport","shop"], h: "A place with sand next to the ocean."},
    {q: "The plane leaves from the ___ 🛫.", a: "airport", o: ["beach","hotel","airport"], h: "The place where airplanes take off and land."},
    {q: "It is very ___ ☀️ in summer, so I wear a t-shirt.", a: "hot", o: ["hot","cold","fast"], h: "The opposite of cold."},
    {q: "I look at a ___ 🗺️ to find the museum.", a: "map", o: ["ticket","map","photo"], h: "A picture of the streets and city."},
    {q: "We want to eat, so we go to a ___ 🍽️.", a: "restaurant", o: ["bag","taxi","restaurant"], h: "A place where you buy and eat food."},
    // NEW ONES ADDED BELOW
    {q: "I like to build a big ___ 🏰 on the beach.", a: "sandcastle", o: ["photo", "sandcastle", "ticket"], h: "A house made of sand."},
    {q: "It is very hot, so I want to eat ___ 🍦.", a: "ice cream", o: ["ice cream", "pizza", "soup"], h: "A cold, sweet treat."},
    {q: "We ride on a big ___ 🚢 to cross the sea.", a: "boat", o: ["bus", "bike", "boat"], h: "It travels on water."},
    {q: "I want to buy a nice ___ 🎁 for my grandma.", a: "present", o: ["present", "passport", "plane"], h: "Another word for gift."},
    {q: "We sleep in a ___ ⛺ when we go camping.", a: "tent", o: ["hotel", "tent", "shop"], h: "A small house made of cloth used outside."}
];

// --- Stage 4: Short Stories ---
const s4Passages = [
    {
        text: `☀️ My family goes to the <strong>🏖️ beach</strong> in summer. We travel by 🚗 car. The journey is two hours long. At the beach, my brother <strong>🏊‍♂️ swims</strong> in the sea. I sit in the sun and read a 📖 book. We eat 🍦 ice cream in the afternoon. We stay in a small <strong>🏨 hotel</strong> near the water. It is a very happy <strong>🌴 holiday</strong>.`,
        data: [
            {q: "🚂 The family travels by train.", a: "F"},
            {q: "⏱️ The journey takes two hours.", a: "T"},
            {q: "📖 The brother reads a book on the beach.", a: "F"},
            {q: "🍦 They eat ice cream in the afternoon.", a: "T"},
            {q: "💰 The hotel is very expensive.", a: "NG"}
        ]
    },
    {
        text: `🏙️ I love visiting big cities. Next week, I am going to London 🇬🇧. I have my <strong>🎫 ticket</strong> and my <strong>🛂 passport</strong>. I will fly on a <strong>✈️ plane</strong>. In London, I want to take a lot of <strong>📸 photos</strong>. I will visit museums and walk in the 🌳 parks. I will buy a 💌 postcard for my friend. I hope the weather is good! ☀️`,
        data: [
            {q: "📅 The person is going to London next week.", a: "T"},
            {q: "🚌 The person travels to London by bus.", a: "F"},
            {q: "📸 The person wants to take photos.", a: "T"},
            {q: "👩‍👧 The person will buy a postcard for their mother.", a: "F"},
            {q: "🎒 The person has a big bag.", a: "NG"}
        ]
    },
    // NEW ONES ADDED BELOW
    {
        text: `🐒 Today, we are at the big <strong>🐘 zoo</strong> for our holiday! There are so many animals. I see a tall 🦒 giraffe eating leaves. My sister likes the fast 🐆 cheetahs. At lunch time, we eat sandwiches 🥪 on the green grass. I take a nice <strong>📸 photo</strong> of a funny monkey. It is the best day ever! 🎈`,
        data: [
            {q: "🐘 The family is at the zoo today.", a: "T"},
            {q: "🦒 The giraffe is eating apples.", a: "F"},
            {q: "🥪 They eat sandwiches for lunch.", a: "T"},
            {q: "📸 The person takes a photo of a lion.", a: "F"},
            {q: "🎈 The person is very sad.", a: "F"}
        ]
    },
    {
        text: `🌲 Next weekend, my dad and I are going camping in the forest. We have a big green <strong>⛺ tent</strong> to sleep in. We must pack warm clothes because it is 🥶 cold at night. We will walk in the woods and try to find small 🐿️ animals. My dad will cook hot soup 🍲 over a fire. I love sleeping outside! 🌟`,
        data: [
            {q: "🌲 They are going camping in the forest.", a: "T"},
            {q: "⛺ They will sleep in a big blue tent.", a: "F"},
            {q: "🥶 It gets cold in the forest at night.", a: "T"},
            {q: "🐿️ They want to find small animals.", a: "T"},
            {q: "🍲 The dad will cook pizza.", a: "F"}
        ]
    }
];

// --- Stage 5: Memory Game Pairs ---
const s5Pairs = [
    {id:1, t:"✈️ Travel"}, {id:1, t:"🌍 To go to a different place"},
    {id:2, t:"🛬 Arrive"}, {id:2, t:"📍 To come to a place"},
    {id:3, t:"👋 Leave"}, {id:3, t:"🚪 To go away from a place"},
    {id:4, t:"🏊‍♂️ Swim"}, {id:4, t:"🌊 To move your body in the water"},
    {id:5, t:"✈️ Fly"}, {id:5, t:"☁️ To travel in the air in a plane"},
    {id:6, t:"🚶‍♂️ Walk"}, {id:6, t:"👟 To move on your feet"},
    {id:7, t:"🚗 Drive"}, {id:7, t:"🛣️ To control a car"},
    {id:8, t:"🧍‍♂️ Wait"}, {id:8, t:"⏱️ To stay in a place until something happens"},
    {id:9, t:"🏛️ Visit"}, {id:9, t:"👀 To go and see a place or person"},
    {id:10, t:"🛍️ Buy"}, {id:10, t:"💵 To give money to get something"},
    // NEW ONES ADDED BELOW
    {id:11, t:"⚽ Play"}, {id:11, t:"🎮 To have fun with a game"},
    {id:12, t:"🧃 Drink"}, {id:12, t:"💧 To take water or juice into your body"},
    {id:13, t:"📖 Read"}, {id:13, t:"👀 To look at words in a book"},
    {id:14, t:"🏃‍♂️ Run"}, {id:14, t:"💨 To move very fast on your feet"}
];

// --- Stage 6: Spelling Decryption ---
const s6Data = [
    {w: "BEACH", h: "🏖️ A place with sand next to the sea."}, 
    {w: "HOTEL", h: "🏨 A place where you pay to sleep."}, 
    {w: "TICKET", h: "🎫 You buy this to ride a bus or train."}, 
    {w: "PHOTO", h: "📸 A picture made with a camera."}, 
    {w: "PLANE", h: "✈️ A big machine that flies in the sky."},
    // NEW ONES ADDED BELOW
    {w: "BOAT", h: "⛵ It travels on top of the water."},
    {w: "SUN", h: "☀️ It is yellow, hot, and in the sky."},
    {w: "SAND", h: "🏖️ You use this to build a castle on the beach."},
    {w: "ZOO", h: "🐘 A place where you can go to see wild animals."},
    {w: "TENT", h: "⛺ You sleep in this when you go camping."}
];

// --- Stage 7: Boss Quiz ---
const s7Data = [
    {q: "🛂 What do you need to fly to another country?", o:["A passport", "A postcard"], a:0, h: "It is a small official book with your photo."},
    {q: "🛫 Where do planes fly from?", o:["A train station", "An airport"], a:1, h: "A place with lots of airplanes."},
    {q: "📸 What do you use to take a picture?", o:["A camera", "A map"], a:0, h: "You can also use your phone to do this."},
    {q: "🏨 Where do you sleep when you are on holiday?", o:["A shop", "A hotel"], a:1, h: "It has rooms and beds for visitors."},
    // NEW ONES ADDED BELOW
    {q: "🏰 What do you build with sand on the beach?", o:["A sandcastle", "A treehouse"], a:0, h: "You use a bucket to make it."},
    {q: "🍦 What is sweet and very cold to eat?", o:["Hot soup", "Ice cream"], a:1, h: "It comes in flavours like chocolate and vanilla."},
    {q: "🌲 Where do you go to sleep in a tent?", o:["Camping", "Shopping"], a:0, h: "Sleeping outside in nature."},
    {q: "🚢 What do you use to travel on the sea?", o:["A train", "A boat"], a:1, h: "It floats on the water."}
];

// --- Stage 8: Speaking Contexts ---
const s8Data = [
    {
        context: "<strong>🧒 Friend:</strong> Where do you want to go on holiday?<br><strong>👦 You:</strong> I want to go to the beach to ________ in the sea. 🌊",
        options: ["🏊‍♂️ swim", "✈️ fly", "🚗 drive"],
        a: 0,
        h: "To move in the water."
    },
    {
        context: "<strong>👩‍🏫 Teacher:</strong> How do you go to school?<br><strong>👧 Student:</strong> I don't walk. I usually take the ________. 🚌",
        options: ["🚌 bus", "🎒 bag", "🏨 hotel"],
        a: 0,
        h: "A large vehicle that carries many people."
    },
    // NEW ONES ADDED BELOW
    {
        context: "<strong>🧑‍🦱 Uncle:</strong> Do you like going camping in the forest?<br><strong>👦 You:</strong> Yes! I love sleeping in a ________ at night. ⛺",
        options: ["⛺ tent", "✈️ plane", "🚌 bus"],
        a: 0,
        h: "A small house made of cloth used outside."
    },
    {
        context: "<strong>👧 Friend:</strong> What do you do on the beach?<br><strong>👦 You:</strong> I love to play in the sand and build a ________! 🏰",
        options: ["📸 photo", "🏰 sandcastle", "🗺️ map"],
        a: 1,
        h: "A little house made of sand."
    },
    {
        context: "<strong>👩 Mum:</strong> It is very hot today! What do you want to eat?<br><strong>👧 You:</strong> Can I please have some strawberry ________? 🍦",
        options: ["🍦 ice cream", "🌭 hot dog", "🍔 burger"],
        a: 0,
        h: "A very cold, sweet treat."
    }
];