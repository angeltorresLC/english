const questionBank = [
    // --- CONDITIONALS (0, 1, 2) ---
    { type: "mcq", grammar: "Conditional 1", question: "If you don't hurry, we _______ the start of the movie.", options: ["miss", "will miss", "would miss", "missed"], answer: "will miss" },
    { type: "open_cloze", grammar: "Conditional 2", question: "If I _______ you, I would tell the teacher the truth.", answer: "were" },
    { type: "fill_blanks", grammar: "Conditional 0", question: "If you mix red and blue, you _______ (get) purple.", answer: "get" },
    { type: "mcq", grammar: "Conditional 2", question: "Where would you live if you _______ choose any country?", options: ["can", "could", "will", "would"], answer: "could" },
    { type: "fill_blanks", grammar: "Conditional 1 (Negative)", question: "If he _______ (not/study), he will fail the exam.", answer: "does not study" },
    { type: "open_cloze", grammar: "Conditional 1", question: "I'll go to the party _______ long as you come with me.", answer: "as" },

    // --- PASSIVE VOICE (Present, Past, Perfect) ---
    { type: "fill_blanks", grammar: "Past Simple Passive", question: "The window _______ (break) by a football yesterday.", answer: "was broken" },
    { type: "mcq", grammar: "Present Simple Passive", question: "How many languages _______ in Switzerland?", options: ["speak", "are spoken", "is spoken", "are speaking"], answer: "are spoken" },
    { type: "fill_blanks", grammar: "Present Perfect Passive", question: "All the tickets for the concert _______ (sell) already.", answer: "have been sold" },
    { type: "open_cloze", grammar: "Past Simple Passive", question: "The Pyramids _______ built by the ancient Egyptians.", answer: "were" },
    { type: "mcq", grammar: "Present Simple Passive (Negative)", question: "Cell phones _______ allowed during the exam.", options: ["don't", "is not", "aren't", "not are"], answer: "aren't" },
    { type: "fill_blanks", grammar: "Past Simple Passive (Negative)", question: "The thief _______ (not/catch) by the police last night.", answer: "was not caught" },

    // --- PRESENT PERFECT vs PAST SIMPLE ---
    { type: "open_cloze", grammar: "Present Perfect", question: "Have you _______ been to New York?", answer: "ever" },
    { type: "mcq", grammar: "Past Simple", question: "I _______ my keys at home this morning.", options: ["have left", "leave", "left", "was leaving"], answer: "left" },
    { type: "fill_blanks", grammar: "Present Perfect (Negative)", question: "I _______ (not/see) that new horror movie yet.", answer: "have not seen" },
    { type: "open_cloze", grammar: "Present Perfect", question: "She has lived in this city _______ 2015.", answer: "since" },
    { type: "mcq", grammar: "Present Perfect", question: "They _______ each other for over ten years.", options: ["know", "knew", "have known", "are knowing"], answer: "have known" },

    // --- COMPARISONS ---
    { type: "word_formation", grammar: "Comparisons", question: "This is the _______ (INTERESTING) book I've ever read.", answer: "most interesting" },
    { type: "open_cloze", grammar: "Comparisons", question: "My brother is much taller _______ me.", answer: "than" },
    { type: "fill_blanks", grammar: "Comparisons", question: "Yesterday was _______ (hot) than today.", answer: "hotter" },
    { type: "mcq", grammar: "Comparisons", question: "This exercise is _______ difficult than the last one.", options: ["more", "most", "as", "very"], answer: "more" },
    { type: "word_formation", grammar: "Comparisons", question: "That was the _______ (BAD) experience of my life.", answer: "worst" },

    // --- WORD FORMATION (FCE Style) ---
    { type: "word_formation", grammar: "Word Formation", question: "The _______ (DIFFERENT) between the two cars is huge.", answer: "difference" },
    { type: "word_formation", grammar: "Word Formation", question: "You need a lot of _______ (IMAGINE) to write a book.", answer: "imagination" },
    { type: "word_formation", grammar: "Word Formation", question: "The weather was very _______ (UNPREDICT) yesterday.", answer: "unpredictable" },
    { type: "word_formation", grammar: "Word Formation", question: "He is a very _______ (HELP) person; he always helps.", answer: "helpful" },
    { type: "word_formation", grammar: "Word Formation", question: "It is _______ (LEGAL) to drive without a license.", answer: "illegal" },

    // --- OPEN CLOZE (PET/FCE Part 2 Style) ---
    { type: "open_cloze", grammar: "Articles", question: "I saw _______ amazing movie last night.", answer: "an" },
    { type: "open_cloze", grammar: "Prepositions", question: "He is really good _______ playing the guitar.", answer: "at" },
    { type: "open_cloze", grammar: "Relative Pronouns", question: "That's the house _______ I used to live.", answer: "where" },
    { type: "open_cloze", grammar: "Pronouns", question: "Does _______ know where the library is?", answer: "anyone" },
    { type: "open_cloze", grammar: "Linkers", question: "I went to bed early _______ I was very tired.", answer: "because" },

    // --- MIXED TENSES & ACTIVE VOICE ---
    { type: "mcq", grammar: "Present Simple", question: "How often _______ you go to the gym?", options: ["do", "does", "are", "is"], answer: "do" },
    { type: "fill_blanks", grammar: "Past Simple", question: "We _______ (go) to the cinema last Saturday.", answer: "went" },
    { type: "mcq", grammar: "Present Perfect", question: "She _______ her homework, so she can go out.", options: ["finished", "has finished", "finish", "is finishing"], answer: "has finished" },
    { type: "fill_blanks", grammar: "Present Simple (Negative)", question: "They _______ (not/like) eating spicy food.", answer: "do not like" },
    { type: "mcq", grammar: "Past Simple (Negative)", question: "I _______ see you at the party last night.", options: ["didn't", "don't", "wasn't", "haven't"], answer: "didn't" },

    // --- MORE PASSIVE & CONDITIONALS ---
    { type: "fill_blanks", grammar: "Present Simple Passive", question: "Paper _______ (make) from wood.", answer: "is made" },
    { type: "mcq", grammar: "Conditional 2", question: "If I won the lottery, I _______ buy a big house.", options: ["will", "can", "would", "am"], answer: "would" },
    { type: "open_cloze", grammar: "Conditional 1", question: "I will call you as _______ as I arrive.", answer: "soon" },
    { type: "fill_blanks", grammar: "Past Simple Passive", question: "The first email _______ (send) in 1971.", answer: "was sent" },

    // --- FCE MULTIPLE CHOICE CLOZE ---
    { type: "mcq", grammar: "Vocabulary", question: "I'm looking _______ to my summer holidays.", options: ["forward", "ahead", "on", "away"], answer: "forward" },
    { type: "mcq", grammar: "Collocations", question: "Can you _______ me a favor and open the door?", options: ["make", "do", "give", "get"], answer: "do" },
    { type: "mcq", grammar: "Phrasal Verbs", question: "The plane took _______ on time despite the rain.", options: ["up", "in", "off", "away"], answer: "off" },

    // --- ADDITIONAL MIXED ---
    { type: "word_formation", grammar: "Word Formation", question: "The _______ (LOSE) of the match was a surprise.", answer: "loss" },
    { type: "fill_blanks", grammar: "Present Perfect", question: "_______ you ever _______ (eat) sushi?", answer: "Have eaten" },
    { type: "open_cloze", grammar: "Relative Pronouns", question: "The woman _______ lives next door is a doctor.", answer: "who" },
    { type: "mcq", grammar: "Comparisons", question: "This is _______ far the best cake I've eaten.", options: ["by", "at", "to", "from"], answer: "by" },
    { type: "fill_blanks", grammar: "Past Simple Passive", question: "Our car _______ (repair) two days ago.", answer: "was repaired" },
    { type: "open_cloze", grammar: "Prepositions", question: "I'm afraid _______ spiders.", answer: "of" },

  // --- PRESENT SIMPLE & PERFECT (Active & Passive) ---
  {
    type: "mcq",
    grammar: "Present Simple Passive",
    question: "Many video games _______ in Japan by specialized companies.",
    options: ["are developed", "is developed", "develop", "developing"],
    answer: "are developed"
  },
  {
    type: "open_cloze",
    grammar: "Present Perfect",
    question: "I haven't finished my homework _______, so I can't go out yet.",
    answer: "yet"
  },
  {
    type: "fill_blanks",
    grammar: "Present Simple Negative",
    question: "He _______ (not / enjoy) watching romantic comedies; he prefers horror.",
    answer: "does not enjoy"
  },
  {
    type: "mcq",
    grammar: "Present Perfect Passive",
    question: "The new stadium _______ finally _______ and it looks amazing!",
    options: ["has / been completed", "is / completed", "have / completed", "was / completed"],
    answer: "has / been completed"
  },

  // --- PAST SIMPLE (Active & Passive) ---
  {
    type: "fill_blanks",
    grammar: "Past Simple",
    question: "Last night, we _______ (see) a shooting star while camping.",
    answer: "saw"
  },
  {
    type: "mcq",
    grammar: "Past Simple Passive",
    question: "The lightbulb _______ by Thomas Edison in 1879.",
    options: ["invented", "was invented", "were invented", "is invented"],
    answer: "was invented"
  },
  {
    type: "open_cloze",
    grammar: "Past Simple",
    question: "Where _______ you go on holiday last summer?",
    answer: "did"
  },

  // --- CONDITIONALS (0, 1, 2) ---
  {
    type: "mcq",
    grammar: "Conditional 0",
    question: "If you _______ water to 100°C, it boils.",
    options: ["heated", "heat", "will heat", "heats"],
    answer: "heat"
  },
  {
    type: "fill_blanks",
    grammar: "Conditional 1",
    question: "If she _______ (study) hard, she will pass the FCE exam easily.",
    answer: "studies"
  },
  {
    type: "open_cloze",
    grammar: "Conditional 2",
    question: "If I _______ you, I wouldn't post that photo on Instagram.",
    answer: "were"
  },
  {
    type: "mcq",
    grammar: "Conditional 2",
    question: "What _______ you do if you found a wallet on the street?",
    options: ["will", "would", "did", "do"],
    answer: "would"
  },

  // --- COMPARISONS ---
  {
    type: "word_formation",
    grammar: "Comparisons",
    question: "This is the _______ (bad) movie I have ever seen in my life!",
    answer: "worst"
  },
  {
    type: "fill_blanks",
    grammar: "Comparisons",
    question: "Playing football is _______ (exciting) than playing chess.",
    answer: "more exciting"
  },
  {
    type: "open_cloze",
    grammar: "Comparisons",
    question: "The blue car is not _______ fast as the red one.",
    answer: "as"
  },

  // --- WORD FORMATION (FCE Part 3 Style) ---
  {
    type: "word_formation",
    grammar: "Word Formation",
    question: "It was a very _______ (SUCCESS) party and everyone had fun.",
    answer: "successful"
  },
  {
    type: "word_formation",
    grammar: "Word Formation",
    question: "The teacher told us that _______ (HAPPY) is more important than money.",
    answer: "happiness"
  },
  {
    type: "word_formation",
    grammar: "Word Formation",
    question: "It is _______ (POSSIBLE) to finish this project in only ten minutes.",
    answer: "impossible"
  },

  // --- PASSIVE VOICE MIXED ---
  {
    type: "fill_blanks",
    grammar: "Past Simple Passive Negative",
    question: "The letters _______ (not / deliver) yesterday because of the strike.",
    answer: "were not delivered"
  },
  {
    type: "mcq",
    grammar: "Present Perfect Active",
    question: "_______ you _______ your breakfast already?",
    options: ["Have / eaten", "Did / eat", "Has / eaten", "Do / eat"],
    answer: "Have / eaten"
  },

  // --- FCE OPEN CLOZE (Part 2 Style) ---
  {
    type: "open_cloze",
    grammar: "Prepositions",
    question: "Are you interested _______ learning how to code websites?",
    answer: "in"
  },
  {
    type: "open_cloze",
    grammar: "Relative Pronouns",
    question: "That is the boy _______ won the gaming tournament last week.",
    answer: "who"
  }
  ,
  {
    type: "mcq",
    grammar: "Present Perfect",
    question: "I _______ (never/be) to Paris before, but I'd love to go.",
    options: ["never was", "have never been", "had never been", "am never being"],
    answer: "have never been"
  },
  {
    type: "open_cloze",
    grammar: "Conditionals 2",
    question: "If I _______ (have) a million dollars, I would buy a private island.",
    answer: "had"
  },
  {
    type: "word_formation",
    grammar: "Comparisons",
    question: "This laptop is significantly _______ (expensive) than the one I bought last year.",
    answer: "more expensive"
  },
  {
    type: "fill_blanks",
    grammar: "Passive Voice",
    question: "The Mona Lisa _______ (paint) by Leonardo da Vinci in the 16th century.",
    answer: "was painted"
  },
  {
    type: "mcq",
    grammar: "Conditionals 1",
    question: "If it rains tomorrow, we _______ the football match.",
    options: ["would cancel", "will cancel", "canceled", "have canceled"],
    answer: "will cancel"
  },
    // TYPE: "mcq" -> Renders as Radio Buttons (Multiple Choice)
    { 
        type: "mcq", 
        grammar: "Conditionals", 
        question: "If I _______ more time, I would travel the world.", 
        options: ["have", "had", "will have", "would have"], 
        answer: "had" 
    },
    // TYPE: "dropdown" -> Renders as a Select Menu
    { 
        type: "dropdown", 
        grammar: "Passive Voice", 
        question: "The light bulb _______ invented by Thomas Edison.", 
        options: ["is", "was", "were", "has"], 
        answer: "was" 
    },
    // TYPE: "open_cloze" -> Renders as a Text Input
    { 
        type: "open_cloze", 
        grammar: "Prepositions", 
        question: "I am interested _______ learning new languages.", 
        answer: "in" 
    },
    { 
        type: "dropdown", 
        grammar: "Relative Clauses", 
        question: "The man _______ lives next door is a pilot.", 
        options: ["who", "which", "whose", "whom"], 
        answer: "who" 
    },
    { 
        type: "dropdown", 
        grammar: "Modals", 
        question: "You _______ smoke in the hospital; it's forbidden.", 
        options: ["can't", "mustn't", "shouldn't", "don't have to"], 
        answer: "mustn't" 
    },
    
    
    // Keep your other types too!
    { type: "dropdown", grammar: "Modals", question: "You _______ smoke here.", options: ["can't", "mustn't", "shouldn't"], answer: "mustn't" },
    { type: "open_cloze", grammar: "Prepositions", question: "I am interested _______ art.", answer: "in" },
    
  
    // 1. TEXT INPUT (Open Cloze)
    { 
        type: "open_cloze", 
        grammar: "Prepositions", 
        question: "She is very interested _______ marine biology.", 
        answer: "in" 
    },
    // 2. RADIO BUTTONS (Multiple Choice)
    { 
        type: "mcq", 
        grammar: "Conditionals", 
        question: "If I _______ more time, I would explore the ocean.", 
        options: ["have", "had", "will have", "would have"], 
        answer: "had" 
    },
    // 3. DROPDOWN MENU
    { 
        type: "dropdown", 
        grammar: "Passive Voice", 
        question: "The submarine _______ built in 1995.", 
        options: ["is", "was", "has been", "were"], 
        answer: "was" 
    },
    // 4. MATCHING (Multiple Dropdowns)
    { 
        type: "matching", 
        grammar: "Phrasal Verbs", 
        question: "Match the phrasal verbs to their correct meanings:", 
        pairs: [
            { left: "Give up", right: "Stop trying" },
            { left: "Look after", right: "Take care of" },
            { left: "Bring up", right: "Mention a topic" }
        ]
    },
    // 5. CHECKBOXES (Select All That Apply - Answer is an Array)
    { 
        type: "checkbox", 
        grammar: "Stative Verbs", 
        question: "Select ALL the stative (non-action) verbs below:", 
        options: ["Believe", "Run", "Know", "Jump", "Belong"], 
        answer: ["Believe", "Know", "Belong"] 
    },
    // 6. TRUE / FALSE
    { 
        type: "true_false", 
        grammar: "Present Perfect", 
        question: "True or False: We use 'since' with a specific point in time (e.g., since 2010).", 
        answer: "True" 
    },
// 7. SENTENCE UNSCRAMBLE
    { 
        type: "unscramble", 
        grammar: "Word Order", 
        question: "Reconstruct the data fragment into a logical sentence:", 
        words: ["always", "ocean", "the", "cold", "is", "deep"], 
        answer: "the deep ocean is always cold" 
    },
    { 
        type: "unscramble", 
        grammar: "Adverb Placement", 
        question: "Reconstruct the data fragment into a logical sentence:", 
        words: ["seen", "I", "a", "never", "have", "whale", "blue"], 
        answer: "i have never seen a blue whale" 
    }
];

