const s1Data = [
    { id: "i1", t: "Hit the road", d: "To begin a journey, especially by car." },
    { id: "i2", t: "Travel light", d: "To bring very few things when you travel." },
    { id: "i3", t: "Catch some rays", d: "To sit or lie in the sun; to sunbathe." },
    { id: "i4", t: "Live out of a suitcase", d: "To travel so much that you never unpack your clothes." },
    { id: "i5", t: "A change of scenery", d: "Moving to a different place to relax or feel better." },
    { id: "i6", t: "Get away from it all", d: "To escape daily life and go somewhere relaxing." },
    { id: "i7", t: "On a shoestring", d: "Traveling with a very small amount of money." },
    { id: "i8", t: "Off the beaten track", d: "An isolated place, away from popular tourist areas." },
    { id: "i9", t: "Catch a flight", d: "To board an airplane for a trip." },
    { id: "i10", t: "Book in advance", d: "To make a reservation before you go." },
    { id: "i11", t: "Peak season", d: "The most popular and busy time of year to travel." },
    { id: "i12", t: "Tourist trap", d: "A place designed to attract tourists and take their money." },
    { id: "i13", t: "Show someone around", d: "To act as a guide for someone visiting your city." },
    { id: "i14", t: "Take time off", d: "To get permission not to go to work so you can rest." },
    { id: "i15", t: "See the sights", d: "To visit the famous and interesting places in a city." },
    { id: "i16", t: "Head off", d: "To start a journey or leave a place." },
    { id: "i17", t: "Break the journey", d: "To stop somewhere for a short time during a long trip." },
    { id: "i18", t: "Travel broadens the mind", d: "The idea that traveling helps you understand the world better." },
    { id: "i19", t: "Have itchy feet", d: "To have a strong desire to travel or move to a new place." },
    { id: "i20", t: "Stop over", d: "To stay somewhere briefly during a flight or journey." },
    { id: "i21", t: "Pack your bags", d: "To put your clothes into a suitcase to get ready to leave." },
    { id: "i22", t: "Hit the town", d: "To go out and have fun in the city center." },
    { id: "i23", t: "Catch the sun", d: "To get a tan or a sunburn from being outside." },
    { id: "i24", t: "Take a break", d: "To stop working or studying for a short time to relax." },
    { id: "i25", t: "Soak up the culture", d: "To fully experience the local lifestyle and traditions." }
];

const s2Data = [
    {w: "Trip", s: "Journey"}, 
    {w: "Baggage", s: "Luggage"}, 
    {w: "Reserve", s: "Book"}, 
    {w: "Vacation", s: "Holiday"}, 
    {w: "Gift", s: "Souvenir"},
    {w: "Location", s: "Destination"},
    {w: "Cost", s: "Price"},
    {w: "Inexpensive", s: "Cheap"},
    {w: "Stunning", s: "Beautiful"},
    {w: "Tasty", s: "Delicious"},
    {w: "Schedule", s: "Itinerary"},
    {w: "Rest", s: "Relax"},
    {w: "Discover", s: "Explore"}, 
    {w: "Coast", s: "Seaside"}, 
    {w: "Visitor", s: "Tourist"}, 
    {w: "Guesthouse", s: "Hostel"}, 
    {w: "Excursion", s: "Tour"},
    {w: "Foreign", s: "Abroad"},
    {w: "Sight", s: "Attraction"},
    {w: "Route", s: "Path"},
    {w: "View", s: "Scenery"},
    {w: "Depart", s: "Leave"},
    {w: "Arrive", s: "Reach"},
    {w: "Stay", s: "Accommodation"},
    {w: "Flight", s: "Plane trip"},
    {w: "Guidebook", s: "Manual"},
    {w: "Passenger", s: "Traveler"},
    {w: "Spectacular", s: "Amazing"},
    {w: "Customs", s: "Traditions"}
];

const s3Data = [
    {q: "We need to find some cheap ___ because hotels are too expensive.", a: "accommodation", o: ["souvenirs","accommodation","destinations"], h: "A place to live, work, or stay in."},
    {q: "The train was ___, so we had to wait at the station for two hours.", a: "delayed", o: ["booked","delayed","explored"], h: "Late or happening later than planned."},
    {q: "I bought a lovely little ___ from the market to remember my trip.", a: "souvenir", o: ["souvenir","luggage","passenger"], h: "A thing that is kept as a reminder of a person, place, or event."},
    {q: "We spent the whole day ___ in Rome and took hundreds of photos.", a: "sightseeing", o: ["relaxing","sightseeing","departing"], h: "Visiting places of interest in a particular location."},
    {q: "Please make sure your ___ is not too heavy before you go to the airport.", a: "luggage", o: ["luggage","itinerary","customs"], h: "Suitcases or other bags in which to pack personal belongings for traveling."},
    {q: "The tour guide showed us around the ___ parts of the old city.", a: "historical", o: ["historical","delicious","abroad"], h: "Connected with the past or past events."},
    {q: "You should always keep your ___ safe when you travel to another country.", a: "passport", o: ["ticket","passport","brochure"], h: "An official document issued by a government, certifying the holder's identity and citizenship."},
    {q: "My dream holiday ___ is an island with white sand and clear blue water.", a: "destination", o: ["destination","departure","journey"], h: "The place to which someone or something is going or being sent."},
    {q: "We decided to eat at a ___ restaurant to try the country's typical food.", a: "traditional", o: ["traditional", "foreign", "expensive"], h: "Existing in or as part of a tradition; long-established."},
    {q: "When we arrived at the hotel, the receptionist asked us to ___ immediately.", a: "check in", o: ["check in", "set off", "take off"], h: "To register at a hotel or airport."},
    {q: "If you want to travel in the summer, you must ___ your flights early.", a: "book", o: ["book", "delay", "explore"], h: "To reserve (accommodations, a place, etc.) or buy (a ticket) in advance."},
    {q: "The view from the top of the mountain was absolutely ___.", a: "stunning", o: ["cheap", "stunning", "delayed"], h: "Extremely impressive or attractive."},
    {q: "I love going ___ because I get to practice speaking different languages.", a: "abroad", o: ["abroad", "camping", "sightseeing"], h: "In or to a foreign country or countries."},
    {q: "The flight attendant asked all ___ to fasten their seatbelts.", a: "passengers", o: ["passengers", "tourists", "guides"], h: "A traveler on a public or private conveyance other than the driver, pilot, or crew."},
    {q: "Our train leaves from ___ number 4 at 10:30 AM.", a: "platform", o: ["platform", "gate", "customs"], h: "The raised area beside the track at a train station where you get on or off the train."},
    {q: "Before flying, you must go through security and ___ to check your bags.", a: "customs", o: ["customs", "accommodation", "departure"], h: "The place at a port, airport, or frontier where officials check incoming goods, travelers, or luggage."},
    {q: "It is a good idea to read a ___ before visiting a new city.", a: "guidebook", o: ["guidebook", "passport", "ticket"], h: "A book of information about a place, designed for the use of visitors or tourists."}
];

const s4Passages = [
    {
        text: `Last summer, my friends and I decided to go on a backpacking <strong>trip</strong> across Europe. We wanted to travel on a <strong>shoestring</strong>, so we only stayed in cheap <strong>hostels</strong> and ate street food. It was an amazing experience because we met so many interesting people. We usually <strong>set off</strong> early in the morning to <strong>explore</strong> the famous <strong>sights</strong> before the crowds arrived. <br><br> One day in Italy, our train was completely <strong>delayed</strong>, and we had to wait at the station for three hours. However, it turned out to be a great afternoon because we found a small, <strong>traditional</strong> cafe nearby and had the most <strong>delicious</strong> pizza. Traveling with just a small <strong>backpack</strong> taught me that you don't need a lot of money or luxury to have a fantastic <strong>holiday</strong>.`,
        data: [
            {q: "The friends spent a lot of money on expensive hotels during their trip.", a: "F"},
            {q: "They preferred to start their sightseeing early in the morning.", a: "T"},
            {q: "They traveled to five different countries in Europe.", a: "NG"},
            {q: "The train delay in Italy ruined their entire day.", a: "F"},
            {q: "The writer learned that traveling light and cheaply can be very enjoyable.", a: "T"}
        ]
    },
    {
        text: `When planning a holiday, it is usually a good idea to <strong>book in advance</strong>, especially if you are traveling during the <strong>peak season</strong>. If you wait until the last minute, you might find that all the good <strong>accommodation</strong> is full, and flight <strong>tickets</strong> are much more expensive. Many <strong>tourists</strong> like to plan a strict <strong>itinerary</strong> so they know exactly what they are doing every day. <br><br> However, some travelers prefer to be more flexible. They like to <strong>go off the beaten track</strong> and visit places that aren't in the standard <strong>guidebooks</strong>. While this can be more exciting, it sometimes means getting lost or struggling to find English speakers. Whether you like to plan everything or just <strong>go with the flow</strong>, the most important thing is to <strong>relax</strong> and enjoy the <strong>scenery</strong>.`,
        data: [
            {q: "Booking early is recommended when traveling during busy times of the year.", a: "T"},
            {q: "Last-minute flights are usually cheaper than booked-in-advance flights.", a: "F"},
            {q: "All tourists enjoy having a very strict and detailed daily plan.", a: "F"},
            {q: "Going off the beaten track is always completely safe and easy.", a: "NG"},
            {q: "Visiting places not listed in guidebooks can lead to communication challenges.", a: "T"}
        ]
    },
  {
    id: "passage_003",
    title: "A Trip to the Seaside",
    content: "My family loves going to the coast for our summer holidays. We always rent a small cottage near the beach. The weather is usually sunny, so we spend most of our time catching some rays or swimming in the ocean. My little brother loves building sandcastles, while my parents prefer to read books under the umbrella. In the evenings, we often walk along the promenade and buy ice cream. We rarely eat at expensive restaurants; instead, we buy fresh fish from the local market and cook it ourselves. It is always a very relaxing getaway from the noisy city.",
    vocabularyKeywords: ["coast", "cottage", "rays", "promenade", "relaxing", "getaway"],
    questions: [
      {
        type: "multiple_choice",
        question: "Where does the family stay during their holiday?",
        options: [
          "In a large hotel",
          "In a small rented house",
          "In a tent on the beach",
          "With local friends"
        ],
        answer: "In a small rented house"
      },
      {
        type: "fill_in_the_blank",
        question: "Instead of going to restaurants, the family cooks fresh ________ from the market.",
        answer: "fish"
      }
    ]
  },
  {
    id: "passage_004",
    title: "The Airport Experience",
    content: "Navigating a large international airport can be quite stressful for some passengers. First, you must join a long queue to check in your luggage and get your boarding pass. Next is the security check, where you have to take off your shoes and empty your pockets. Once you are through, you can finally relax in the departure lounge. Many people look around the duty-free shops to buy cheap perfume or souvenirs. You have to keep an eye on the screens, though, because your gate number can change or your flight might be delayed due to bad weather.",
    vocabularyKeywords: ["passengers", "queue", "luggage", "departure", "souvenirs", "delayed"],
    questions: [
      {
        type: "multiple_choice",
        question: "What should passengers do after going through security?",
        options: [
          "Check their luggage",
          "Go outside the airport",
          "Wait in the departure lounge",
          "Get their boarding pass"
        ],
        answer: "Wait in the departure lounge"
      },
      {
        type: "fill_in_the_blank",
        question: "You should watch the screens because your flight might be ________.",
        answer: "delayed"
      }
    ]
  },
    {
        text: `City breaks are becoming a very popular type of <strong>holiday</strong> for young professionals. These short trips, usually lasting just a weekend, allow people to <strong>get away from it all</strong> without taking too much <strong>time off</strong> work. Visitors often fly to a famous European capital, like Paris or Rome, and spend their time visiting <strong>museums</strong>, eating <strong>delicious</strong> food, and experiencing the nightlife. <br><br> Because time is short, tourists usually use public transport like the subway to get around quickly. They try to see all the major <strong>sights</strong> in just two days. While city breaks are very exciting and culturally rich, they can also be quite exhausting. By the time Sunday evening arrives, many travelers are completely tired and ready to <strong>head home</strong>.`,
        data: [
            {q: "City breaks are usually very long holidays that last for weeks.", a: "F"},
            {q: "Young professionals like city breaks because they don't need much time off work.", a: "T"},
            {q: "Most tourists rent cars to drive around the city during a short break.", a: "F"},
            {q: "City breaks are generally cheap because you only stay for a few days.", a: "NG"},
            {q: "Travelers often feel very rested and relaxed at the end of a city break.", a: "F"}
        ]
    },
    {
        text: `Camping is a fantastic way to enjoy nature, but it requires careful preparation. Before you <strong>set off</strong>, you must ensure you have the right equipment. A good quality tent, warm sleeping bags, and a camping stove are completely <strong>essential</strong>. Many beginners make the mistake of packing too many clothes and not enough food. <br><br> Once you arrive at the <strong>campsite</strong>, finding a flat, dry place to put your tent is the first priority. Spending the evening sitting around a campfire is wonderful, but you must remember to clean up your <strong>rubbish</strong> before you leave. Leaving trash behind is very disrespectful to the environment and the local wildlife. Ultimately, camping teaches you how to survive with just the basics.`,
        data: [
            {q: "A camping stove is considered an essential piece of equipment.", a: "T"},
            {q: "Beginners usually pack too much food for their camping trips.", a: "F"},
            {q: "You should always set up your tent on a wet, uneven surface.", a: "F"},
            {q: "Campers often enjoy spending their evenings around a fire.", a: "T"},
            {q: "It is acceptable to leave your rubbish at the campsite if there are no bins.", a: "F"}
        ]
    }
];


const s5Pairs = [
    {id:1, t:"Set off"}, {id:1, t:"To start a journey"},
    {id:2, t:"Check in"}, {id:2, t:"To register at a hotel or airport"},
    {id:3, t:"Check out"}, {id:3, t:"To pay your bill and leave a hotel"},
    {id:4, t:"Take off"}, {id:4, t:"When an airplane leaves the ground"},
    {id:5, t:"Get away"}, {id:5, t:"To go on a holiday or vacation"},
    {id:6, t:"Look around"}, {id:6, t:"To explore a new place or building"},
    {id:7, t:"Stop over"}, {id:7, t:"To stay somewhere briefly during a trip"},
    {id:8, t:"Pick up"}, {id:8, t:"To collect someone in a car"},
    {id:9, t:"Drop off"}, {id:9, t:"To take someone to a place and leave them there"},
    {id:10, t:"See off"}, {id:10, t:"To go to the airport/station to say goodbye to someone"},
    {id:11, t:"Look forward to"}, {id:11, t:"To feel excited about something that is going to happen"},
    {id:12, t:"Go away"}, {id:12, t:"To leave your home for a holiday"},
    {id:13, t:"Touch down"}, {id:13, t:"When an airplane lands on the ground"},
    {id:14, t:"Hold up"}, {id:14, t:"To cause a delay in travel"},
    {id:15, t:"Pack up"}, {id:15, t:"To put your things in bags ready to leave"},
    {id:16, t:"Show around"}, {id:16, t:"To give someone a tour of a town or building"},
    {id:17, t:"Get back"}, {id:17, t:"To return from a journey or holiday"},
    {id:18, t:"Get on"}, {id:18, t:"To board a bus, train, or plane"},
    {id:19, t:"Get off"}, {id:19, t:"To leave a bus, train, or plane"},
    {id:20, t:"Speed up"}, {id:20, t:"To travel faster in a vehicle"},
    {id:21, t:"Slow down"}, {id:21, t:"To travel more slowly in a vehicle"},
    {id:22, t:"Break down"}, {id:22, t:"When a car or bus stops working"},
    {id:23, t:"Hurry up"}, {id:23, t:"To do something more quickly so you aren't late"},
    {id:24, t:"Look out"}, {id:24, t:"To be careful or pay attention to danger"}
];

const s6Data = [
    {w: "PASSPORT", h: "You need this document to travel to another country."}, 
    {w: "SUITCASE", h: "A large bag with a handle used for carrying clothes."}, 
    {w: "AIRPORT", h: "The place where airplanes take off and land."}, 
    {w: "HOLIDAY", h: "A time of rest from work or school."}, 
    {w: "TOURIST", h: "A person who is traveling or visiting a place for pleasure."}, 
    {w: "JOURNEY", h: "The act of traveling from one place to another."}, 
    {w: "TICKET", h: "A piece of paper that gives you the right to travel on a train or plane."}, 
    {w: "LUGGAGE", h: "The bags you take with you when you travel."},
    {w: "SOUVENIR", h: "A thing you buy to remember a place you visited."},
    {w: "FLIGHT", h: "A journey made by air in an airplane."}, 
    {w: "HOTEL", h: "A building where you pay to sleep and eat while traveling."}, 
    {w: "BACKPACK", h: "A bag carried on your back, often used by students or travelers."}, 
    {w: "CAMERA", h: "A device used for taking photographs on holiday."}, 
    {w: "ABROAD", h: "In or to a foreign country."}, 
    {w: "DELAY", h: "When something happens later than planned, like a late train."}, 
    {w: "CRUISE", h: "A holiday on a large ship."},
    {w: "BOARDING", h: "The process of getting onto a plane or ship."}, 
    {w: "CUSTOMS", h: "The place at an airport where they check your bags for illegal goods."}, 
    {w: "BEACH", h: "A sandy area by the sea where people relax."}, 
    {w: "GUIDE", h: "A person who shows tourists around a place."},
    {w: "MUSEUM", h: "A building where interesting historical objects are kept."},
    {w: "HOSTEL", h: "A cheap place for young travelers to sleep."},
    {w: "CAMPING", h: "Sleeping outside in a tent for a holiday."},
    {w: "RESORT", h: "A place where many people go for a holiday, often with a pool."},
    {w: "ISLAND", h: "A piece of land completely surrounded by water."},
    {w: "SUNGLASSES", h: "Dark glasses you wear to protect your eyes from the sun."},
    {w: "BAGGAGE", h: "Another word for the suitcases you travel with."},
    {w: "ARRIVAL", h: "When a person or vehicle reaches its destination."},
    {w: "DEPARTURE", h: "When a person or vehicle leaves a place."},
    {w: "PASSENGER", h: "A person traveling in a vehicle but not driving it."}
];

const s7Data = [
    {q: "What is the phrase used when an airplane leaves the ground?", o:["Take off", "Touch down"], a:0, h: "It goes up into the sky."},
    {q: "Which word means a planned route or journey?", o:["Itinerary", "Guidebook"], a:0, h: "You usually check this schedule every day of your trip."},
    {q: "If you want to stay in a cheap place with other young travelers, you choose a...", o:["Resort", "Hostel"], a:1, h: "You usually share a room with other people."},
    {q: "When a flight is 'delayed', it means it is...", o:["Late", "Early"], a:0, h: "You have to wait longer than expected."},
    {q: "What do you call the bags you take with you on holiday?", o:["Luggage", "Souvenirs"], a:0, h: "Another word for baggage."},
    {q: "If you travel 'abroad', you are traveling...", o:["To another country", "In your own country"], a:0, h: "You need a passport to do this."},
    {q: "Which phrasal verb means to explore a new city?", o:["Look around", "Look forward to"], a:0, h: "You use your eyes to see the sights."},
    {q: "A place designed to take money from tourists is called a...", o:["Tourist trap", "Historical site"], a:0, h: "It's usually very expensive and crowded."},
    {q: "To 'book in advance' means to...", o:["Reserve early", "Read a guidebook"], a:0, h: "You do this so you don't lose your spot."},
    {q: "What do you do when you arrive at a hotel?", o:["Check in", "Check out"], a:0, h: "You get your room key."},
    {q: "If you 'travel light', you...", o:["Bring a lot of bags", "Bring very few things"], a:1, h: "Your bag is not heavy."},
    {q: "A holiday on a large ship is called a...", o:["Flight", "Cruise"], a:1, h: "It travels on the ocean."},
    {q: "What is the opposite of 'arrival'?", o:["Departure", "Destination"], a:0, h: "It means leaving a place."},
    {q: "If you 'set off' early, you...", o:["Finish a trip early", "Start a journey early"], a:1, h: "You leave the house."},
    {q: "A person who shows you the interesting places in a city is a...", o:["Passenger", "Tour guide"], a:1, h: "They know all the historical facts."},
    {q: "To 'get away from it all' means to...", o:["Escape stress and relax", "Lose your luggage"], a:0, h: "You go somewhere peaceful."},
    {q: "The most popular and busy time to travel is called...", o:["Peak season", "Low season"], a:0, h: "Prices are usually highest at this time."},
    {q: "If you want to get a tan, you might go to the beach to...", o:["Catch some rays", "Hit the road"], a:0, h: "Rays come from the sun."}
];

const s8Data = [
    {
        context: "<strong>Examiner:</strong> Do you prefer traveling by car or by train?<br><strong>Candidate:</strong> I prefer driving because you can stop wherever you want. We usually ________ early in the morning to avoid traffic.",
        options: ["check out", "set off", "touch down"],
        a: 1,
        h: "Means to start a journey."
    },
    {
        context: "<strong>Examiner:</strong> What is the worst part about flying?<br><strong>Candidate:</strong> Waiting at the airport. Sometimes the plane is ________ for hours because of bad weather.",
        options: ["delayed", "explored", "abroad"],
        a: 0,
        h: "Means happening later than planned."
    },
    {
        context: "<strong>Examiner:</strong> What kind of holidays do you enjoy?<br><strong>Candidate:</strong> I love going to the beach. I just want to relax on the sand and ________.",
        options: ["hit the town", "catch some rays", "break down"],
        a: 1,
        h: "Means to sit in the sun and get a tan."
    },
    {
        context: "<strong>Examiner:</strong> Do you like staying in big, expensive hotels?<br><strong>Candidate:</strong> Not really. I prefer traveling ________, so I usually stay in cheap hostels.",
        options: ["in advance", "on a shoestring", "off the beaten track"],
        a: 1,
        h: "Means doing something with very little money."
    },
    {
        context: "<strong>Examiner:</strong> Have you ever missed a train or flight?<br><strong>Candidate:</strong> Yes, once. I didn't ________ fast enough, and the bus left without me.",
        options: ["pack up", "slow down", "hurry up"],
        a: 2,
        h: "Means to move or do something more quickly."
    },
    {
        context: "<strong>Examiner:</strong> What do you usually do on the first day of your holiday?<br><strong>Candidate:</strong> I like to leave my bags at the hotel and just ________ the city to see what is there.",
        options: ["look around", "look out", "look forward to"],
        a: 0,
        h: "Means to explore a place."
    },
    {
        context: "<strong>Examiner:</strong> Do you usually buy things for your family when you travel?<br><strong>Candidate:</strong> Yes, I always try to find a nice ________ from the local market to bring back home.",
        options: ["itinerary", "souvenir", "luggage"],
        a: 1,
        h: "A small item you buy to remember a holiday."
    },
    {
        context: "<strong>Examiner:</strong> How do you plan your holidays?<br><strong>Candidate:</strong> I always ________ because flights get very expensive if you wait too long.",
        options: ["book in advance", "check out", "break the journey"],
        a: 0,
        h: "Means to reserve a ticket or hotel early."
    },
    {
        context: "<strong>Examiner:</strong> Do you prefer visiting famous cities or quiet places?<br><strong>Candidate:</strong> I prefer quiet places. Famous cities are often just a ________, and everything is too expensive.",
        options: ["tourist trap", "guided tour", "youth hostel"],
        a: 0,
        h: "A place designed to attract tourists and make them spend money."
    },
    {
        context: "<strong>Examiner:</strong> How did you feel when your holiday was finished?<br><strong>Candidate:</strong> I was sad, but I was also happy to ________ home and sleep in my own bed.",
        options: ["get back", "get away", "take off"],
        a: 0,
        h: "Means to return from a place."
    },
    {
        context: "<strong>Examiner:</strong> What is the most important thing to remember when packing?<br><strong>Candidate:</strong> Don't bring too many clothes. It is much easier to ________ when you are taking trains.",
        options: ["travel light", "pack your bags", "check in"],
        a: 0,
        h: "Means to travel with very few bags."
    },
    {
        context: "<strong>Examiner:</strong> Do you enjoy camping?<br><strong>Candidate:</strong> Sometimes. It's nice to ________ from the noisy city, but I prefer a real bed.",
        options: ["get away", "speed up", "see off"],
        a: 0,
        h: "Means to escape or go on a relaxing holiday."
    },
    {
        context: "<strong>Examiner:</strong> Who usually takes you to the airport?<br><strong>Candidate:</strong> My dad usually drives me. He likes to ________ and wave goodbye at the terminal.",
        options: ["pick me up", "see me off", "drop me off"],
        a: 1,
        h: "Means to go to the airport or station to say goodbye to someone."
    },
    {
        context: "<strong>Examiner:</strong> What happened on your road trip to the mountains?<br><strong>Candidate:</strong> It was a disaster! Our car ________ in the middle of nowhere, and we had to call for help.",
        options: ["broke down", "set off", "touched down"],
        a: 0,
        h: "When a vehicle stops working."
    },
    {
        context: "<strong>Examiner:</strong> Why did you choose to visit that specific museum?<br><strong>Candidate:</strong> Well, the ________ I bought said it was the most important historical site in the city.",
        options: ["guidebook", "passport", "suitcase"],
        a: 0,
        h: "A book that gives tourists information about a place."
    },
    {
        context: "<strong>Examiner:</strong> Are you excited about your upcoming trip to Japan?<br><strong>Candidate:</strong> Oh, definitely! I am really ________ trying all the amazing food there.",
        options: ["looking around", "looking forward to", "looking out"],
        a: 1,
        h: "Means to be excited about something in the future."
    },
    {
        context: "<strong>Examiner:</strong> Do you prefer traveling alone or with a group?<br><strong>Candidate:</strong> I prefer a group. We usually book a ________ so we don't have to plan everything ourselves.",
        options: ["guided tour", "youth hostel", "boarding pass"],
        a: 0,
        h: "A holiday where an expert shows you around and explains things."
    },
    {
        context: "<strong>Examiner:</strong> How do you pass the time on long flights?<br><strong>Candidate:</strong> I usually read a book or watch a movie after the plane ________.",
        options: ["takes off", "breaks down", "checks out"],
        a: 0,
        h: "When an airplane leaves the ground."
    },
    {
        context: "<strong>Examiner:</strong> Do you like visiting places that lots of other tourists visit?<br><strong>Candidate:</strong> Not really. I prefer going ________ to find small villages that are quiet and traditional.",
        options: ["off the beaten track", "on a shoestring", "abroad"],
        a: 0,
        h: "A place that is isolated and away from popular tourist areas."
    },
    {
        context: "<strong>Examiner:</strong> What is the first thing you do when you arrive at your hotel?<br><strong>Candidate:</strong> I go straight to the reception desk to ________ and get my room key.",
        options: ["check out", "check in", "stop over"],
        a: 1,
        h: "To register at a hotel."
    },
    {
        context: "<strong>Examiner:</strong> Have you ever lost anything while traveling?<br><strong>Candidate:</strong> Yes, once the airline lost my ________. I didn't have any clean clothes for three days!",
        options: ["passport", "itinerary", "luggage"],
        a: 2,
        h: "The bags you travel with."
    },
    {
        context: "<strong>Examiner:</strong> Why is summer a difficult time to travel?<br><strong>Candidate:</strong> Because it is ________. The airports are crowded and everything costs twice as much.",
        options: ["peak season", "off the beaten track", "a tourist trap"],
        a: 0,
        h: "The busiest time of year for holidays."
    },
    {
        context: "<strong>Examiner:</strong> What do you think is the best way to understand a new country?<br><strong>Candidate:</strong> You have to eat the local food and talk to the people to really ________.",
        options: ["hit the road", "soak up the culture", "catch a flight"],
        a: 1,
        h: "To fully experience the local lifestyle."
    },
    {
        context: "<strong>Examiner:</strong> When do you usually leave the hotel on your last day?<br><strong>Candidate:</strong> We usually have breakfast, pack our bags, and ________ before 11:00 AM.",
        options: ["check in", "set off", "check out"],
        a: 2,
        h: "To pay your bill and leave the hotel."
    },
    {
        context: "<strong>Examiner:</strong> How did you get to the city center from the airport?<br><strong>Candidate:</strong> We didn't want to take the bus, so we just got a taxi to ________ at our hotel.",
        options: ["drop us off", "pick us up", "see us off"],
        a: 0,
        h: "To take someone somewhere and leave them there."
    },
    {
        context: "<strong>Examiner:</strong> Have you ever traveled to another continent?<br><strong>Candidate:</strong> No, I've only traveled within Europe. But I'd love to go further ________ one day, maybe to Asia.",
        options: ["abroad", "customs", "resort"],
        a: 0,
        h: "In or to a foreign country."
    },
    {
        context: "<strong>Examiner:</strong> What happens when you arrive in a new country by plane?<br><strong>Candidate:</strong> After you get off the plane, you have to show your passport and go through ________.",
        options: ["customs", "departure", "accommodation"],
        a: 0,
        h: "The place at an airport where they check your bags and documents."
    }
];