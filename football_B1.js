const questions = [
    // --- SCHOOL ---
    { topic: "Past Perfect", q: "By the time the science teacher arrived, the students ___ the experiment.", hint: "Action completed before another action in the past.", options: ["had finished", "finished", "have finished", "were finishing"], ans: "had finished" },
    { topic: "Causative Form", q: "During the summer break, the principal ___ the school cafeteria completely renovated.", hint: "Arranging for someone else to do something (have/get something done).", options: ["had", "did", "made", "took"], ans: "had" },
    { topic: "Passive Voice", q: "The final exams ___ by external examiners next week.", hint: "Future passive using 'will'.", options: ["will be marked", "are marked", "will mark", "have marked"], ans: "will be marked" },
    { topic: "Relative Clauses", q: "The biology laboratory is the quiet place ___ we usually work on our projects.", hint: "Relative pronoun for a place.", options: ["where", "which", "that", "who"], ans: "where" },
    { topic: "Articles", q: "She is studying very hard because she wants to become ___ engineer.", hint: "Article used before a singular noun starting with a vowel sound.", options: ["an", "a", "the", "no article"], ans: "an" },

    // --- TRAVEL ---
    { topic: "Past Perfect", q: "We missed our flight because the taxi ___ down on the way to the airport.", hint: "Past perfect for the earlier of two past actions.", options: ["had broken", "broke", "has broken", "was breaking"], ans: "had broken" },
    { topic: "Causative Form", q: "Before our trip to Japan, we needed to ___ our visas processed by the embassy.", hint: "Using 'get' for arranging a service.", options: ["get", "make", "do", "let"], ans: "get" },
    { topic: "Passive Voice", q: "Our connecting flight to Paris ___ due to a heavy winter snowstorm.", hint: "Past simple passive.", options: ["was delayed", "delayed", "has delayed", "is delaying"], ans: "was delayed" },
    { topic: "Relative Clauses", q: "The local tour guide, ___ has visited over 50 countries, gave us excellent advice.", hint: "Relative pronoun for a person.", options: ["who", "which", "whose", "whom"], ans: "who" },
    { topic: "Articles", q: "We went to the top of ___ Eiffel Tower on our first evening in France.", hint: "Definite article for specific, unique landmarks.", options: ["the", "a", "an", "no article"], ans: "the" },

    // --- SOCIAL MEDIA ---
    { topic: "Past Perfect", q: "She ___ her profile picture before she posted the new status update.", hint: "An action completed prior to posting.", options: ["had changed", "changed", "changes", "has changed"], ans: "had changed" },
    { topic: "Causative Form", q: "My smartphone screen is cracked, so I am going to ___ it repaired tomorrow.", hint: "Arranging a repair service.", options: ["have", "do", "fix", "make"], ans: "have" },
    { topic: "Passive Voice", q: "The viral dance challenge ___ by millions of teenagers in just one weekend.", hint: "Past simple passive for a completed event.", options: ["was watched", "watched", "were watched", "has watched"], ans: "was watched" },
    { topic: "Relative Clauses", q: "That is the famous travel influencer ___ account was hacked last week.", hint: "Relative pronoun showing possession.", options: ["whose", "who", "whom", "which"], ans: "whose" },
    { topic: "Articles", q: "Spending too much time scrolling on ___ internet can negatively affect your sleep.", hint: "Definite article for a unique global system.", options: ["the", "an", "a", "no article"], ans: "the" },

    // --- ARTIFICIAL WORLD (TECH & AI) ---
    { topic: "Past Perfect", q: "Before modern artificial intelligence became popular, scientists ___ on neural networks for decades.", hint: "Past perfect to show a long process before a past event.", options: ["had worked", "worked", "have worked", "work"], ans: "had worked" },
    { topic: "Causative Form", q: "The tech company ___ its new virtual reality software tested by professional gamers.", hint: "Causative past tense.", options: ["had", "let", "did", "caused"], ans: "had" },
    { topic: "Passive Voice", q: "Experts predict that many routine factory jobs ___ by robots in the near future.", hint: "Future passive prediction.", options: ["will be replaced", "will replace", "are replacing", "replaced"], ans: "will be replaced" },
    { topic: "Relative Clauses", q: "Virtual reality is a technology ___ allows users to experience computer-generated environments.", hint: "Relative pronoun for a thing.", options: ["that", "who", "where", "whom"], ans: "that" },
    { topic: "Articles", q: "He bought ___ new smart watch to track his heart rate and daily steps.", hint: "Indefinite article for a singular, non-specific item introduced for the first time.", options: ["a", "an", "the", "no article"], ans: "a" },

    // --- NATURAL WORLD ---
    { topic: "Past Perfect", q: "The local river was completely dry because it ___ for several months.", hint: "Past perfect negative.", options: ["had not rained", "did not rain", "has not rained", "was not raining"], ans: "had not rained" },
    { topic: "Causative Form", q: "The environmental charity ___ hundreds of trees planted along the polluted highway.", hint: "Organizing an environmental action.", options: ["got", "made", "let", "did"], ans: "got" },
    { topic: "Passive Voice", q: "Unfortunately, many endangered animal species ___ by climate change and deforestation today.", hint: "Present simple passive for a current, ongoing reality.", options: ["are threatened", "threaten", "were threatened", "have threatened"], ans: "are threatened" },
    { topic: "Relative Clauses", q: "The Amazon rainforest, ___ is the largest in the world, produces a massive amount of our oxygen.", hint: "Non-defining relative clause pronoun for a thing.", options: ["which", "that", "where", "who"], ans: "which" },
    { topic: "Articles", q: "Global warming is causing the ancient ice in ___ Antarctica to melt quickly.", hint: "Article rule for continents.", options: ["no article", "the", "a", "an"], ans: "no article" },
    { topic: "Past Perfect", q: "Before the final bell rang, the students ___ their history essays.", hint: "An action completed before a specific time in the past.", options: ["had submitted", "submitted", "have submitted", "were submitting"], ans: "had submitted" },
    { topic: "Passive Voice", q: "The new library books ___ by the librarian every Friday afternoon.", hint: "Present simple passive for a routine action.", options: ["are organized", "organized", "were organized", "have organized"], ans: "are organized" },
    { topic: "Articles", q: "He is studying hard because he wants to become ___ university professor.", hint: "Indefinite article before a consonant sound (starts with a 'y' sound).", options: ["a", "an", "the", "no article"], ans: "a" },
    { topic: "Past Perfect", q: "The teacher realized that she ___ to bring the printed worksheets to class.", hint: "A past action happening before another past action.", options: ["had forgotten", "forgot", "has forgotten", "was forgetting"], ans: "had forgotten" },

    // --- TRAVEL ---
    { topic: "Past Perfect", q: "When we finally reached the station, the express train ___ already.", hint: "Past perfect with the adverb 'already'.", options: ["had left", "left", "has left", "was leaving"], ans: "had left" },
    { topic: "Passive Voice", q: "Our passports ___ by the security officer at the border crossing yesterday.", hint: "Past simple passive.", options: ["were checked", "checked", "are checked", "have checked"], ans: "were checked" },
    { topic: "Articles", q: "We spent our summer holiday sailing across ___ Mediterranean Sea.", hint: "Definite article used for bodies of water.", options: ["the", "a", "an", "no article"], ans: "the" },
    { topic: "Passive Voice", q: "Flight tickets to that island ___ months in advance to get a good price.", hint: "Present simple passive for a general truth.", options: ["are usually booked", "usually book", "were usually booked", "have usually booked"], ans: "are usually booked" },

    // --- SOCIAL MEDIA ---
    { topic: "Past Perfect", q: "He ___ his old profile before the new app became popular.", hint: "Action completed before a past event.", options: ["had deleted", "deleted", "has deleted", "was deleting"], ans: "had deleted" },
    { topic: "Passive Voice", q: "Millions of digital messages ___ on this chatting platform every single day.", hint: "Present simple passive for daily routines.", options: ["are sent", "sent", "are sending", "were sent"], ans: "are sent" },
    { topic: "Articles", q: "She posted a beautiful photo of ___ moon on her timeline last night.", hint: "Definite article for unique objects in nature.", options: ["the", "a", "an", "no article"], ans: "the" },
    { topic: "Past Perfect", q: "I ___ the notification until my friend texted me about it.", hint: "Negative past perfect.", options: ["had not seen", "did not see", "have not seen", "was not seeing"], ans: "had not seen" },

    // --- ARTIFICIAL WORLD (TECH & AI) ---
    { topic: "Past Perfect", q: "The programmer ___ the main bug before the software was officially released.", hint: "Action finished prior to release.", options: ["had fixed", "fixed", "has fixed", "was fixing"], ans: "had fixed" },
    { topic: "Passive Voice", q: "Complex data calculations ___ by the supercomputer in just a few seconds.", hint: "Present simple passive.", options: ["are performed", "perform", "are performing", "have performed"], ans: "are performed" },
    { topic: "Articles", q: "My brother bought ___ virtual reality headset to play the newest video games.", hint: "Indefinite article for a non-specific singular item.", options: ["a", "an", "the", "no article"], ans: "a" },
    { topic: "Passive Voice", q: "The new smart city project ___ by an international tech company last year.", hint: "Past simple passive.", options: ["was designed", "designed", "has designed", "is designed"], ans: "was designed" },

    // --- NATURAL WORLD ---
    { topic: "Past Perfect", q: "The explorers ___ out of water before they finally found the hidden oasis.", hint: "Past perfect for a sequence of events.", options: ["had run", "ran", "have run", "were running"], ans: "had run" },
    { topic: "Passive Voice", q: "The delicate coral reefs ___ by rising ocean temperatures.", hint: "Present simple passive.", options: ["are damaged", "damage", "damaged", "have damaged"], ans: "are damaged" },
    { topic: "Articles", q: "Climbing ___ Mount Everest is extremely dangerous due to the harsh weather.", hint: "Article rule for individual mountains.", options: ["no article", "the", "a", "an"], ans: "no article" },
    { topic: "Past Perfect", q: "The forest fire stopped spreading because it ___ heavily the night before.", hint: "The reason for a past event, expressed in the past perfect.", options: ["had rained", "rained", "has rained", "was raining"], ans: "had rained" }
];