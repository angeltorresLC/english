const questionBank = [
    // --- GRAMMAR & VOCABULARY WITH CONTEXT ---
    
    // 1. MCQ - Present Perfect vs Past Simple (Context: Travel)
    { 
        type: "mcq", 
        grammar: "Tenses", 
        question: "Sarah is a world traveler. She _______ to Japan three times so far, but she _______ there last year.", 
        options: ["has been / didn't go", "was / hasn't gone", "has been / hasn't gone", "went / didn't go"], 
        answer: "has been / didn't go" 
    },

    // 2. FILL_BLANKS - Conditional 1 (Context: Environment)
    { 
        type: "fill_blanks", 
        grammar: "Conditional 1", 
        question: "If we continue to use so much plastic, the oceans _______ (become) even more polluted in the future.", 
        answer: "will become" 
    },

    // 3. OPEN_CLOZE - Conditional 2 (Context: Dreams)
    { 
        type: "open_cloze", 
        grammar: "Conditional 2", 
        question: "If I _______ a famous actor, I would live in a huge mansion in Hollywood.", 
        answer: "were" 
    },

    // 4. DROPDOWN - Passive Voice (Context: Art History)
    { 
        type: "dropdown", 
        grammar: "Passive Voice", 
        question: "The Starry Night _______ painted by Vincent van Gogh in 1889.", 
        options: ["is", "was", "has been", "were"], 
        answer: "was" 
    },

    // 5. MCQ - Modals of Obligation (Context: Office Rules)
    { 
        type: "mcq", 
        grammar: "Modals", 
        question: "In this office, you _______ wear a suit, but you must look professional.", 
        options: ["mustn't", "can't", "don't have to", "shouldn't"], 
        answer: "don't have to" 
    },

    // 6. MATCHING - Phrasal Verbs (Context: Daily Life)
    { 
        type: "matching", 
        grammar: "Phrasal Verbs", 
        question: "Match the phrasal verbs used in a daily routine to their meanings:", 
        pairs: [
            { left: "Wake up", right: "Stop sleeping" },
            { left: "Look for", right: "Try to find something" },
            { left: "Run out of", right: "Have none left" }
        ]
    },

    // 7. CHECKBOX - Stative Verbs (Context: Preferences)
    { 
        type: "checkbox", 
        grammar: "Stative Verbs", 
        question: "Select ALL the verbs that are usually NOT used in the continuous form (-ing):", 
        options: ["Understand", "Watch", "Believe", "Eat", "Belong"], 
        answer: ["Understand", "Believe", "Belong"] 
    },

    // 8. TRUE_FALSE - Present Perfect (Context: Experience)
    { 
        type: "true_false", 
        grammar: "Present Perfect", 
        question: "True or False: We use the Present Perfect to talk about a specific finished time in the past (e.g., 'I have seen him yesterday').", 
        answer: "False" 
    },

    // 9. UNSCRAMBLE - Word Order (Context: Technology)
    { 
        type: "unscramble", 
        grammar: "Adverbs", 
        question: "Reconstruct the sentence about smartphone usage:", 
        words: ["rarely", "my", "I", "phone", "at", "use", "night"], 
        answer: "i rarely use my phone at night" 
    },

    // 10. WORD_FORMATION - Comparisons (Context: City Life)
    { 
        type: "word_formation", 
        grammar: "Comparisons", 
        question: "Living in the countryside is often _______ (PEACEFUL) than living in a crowded city.", 
        answer: "more peaceful" 
    },

    // --- SHORT READING COMPREHENSION ---

    // 11. MCQ - Reading (Context: Library Notice)
    { 
        type: "mcq", 
        grammar: "Reading Comp", 
        question: "NOTICE: 'Please return all books to the front desk. Books left on tables will not be checked back into the system.' What must you do with your books?", 
        options: ["Leave them on the table", "Take them home forever", "Give them to the librarian at the desk", "Throw them away"], 
        answer: "Give them to the librarian at the desk" 
    },

    // 12. TRUE_FALSE - Reading (Context: Email)
    { 
        type: "true_false", 
        grammar: "Reading Comp", 
        question: "Email: 'Hi Ben, I can't make it to the cinema tonight because I have to finish my project. Let's go on Saturday instead! - Tom' \n\nTrue or False: Tom is too busy to go to the cinema tonight.", 
        answer: "True" 
    },

    // 13. CHECKBOX - Reading (Context: Restaurant Review)
    { 
        type: "checkbox", 
        grammar: "Reading Comp", 
        question: "Review: 'The pizza was delicious and the waiters were very friendly, but the music was way too loud.' Select the POSITIVE points mentioned:", 
        options: ["The Food", "The Volume", "The Staff", "The Price"], 
        answer: ["The Food", "The Staff"] 
    },

    // --- SHORT DIALOGUES ---

    // 14. OPEN_CLOZE - Dialogue (Context: Buying a Ticket)
    { 
        type: "open_cloze", 
        grammar: "Dialogue", 
        question: "Customer: 'I'd like a ticket to London, please.' \nSeller: 'Single or return?' \nCustomer: 'Return, please. How _______ is it?'", 
        answer: "much" 
    },

    // 15. MCQ - Dialogue (Context: Asking Directions)
    { 
        type: "mcq", 
        grammar: "Dialogue", 
        question: "A: 'Excuse me, is there a post office near here?' \nB: 'Yes, _______ the first left and it's opposite the bank.'", 
        options: ["make", "take", "go", "do"], 
        answer: "take" 
    },

    // 16. UNSCRAMBLE - Dialogue (Context: Ordering Food)
    { 
        type: "unscramble", 
        grammar: "Polite Requests", 
        question: "Waitress: 'Are you ready to order?' \nCustomer: (Unscramble the reply)", 
        words: ["like", "the", "I", "would", "soup", "please"], 
        answer: "i would like the soup please" 
    },

    // --- MORE GRAMMAR & VOCABULARY ---

    // 17. OPEN_CLOZE - Relative Clauses (Context: People)
    { 
        type: "open_cloze", 
        grammar: "Relative Pronouns", 
        question: "The woman _______ lives next door is a professional chef.", 
        answer: "who" 
    },

    // 18. DROPDOWN - Future Forms (Context: Plans)
    { 
        type: "dropdown", 
        grammar: "Future Tenses", 
        question: "Look at those dark clouds! It _______ rain very soon.", 
        options: ["will", "is going to", "is", "shall"], 
        answer: "is going to" 
    },

    // 19. FILL_BLANKS - Past Continuous (Context: Witness Statement)
    { 
        type: "fill_blanks", 
        grammar: "Past Continuous", 
        question: "While I _______ (walk) home last night, I saw a strange light in the sky.", 
        answer: "was walking" 
    },

    // 20. MCQ - Vocabulary (Context: Work)
    { 
        type: "mcq", 
        grammar: "Collocations", 
        question: "My sister _______ a lot of money as a software engineer.", 
        options: ["wins", "gains", "earns", "takes"], 
        answer: "earns" 
    },

    // 21. WORD_FORMATION - Nouns (Context: Emotions)
    { 
        type: "word_formation", 
        grammar: "Word Formation", 
        question: "Health and _______ (HAPPY) are more important than expensive cars.", 
        answer: "happiness" 
    },

    // 22. OPEN_CLOZE - Prepositions (Context: Hobbies)
    { 
        type: "open_cloze", 
        grammar: "Prepositions", 
        question: "I am very interested _______ learning how to play the guitar.", 
        answer: "in" 
    },

    // 23. MCQ - Used to (Context: Childhood)
    { 
        type: "mcq", 
        grammar: "Used to", 
        question: "When I was a child, I _______ go to the beach every weekend with my family.", 
        options: ["used to", "was used to", "use to", "got used to"], 
        answer: "used to" 
    },

    // 24. MATCHING - Vocabulary (Context: Jobs)
    { 
        type: "matching", 
        grammar: "Vocab - Jobs", 
        question: "Match the job titles to their primary responsibilities:", 
        pairs: [
            { left: "Flight Attendant", right: "Looking after passengers" },
            { left: "Journalist", right: "Writing news stories" },
            { left: "Accountant", right: "Managing financial records" }
        ]
    },

    // 25. DROPDOWN - Quantity (Context: Shopping)
    { 
        type: "dropdown", 
        grammar: "Quantifiers", 
        question: "I can't bake the cake because I have _______ flour left.", 
        options: ["very little", "very few", "many", "a lot"], 
        answer: "very little" 
    },

    // 26. FILL_BLANKS - Passive Voice (Context: Manufacturing)
    { 
        type: "fill_blanks", 
        grammar: "Present Simple Passive", 
        question: "Millions of emails _______ (send) every single minute around the world.", 
        answer: "are sent" 
    },

    // 27. MCQ - Reported Speech (Context: Conversation)
    { 
        type: "mcq", 
        grammar: "Reported Speech", 
        question: "Direct: 'I am tired,' said John. \nIndirect: John said that he _______ tired.", 
        options: ["is", "was", "has been", "will be"], 
        answer: "was" 
    },

    // 28. OPEN_CLOZE - Articles (Context: Geography)
    { 
        type: "open_cloze", 
        grammar: "Articles", 
        question: "Mount Everest is _______ highest mountain in the world.", 
        answer: "the" 
    },

    // 29. WORD_FORMATION - Adjectives (Context: Personality)
    { 
        type: "word_formation", 
        grammar: "Word Formation", 
        question: "It was very _______ (CARE) of you to leave your keys in the car.", 
        answer: "careless" 
    },

    // 30. MCQ - Vocabulary (Context: Feelings)
    { 
        type: "mcq", 
        grammar: "Adjectives", 
        question: "I was so _______ when I found out I passed my exam with an A!", 
        options: ["disappointed", "exhausted", "delighted", "anxious"], 
        answer: "delighted" 
    }
];