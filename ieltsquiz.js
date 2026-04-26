const questionBank = [
    {
        type: "mcq",
        grammar: "Reading Strategy",
        question: "What is the primary purpose of 'skimming' a text in the Reading section?",
        options: [
            "To find a specific date or name",
            "To get the general idea or gist",
            "To understand detailed arguments",
            "To check for grammar mistakes"
        ],
        answer: "To get the general idea or gist"
    },
    {
        type: "true_false",
        grammar: "Reading Strategy",
        question: "You should read every single word in the Reading section to make sure you find the correct answers.",
        answer: "False"
    },
    {
        type: "dropdown",
        grammar: "Listening Strategy",
        question: "Before the audio starts in the Listening test, what is the most important thing to do?",
        options: [
            "Rest your eyes",
            "Read and predict the answers",
            "Write down vocabulary words",
            "Listen to the room noise"
        ],
        answer: "Read and predict the answers"
    },
    {
        type: "checkbox",
        grammar: "Writing Task 1",
        question: "Which of the following are essential components of an Academic Writing Task 1 response? (Select all that apply)",
        options: [
            "A clear overview",
            "Your personal opinion",
            "Data to support key features",
            "A concluding summary of your feelings"
        ],
        answer: ["A clear overview", "Data to support key features"]
    },
    {
        type: "mcq",
        grammar: "Speaking Part 1",
        question: "If you make a minor grammar mistake while speaking, what is the best strategy?",
        options: [
            "Stop and apologize to the examiner",
            "Keep speaking smoothly to maintain fluency",
            "Ask to start the whole exam over",
            "Translate the sentence to your native language"
        ],
        answer: "Keep speaking smoothly to maintain fluency"
    },
    {
        type: "text",
        grammar: "Listening Strategy",
        question: "If you completely miss an answer in the listening test, what two words describe the best action to take? (Hint: m___ o_)",
        answer: "move on"
    },
    {
        type: "unscramble",
        grammar: "General Strategy",
        question: "Unscramble the golden rule for ALL IELTS sections:",
        words: ["carefully", "always", "the", "read", "instructions"],
        answer: "always read the instructions carefully"
    },
    {
        type: "dropdown",
        grammar: "Writing Task 2",
        question: "A good body paragraph in Writing Task 2 should always begin with a ________.",
        options: [
            "Statistic",
            "Hook",
            "Topic sentence",
            "Rhetorical question"
        ],
        answer: "Topic sentence"
    },
    {
        type: "true_false",
        grammar: "Speaking Strategy",
        question: "Memorizing full answers is a great way to get a high score in the Speaking test.",
        answer: "False"
    },
    {
        type: "matching",
        grammar: "Reading Question Types",
        question: "Match the reading strategy to the specific question type:",
        pairs: [
            { left: "True/False/Not Given", right: "Identify facts vs missing info" },
            { left: "Heading Matching", right: "Identify the main idea of a paragraph" },
            { left: "Sentence Completion", right: "Scan for specific words in the text" }
        ],
        answer: "Matches"
    },
    {
        type: "mcq",
        grammar: "Listening Distractors",
        question: "In the Listening test, speakers often correct themselves or change their minds. This trap is known as a:",
        options: [
            "Distractor",
            "Synonym",
            "Hook",
            "Signpost"
        ],
        answer: "Distractor"
    },
    {
        type: "unscramble",
        grammar: "Writing Strategy",
        question: "Unscramble this crucial advice for Writing Task 2:",
        words: ["plan", "writing", "before", "your", "essay"],
        answer: "plan your essay before writing"
    },
    {
        type: "dropdown",
        grammar: "Speaking Strategy",
        question: "If you don't understand a question in Speaking Part 3, you should:",
        options: [
            "Say 'I don't know' and stay silent",
            "Ask the examiner to rephrase or explain it",
            "Change the subject completely",
            "Guess wildly without context"
        ],
        answer: "Ask the examiner to rephrase or explain it"
    },
    {
        type: "checkbox",
        grammar: "Reading: TFNG",
        question: "When answering 'Not Given' in the Reading test, what does it mean? (Select all that apply)",
        options: [
            "The information is completely missing",
            "The statement directly contradicts the text",
            "It is impossible to know based ONLY on the text",
            "The author implies it but doesn't state it as fact"
        ],
        answer: ["The information is completely missing", "It is impossible to know based ONLY on the text"]
    },
    {
        type: "true_false",
        grammar: "Listening Strategy",
        question: "Spelling and grammar mistakes in your Listening answer sheet will lower your score.",
        answer: "True"
    },
    {
        type: "mcq",
        grammar: "Writing Word Count",
        question: "What is the recommended minimum word count for Writing Task 1 and Task 2 respectively?",
        options: [
            "100 and 200",
            "150 and 250",
            "200 and 300",
            "There is no minimum"
        ],
        answer: "150 and 250"
    },
    {
        type: "text",
        grammar: "Reading Strategy",
        question: "What 'S-word' means reading a text very quickly to find specific details like numbers, names, or dates?",
        answer: "scanning"
    },
    {
        type: "mcq",
        grammar: "Speaking Part 2",
        question: "How long are you expected to speak in Part 2 of the Speaking test (the long turn)?",
        options: [
            "30 to 60 seconds",
            "1 to 2 minutes",
            "3 to 4 minutes",
            "Until the examiner stops you"
        ],
        answer: "1 to 2 minutes"
    },
    {
        type: "dropdown",
        grammar: "Listening Rules",
        question: "How many times will you hear the recording in the IELTS Listening test?",
        options: [
            "Once",
            "Twice",
            "Three times",
            "As many times as you request"
        ],
        answer: "Once"
    },
    {
        type: "checkbox",
        grammar: "Writing Cohesion",
        question: "Which of the following are good linking words to add 'contrasting' information? (Select all that apply)",
        options: [
            "Furthermore",
            "However",
            "In addition",
            "On the other hand"
        ],
        answer: ["However", "On the other hand"]
    },
    {
        type: "true_false",
        grammar: "Speaking Strategy",
        question: "In the Speaking test, you will lose points if your personal opinion differs from the examiner's.",
        answer: "False"
    },
    {
        type: "unscramble",
        grammar: "Time Management",
        question: "Unscramble this golden time management rule:",
        words: ["time", "on", "spend", "much", "too", "do", "one", "question", "not"],
        answer: "do not spend too much time on one question"
    },
    {
        type: "matching",
        grammar: "General Vocabulary",
        question: "Match the IELTS grading criteria to its meaning:",
        pairs: [
            { left: "Lexical Resource", right: "Vocabulary and word choice" },
            { left: "Coherence", right: "Logical flow of ideas" },
            { left: "Fluency", right: "Speaking smoothly without hesitation" }
        ],
        answer: "Matches"
    },
    {
        type: "dropdown",
        grammar: "Writing Task 2",
        question: "The conclusion of Writing Task 2 should NEVER ________.",
        options: [
            "Summarize your main points",
            "Restate your thesis",
            "Introduce completely new ideas",
            "Be written clearly"
        ],
        answer: "Introduce completely new ideas"
    },
    {
        type: "mcq",
        grammar: "Reading Strategy",
        question: "When you see an unknown word in the Reading passage, what is the best strategy?",
        options: [
            "Panic and give up",
            "Use the surrounding context to guess its meaning",
            "Leave the entire section blank",
            "Spend 5 minutes trying to translate it"
        ],
        answer: "Use the surrounding context to guess its meaning"
    }
];