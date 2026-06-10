const a2FlyersQuestionPool = [
    { 
        type: "multiple_choice", 
        q: "If I miss the school bus tomorrow morning, my dad ________ me to school.", 
        o: ["drives", "will drive", "would drive", "drove"], 
        a: "will drive", 
        h: "Use 'will' + verb for a real future possibility (First Conditional)." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "While I was walking to school yesterday, it suddenly ________ to rain heavily.", 
        a: "started", 
        h: "Use the past simple for a short action that interrupts a longer continuous action." 
    },
    { 
        type: "multiple_choice", 
        q: "Our school uniforms ________ in a local factory every year before the autumn term starts.", 
        o: ["are made", "is made", "were made", "make"], 
        a: "are made", 
        h: "Use the present simple passive (am/is/are + past participle) for regular facts or routines." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "If students arrive late to homeroom, the principal always ________ their parents.", 
        a: "calls", 
        h: "In zero conditional sentences, use the present simple for rules or general truths." 
    },
    { 
        type: "multiple_choice", 
        q: "If our school ________ a modern swimming pool, I would practice swimming every single day.", 
        o: ["has", "had", "will have", "would have"], 
        a: "had", 
        h: "Use the past simple in the 'if' clause for hypothetical situations (Second Conditional)." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "By the time the final bell rang, Sarah realized she ________ forgotten her science project at home.", 
        a: "had", 
        h: "Use the past perfect ('had' + past participle) for an action that happened before another past action." 
    },
    { 
        type: "multiple_choice", 
        q: "When I was in primary school, I ________ to walk to class with my older brother every morning.", 
        o: ["used", "use", "am used", "was used"], 
        a: "used", 
        h: "Use 'used to + verb' to describe past habits that don't happen anymore." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "The heavy iron school gates ________ locked by the security guard at exactly 8:30 AM.", 
        a: "are", 
        h: "Complete the present passive structure with the correct form of 'to be' for plural subjects." 
    },
    { 
        type: "multiple_choice", 
        q: "You won't pass the final chemistry exam unless you ________ your notes regularly.", 
        o: ["review", "will review", "reviewed", "would review"], 
        a: "review", 
        h: "'Unless' means 'if not' and is followed by the present simple in first conditional sentences." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "At 8:00 AM this morning, all the students ________ sitting quietly in the assembly hall.", 
        a: "were", 
        h: "Use 'were' with plural subjects to form the past continuous tense." 
    },

    // --- THEME: TRAVEL ---
    { 
        type: "multiple_choice", 
        q: "If I won a free plane ticket to any country, I ________ to Japan to see the cherry blossoms.", 
        o: ["will travel", "would travel", "traveled", "travel"], 
        a: "would travel", 
        h: "Use 'would' + verb in the main clause for an imaginary situation (Second Conditional)." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "The morning flight to London ________ delayed by the airline due to a severe thunderstorm.", 
        a: "was", 
        h: "Use the past simple passive ('was/were' + past participle) for a completed past action." 
    },
    { 
        type: "multiple_choice", 
        q: "When we finally arrived at the check-in desk, the plane ________ already departed.", 
        o: ["has", "was", "had", "did"], 
        a: "had", 
        h: "Use the past perfect to show an action was fully completed before another event in the past." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "If you pack too many heavy items in your suitcase, you ________ have to pay an extra fee.", 
        a: "will", 
        h: "Complete the first conditional main clause with the modal verb indicating a certain future result." 
    },
    { 
        type: "multiple_choice", 
        q: "While the tourists ________ taking photos of the castle, the guide explained its history.", 
        o: ["are", "were", "was", "did"], 
        a: "were", 
        h: "Use the past continuous ('were' + verb-ing) for a plural background action in progress." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "When water freezes at high atmospheric altitudes, ice ________ on the wings of airplanes.", 
        a: "forms", 
        h: "Use the present simple for scientific facts or general truths in a zero conditional sentence." 
    },
    { 
        type: "multiple_choice", 
        q: "Thousands of beautiful handmade souvenirs ________ by travelers at this local market every day.", 
        o: ["are bought", "is bought", "were bought", "buy"], 
        a: "are bought", 
        h: "The subject 'souvenirs' is plural, requiring 'are' + past participle for present passive actions." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "My family ________ to spend every summer vacation at a small cottage near the beach.", 
        a: "used", 
        h: "Complete the phrase 'used to' to describe a regular past routine that no longer happens." 
    },
    { 
        type: "multiple_choice", 
        q: "What ________ you do if you lost your passport while traveling in a foreign country?", 
        o: ["will", "would", "did", "do"], 
        a: "would", 
        h: "Form questions in the second conditional using 'would' + subject + base verb form." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "Last summer, we bought our train tickets online and ________ across Europe for three weeks.", 
        a: "traveled", 
        h: "Keep verbs parallel in the past simple tense for a sequence of completed past actions." 
    },

    // --- THEME: SOCIAL MEDIA ---
    { 
        type: "multiple_choice", 
        q: "Her viral dance video ________ by millions of people just a few hours after she posted it.", 
        o: ["was watched", "is watched", "watched", "watches"], 
        a: "was watched", 
        h: "Use the past simple passive ('was' + past participle) to show what happened to a singular object." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "If you don't adjust your privacy settings, anyone ________ be able to see your personal photos.", 
        a: "will", 
        h: "Use 'will' to predict a real, possible consequence in a first conditional sentence." 
    },
    { 
        type: "multiple_choice", 
        q: "I ________ scrolling through my feed when my phone suddenly ran out of battery.", 
        o: ["was", "were", "am", "did"], 
        a: "was", 
        h: "Use 'was' for the first-person singular past continuous to express an interrupted ongoing action." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "If I ________ a famous social media influencer, I would promote environmental charities.", 
        a: "were", 
        h: "In the second conditional, 'were' is traditionally preferred for all subjects after 'if'." 
    },
    { 
        type: "multiple_choice", 
        q: "If you double-tap a post on this app, a red heart automatically ________ on the screen.", 
        o: ["appears", "appeared", "will appear", "would appear"], 
        a: "appears", 
        h: "Use the present simple in both clauses for automatic app functions or rules (Zero Conditional)." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "Before Leo deleted his profile, he ________ downloaded all his old photos onto his laptop.", 
        a: "had", 
        h: "Use the past perfect ('had' + past participle) to show an action completed before another past event." 
    },
    { 
        type: "multiple_choice", 
        q: "Many new smartphones ________ with pre-installed social media apps these days.", 
        o: ["are sold", "were sold", "is sold", "sell"], 
        a: "are sold", 
        h: "Use the present simple passive for general, ongoing facts about plural items ('smartphones')." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "If we didn't have the internet, it ________ be much harder to stay in touch with overseas friends.", 
        a: "would", 
        h: "Complete the main clause of a second conditional sentence with 'would' for hypothetical situations." 
    },
    { 
        type: "multiple_choice", 
        q: "A few years ago, people didn't ________ to spend so many hours looking at screens.", 
        o: ["use", "used", "using", "uses"], 
        a: "use", 
        h: "After the negative helper 'didn't', the phrase for past habits drops its '-d' and becomes 'use to'." 
    },
    { 
        type: "fill_in_the_blanks", 
        q: "An offensive comment was reported on my channel, and it ________ deleted by the moderator a minute later.", 
        a: "was", 
        h: "Complete the past simple passive structure for a singular object ('it') with the past form of 'to be'." 
    }
];