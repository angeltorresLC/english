const s1Data = [
    { id: "i1", t: "A drop in the ocean", d: "A very small amount compared to what is needed." },
    { id: "i2", t: "A blessing in disguise", d: "A good thing that seemed bad at first." },
    { id: "i3", t: "Boils down to", d: "The essential or most important reason is..." },
    { id: "i4", t: "Running on fumes", d: "Operating with almost zero energy or resources left." },
    { id: "i5", t: "Foot the bill", d: "To pay for everything, especially something expensive." },
    { id: "i6", t: "Take with a pinch of salt", d: "To not completely believe something that you are told." },
    { id: "i7", t: "Learn the ropes", d: "To learn the basics of how to do a job or task." },
    { id: "i8", t: "Off the beaten track", d: "An isolated place, away from where people usually go." },
    { id: "i9", t: "Brush up on", d: "To improve your knowledge or skill in something." },
    { id: "i10", t: "Turn a blind eye", d: "To ignore something that you know is wrong." },
    { id: "i11", t: "A grey area", d: "An unclear situation that does not have strict rules." },
    { id: "i12", t: "Weigh up the pros and cons", d: "To consider the advantages and disadvantages." },
    { id: "i13", t: "Beat around the bush", d: "To avoid talking about what is important." },
    { id: "i14", t: "Bite the bullet", d: "To force yourself to do something unpleasant or difficult." },
    { id: "i15", t: "The elephant in the room", d: "An obvious problem that people do not want to talk about." },
    { id: "i16", t: "Cutting edge", d: "The most modern stage of development in a particular type of work." },
    { id: "i17", t: "Devil's advocate", d: "To pretend to disagree with someone in order to start an argument." },
    { id: "i18", t: "Miss the boat", d: "To lose an opportunity to do something by being slow to act." },
    { id: "i19", t: "By the skin of your teeth", d: "To only just succeed in doing something." },
    { id: "i20", t: "A double-edged sword", d: "Something that has both positive and negative consequences." },
    { id: "i21", t: "See eye to eye", d: "To completely agree with someone." },
    { id: "i22", t: "Tip of the iceberg", d: "A small, visible part of a much larger problem." },
    { id: "i23", t: "Cost an arm and a leg", d: "To be extremely expensive." },
    { id: "i24", t: "Jump on the bandwagon", d: "To join a popular trend or activity." },
    { id: "i25", t: "Once in a blue moon", d: "Something that happens very rarely." }
];

const s2Data = [
    {w: "Pristine", s: "Unspoiled"}, 
    {w: "Lucrative", s: "Profitable"}, 
    {w: "Pragmatic", s: "Practical"}, 
    {w: "Pervasive", s: "Ubiquitous"}, 
    {w: "Exhilarating", s: "Thrilling"},
    {w: "Detrimental", s: "Harmful"},
    {w: "Indispensable", s: "Crucial"},
    {w: "Alleviate", s: "Mitigate"},
    {w: "Inevitable", s: "Unavoidable"},
    {w: "Ambiguous", s: "Unclear"},
    {w: "Trivial", s: "Insignificant"},
    {w: "Profound", s: "Deep"},
    {w: "Ameliorate", s: "Improve"}, 
    {w: "Exacerbate", s: "Worsen"}, 
    {w: "Meticulous", s: "Careful"}, 
    {w: "Obsolete", s: "Outdated"}, 
    {w: "Ephemeral", s: "Fleeting"},
    {w: "Prolific", s: "Productive"},
    {w: "Viable", s: "Feasible"},
    {w: "Substantiate", s: "Prove"},
    {w: "Fluctuate", s: "Vary"},
    {w: "Unprecedented", s: "Unparalleled"},
    {w: "Abundant", s: "Plentiful"},
    {w: "Cognitive", s: "Mental"},
    {w: "Adept", s: "Skillful"},
    {w: "Clandestine", s: "Secret"},
    {w: "Conundrum", s: "Dilemma"},
    {w: "Elucidate", s: "Explain"},
    {w: "Impeccable", s: "Flawless"}
];

// --- STAGE 3: Added Hints (h) ---
const s3Data = [
    {q: "The news outlet tried to ___ the minor crash to get more clicks.", a: "sensationalize", o: ["scrutinize","sensationalize","incentivize"], h: "To present information in an exaggerated way to provoke public interest."},
    {q: "Urban ___ is a major issue for commuters travelling to the city center.", a: "gridlock", o: ["itinerary","gridlock","remuneration"], h: "A severe traffic jam where no vehicles can move."},
    {q: "Climbing to the highest rank in the industry is a grueling and ___ task.", a: "arduous", o: ["arduous","lucrative","impartial"], h: "Involving or requiring strenuous effort; difficult and tiring."},
    {q: "Judges must remain ___ when scoring international teams.", a: "impartial", o: ["pervasive","impartial","frivolous"], h: "Treating all rivals or disputants equally; fair and just."},
    {q: "Spending excessive amounts on cosmetic items is a ___ habit.", a: "frivolous", o: ["frivolous","pragmatic","pervasive"], h: "Not having any serious purpose or value."},
    {q: "The government must implement strict measures to ___ the housing crisis.", a: "tackle", o: ["tackle","provoke","succumb"], h: "To make determined efforts to deal with a problem."},
    {q: "There is a ___ difference between the traditional and modern approaches.", a: "fundamental", o: ["trivial","fundamental","superficial"], h: "Forming a necessary base or core; of central importance."},
    {q: "Technology has completely ___ the way we communicate globally.", a: "revolutionized", o: ["diminished","revolutionized","stagnated"], h: "To change something radically or fundamentally."},
    {q: "The graph illustrates that the crime rate ___ wildly between 2010 and 2015.", a: "fluctuated", o: ["fluctuated", "stagnated", "ameliorated"], h: "To rise and fall irregularly in number or amount."},
    {q: "It is ___ that governments take immediate action against climate change.", a: "imperative", o: ["imperative", "trivial", "frivolous"], h: "Of vital importance; crucial."},
    {q: "The researcher provided ample evidence to ___ her controversial hypothesis.", a: "substantiate", o: ["substantiate", "mitigate", "exacerbate"], h: "To provide evidence to support or prove the truth of."},
    {q: "A sedentary lifestyle has a highly ___ impact on long-term cardiovascular health.", a: "detrimental", o: ["lucrative", "detrimental", "prolific"], h: "Tending to cause harm."},
    {q: "___ the clear advantages of remote work, some managers still prefer in-office teams.", a: "Notwithstanding", o: ["Furthermore", "Consequently", "Notwithstanding"], h: "In spite of; although."},
    {q: "The invention of the smartphone was a major ___ shift in human communication.", a: "paradigm", o: ["paradigm", "hindrance", "catalyst"], h: "A typical example, pattern, or model of something."},
    {q: "Many traditional farming methods have been rendered ___ by modern machinery.", a: "obsolete", o: ["pervasive", "obsolete", "pragmatic"], h: "No longer produced or used; out of date."},
    {q: "The sudden tax increase will inevitably ___ the current economic recession.", a: "exacerbate", o: ["ameliorate", "exacerbate", "alleviate"], h: "To make a bad situation worse."},
    {q: "Her ___ attention to detail ensured the project was completed flawlessly.", a: "meticulous", o: ["ephemeral", "trivial", "meticulous"], h: "Showing great attention to detail; very careful and precise."}
];

const s4Passages = [
    {
        text: `For many teenagers, the transition from casual gaming to competitive sports is an <strong>arduous</strong> journey. Moving away from a <strong>frivolous</strong> hobbyist mindset, aspiring players must adopt a <strong>pragmatic</strong> approach to their training itinerary. The sports industry has become highly <strong>lucrative</strong>, but getting noticed requires players to navigate a <strong>pervasive</strong> social media landscape. Rather than remaining in an <strong>echo chamber</strong> of their own fans, players must <strong>scrutinize</strong> strategies from international teams. <br><br> Tournaments often take teams completely <strong>off the beaten track</strong>. However, hitting the road is sometimes overshadowed by logistical nightmares, such as urban <strong>gridlock</strong>. When a team finally arrives, often <strong>running on fumes</strong>, they must perform instantly. Moreover, acquiring the best hardware can <strong>cost an arm and a leg</strong>. Unless a player secures a major sponsor to <strong>foot the bill</strong>, the financial burden makes it difficult to <strong>make ends meet</strong>. Despite the <strong>detrimental</strong> impact on their sleep schedule, the experience remains thoroughly <strong>exhilarating</strong>.`,
        data: [
            {q: "Sports players need a practical and realistic approach to their training.", a: "T"},
            {q: "Players should only listen to the opinions and praises of their own fans.", a: "F"},
            {q: "Tournaments always take place in major, well-known capital cities.", a: "NG"},
            {q: "Acquiring top-tier competitive hardware is extremely expensive.", a: "T"},
            {q: "A lack of sleep generally improves the reaction times of sports players.", a: "F"}
        ]
    },
    {
        text: `Urbanization in the 21st century has brought about a <strong>paradigm</strong> shift in architectural design. City planners are now forced to be more <strong>conscientious</strong> about sustainable development. Historically, the expansion of megacities led to the <strong>obsolete</strong> practice of clearing green spaces, which severely <strong>exacerbated</strong> urban heating. Today, the integration of vertical gardens is becoming <strong>ubiquitous</strong> in metropolitan centers. These installations act as a <strong>catalyst</strong> for cleaner air, helping to <strong>mitigate</strong> the heavy smog generated by urban <strong>gridlock</strong>. <br><br> Furthermore, governments are offering <strong>lucrative</strong> tax incentives to entrepreneurs who pioneer eco-friendly materials. <strong>Notwithstanding</strong> these benefits, the initial cost of implementing such technologies remains a significant <strong>hindrance</strong>. For many developing nations, securing the budget to <strong>substantiate</strong> these massive infrastructure overhauls is a daunting <strong>conundrum</strong>. While the immediate financial impact might be <strong>detrimental</strong>, experts argue the long-term environmental payoffs are absolutely <strong>indispensable</strong>.`,
        data: [
            {q: "City planners are currently adopting more sustainable building methods.", a: "T"},
            {q: "Vertical gardens are rarely seen in modern metropolitan centers.", a: "F"},
            {q: "Governments completely cover the cost of all eco-friendly building materials.", a: "NG"},
            {q: "Developing nations find it easy to finance massive eco-friendly infrastructure overhauls.", a: "F"},
            {q: "Experts believe the long-term environmental benefits outweigh the initial costs.", a: "T"}
        ]
    },
  {
    id: "passage_006",
    title: "The Evolution of Urban Planning",
    content: "In the 19th century, the rapid proliferation of industrialization led to unprecedented urban sprawl. Early city planners sought to mitigate the adverse effects of overcrowding and pollution by designing grid systems and implementing public sanitation infrastructure. Today, contemporary urban planning has shifted towards a more holistic approach. Planners emphasize sustainable development, prioritizing green spaces and the integration of ubiquitous public transit networks to reduce reliance on the automobile. This paradigm shift reflects a growing recognition of the intrinsic link between the built environment and public health.",
    vocabularyKeywords: ["proliferation", "mitigate", "contemporary", "ubiquitous", "intrinsic", "paradigm"],
    questions: [
      {
        type: "multiple_choice",
        question: "What does the word 'mitigate' in the text mean?",
        options: [
          "To completely eliminate",
          "To make less severe or harmful",
          "To investigate thoroughly",
          "To ignore entirely"
        ],
        answer: "To make less severe or harmful"
      },
      {
        type: "fill_in_the_blank",
        question: "Modern planners believe there is an ________ link between city design and the well-being of citizens.",
        answer: "intrinsic"
      }
    ]
  },
  {
    id: "passage_007",
    title: "Bioluminescence in Marine Ecosystems",
    content: "Bioluminescence, the biochemical emission of light by living organisms, is a widespread phenomenon in marine environments, particularly in the bathypelagic zone. For many deep-sea creatures, this trait is not merely a superficial anomaly but a crucial survival mechanism. Predatory species often utilize luminescent lures to entice unsuspecting prey, while others employ sudden flashes to disorient predators and facilitate escape. Furthermore, scientists postulate that specific light patterns serve as complex communication mechanisms for mating and territorial defense in an otherwise perpetually obscure habitat.",
    vocabularyKeywords: ["phenomenon", "superficial", "entice", "facilitate", "postulate", "obscure"],
    questions: [
      {
        type: "multiple_choice",
        question: "In the context of the passage, 'entice' is closest in meaning to:",
        options: [
          "To warn against",
          "To illuminate brightly",
          "To attract or tempt",
          "To capture forcefully"
        ],
        answer: "To attract or tempt"
      },
      {
        type: "fill_in_the_blank",
        question: "Researchers ________ that the light emitted by these creatures is used for communication.",
        answer: "postulate"
      }
    ]
  },
  {
    id: "passage_008",
    title: "The Psychology of Consumer Behavior",
    content: "Understanding consumer behavior requires a multifaceted approach that transcends basic economic theory. Marketers must scrutinize the cognitive biases and emotional triggers that dictate purchasing decisions. For instance, the 'scarcity principle' dictates that individuals assign higher value to items they perceive as rare or ephemeral. Additionally, peer influence and social validation heavily sway modern consumers, rendering traditional advertising increasingly obsolete. Consequently, successful brands cultivate brand loyalty by fostering authentic narratives that resonate with the consumer's self-concept and core values.",
    vocabularyKeywords: ["multifaceted", "scrutinize", "ephemeral", "obsolete", "cultivate", "authentic"],
    questions: [
      {
        type: "multiple_choice",
        question: "What does 'obsolete' mean as used in the passage?",
        options: [
          "No longer produced or used; out of date",
          "Highly effective and modern",
          "Difficult to understand",
          "Financially inaccessible"
        ],
        answer: "No longer produced or used; out of date"
      },
      {
        type: "fill_in_the_blank",
        question: "Marketers must carefully ________ the emotional reasons why people buy certain products.",
        answer: "scrutinize"
      }
    ]
  },
  {
    id: "passage_009",
    title: "Renewable Energy and Smart Grids",
    content: "The transition from fossil fuels to renewable energy sources is imperative to combat anthropogenic climate change. However, the inherent intermittency of solar and wind power presents substantial logistical hurdles for traditional electrical grids. To circumvent these challenges, engineers are developing 'smart grids'. These advanced networks utilize artificial intelligence and real-time data analytics to optimize energy distribution, seamlessly balancing supply and demand. The widespread implementation of such technologies is anticipated to revolutionize energy consumption, promoting unprecedented efficiency and sustainability on a global scale.",
    vocabularyKeywords: ["imperative", "anthropogenic", "intermittency", "circumvent", "seamlessly", "unprecedented"],
    questions: [
      {
        type: "multiple_choice",
        question: "The term 'anthropogenic' most likely refers to:",
        options: [
          "Originating from natural disasters",
          "Caused or influenced by humans",
          "Related to ancient civilizations",
          "Derived from solar radiation"
        ],
        answer: "Caused or influenced by humans"
      },
      {
        type: "fill_in_the_blank",
        question: "Smart grids are designed to ________ the problems caused by the irregular supply of renewable energy.",
        answer: "circumvent"
      }
    ]
  },
  {
        text: `The shift to remote work has become completely <strong>ubiquitous</strong> in recent years. While many consider it a <strong>paradigm shift</strong> for work-life balance, it can also be a <strong>double-edged sword</strong>. Employees no longer have to commute, which helps <strong>alleviate</strong> the stress of daily traffic. However, without a physical office, some workers find themselves starting to <strong>burn the midnight oil</strong> as the boundaries between home and work blur. Working from home can feel incredibly <strong>isolating</strong>, though a major <strong>silver lining</strong> is the ability to travel freely. <br><br> Managers must learn to <strong>read between the lines</strong> during video calls to gauge team morale. If a project fails <strong>out of the blue</strong>, it often boils down to poor communication. Ultimately, once the <strong>novelty</strong> wears off, companies must establish clear boundaries to prevent burnout.`,
        data: [
            {q: "Remote work has become an extremely rare practice in recent years.", a: "F"},
            {q: "Working from home eliminates all sources of stress for employees.", a: "NG"},
            {q: "Remote workers sometimes struggle to separate their professional and personal lives.", a: "T"},
            {q: "The ability to travel is considered a negative aspect of remote work.", a: "F"},
            {q: "Managers need to look for hidden meanings or subtle emotional cues during virtual meetings.", a: "T"}
        ]
    },
    {
        text: `The integration of artificial intelligence into the creative arts remains a highly <strong>contentious</strong> issue. Some argue that <strong>cutting-edge</strong> algorithms have <strong>taken the world by storm</strong>, producing masterpieces at an <strong>unprecedented</strong> rate. However, purists believe this <strong>opens a can of worms</strong> regarding copyright laws. While a machine can <strong>mimic</strong> the style of famous painters, critics argue it lacks the emotional <strong>nuance</strong> of an <strong>authentic</strong> human experience. <br><br> Many digital artists are currently <strong>on the fence</strong> about adopting these tools. Some fear that AI will essentially <strong>plagiarize</strong> their portfolios without compensation. Despite the backlash, tech developers are unlikely to pull the plug anytime soon, leaving the art community deeply divided.`,
        data: [
            {q: "Everyone agrees that AI is beneficial for the creative arts.", a: "F"},
            {q: "AI has generated artwork at a speed that has never been seen before.", a: "T"},
            {q: "AI-generated artwork is currently selling for higher prices than human-made art.", a: "NG"},
            {q: "Many artists are currently completely undecided about using AI tools.", a: "T"},
            {q: "Critics believe that AI art perfectly captures authentic human emotion.", a: "F"}
        ]
    },
    {
        text: `The appeal of fast fashion is largely driven by its incredibly low prices and <strong>ephemeral</strong> trends. Unfortunately, many consumers <strong>turn a blind eye</strong> to the environmental damage caused by this industry. To keep prices low, manufacturers often <strong>cut corners</strong> regarding labor laws and material quality. The resulting pollution is absolutely <strong>detrimental</strong> to local ecosystems. <br><br> Recently, a movement toward <strong>sustainable</strong> clothing has started to <strong>catch on</strong>. However, eco-friendly brands are often too expensive for the average shopper. Activists argue that individual recycling efforts are merely <strong>a drop in the ocean</strong> compared to the <strong>rampant</strong> waste produced by corporations. If the industry does not undergo a massive <strong>overhaul</strong>, future generations will inevitably <strong>pay the price</strong>.`,
        data: [
            {q: "Fast fashion trends are designed to last for a very long time.", a: "F"},
            {q: "Manufacturers sometimes ignore safety or quality standards to save money.", a: "T"},
            {q: "Most consumers prefer buying sustainable clothing over fast fashion.", a: "NG"},
            {q: "Sustainable clothing brands are generally affordable for everyone.", a: "F"},
            {q: "Activists believe individual recycling is not enough to solve the industry's waste problem.", a: "T"}
        ]
    },
    {
        text: `Transforming a <strong>concrete jungle</strong> into a green oasis might seem impossible, but urban farming is becoming a highly <strong>feasible</strong> solution for city dwellers. With traditional agricultural land becoming increasingly <strong>scarce</strong>, architects have had to <strong>think outside the box</strong>. <strong>Innovative</strong> vertical gardens are now springing up on the sides of skyscrapers. <br><br> Starting a rooftop garden requires a bit of a <strong>green thumb</strong>, but communities are becoming more <strong>resilient</strong> as they learn to grow their own produce. Local councils are trying to <strong>nip in the bud</strong> any zoning issues that prevent these <strong>up-and-coming</strong> projects. If these initiatives continue to <strong>bear fruit</strong>, cities could significantly reduce their reliance on imported groceries.`,
        data: [
            {q: "Finding traditional agricultural land in rural areas is getting more difficult.", a: "T"},
            {q: "Vertical gardens are currently being built inside underground subway stations.", a: "NG"},
            {q: "You need absolutely no gardening skills to successfully start a rooftop farm.", a: "F"},
            {q: "Local governments are intentionally creating zoning issues to stop urban farming.", a: "F"},
            {q: "Successful urban farming could make cities less dependent on outside food sources.", a: "T"}
        ]
    },
    {
        text: `For decades, space travel was strictly the domain of government agencies, but private companies are now beginning to <strong>push the envelope</strong>. The concept of space tourism is slowly transitioning from science fiction to a <strong>viable</strong> industry. Currently, the costs are absolutely <strong>astronomical</strong>, making it an incredibly <strong>exclusive</strong> experience. <br><br> However, with several reusable rocket designs currently in the <strong>pipeline</strong>, engineers hope to dramatically lower ticket prices. Every successful launch is a <strong>step in the right direction</strong>, though occasional rocket failures force developers to go <strong>back to square one</strong>. As these <strong>pioneer</strong> companies continue to innovate, enthusiasts believe that when it comes to travel, <strong>the sky is the limit</strong>.`,
        data: [
            {q: "Private companies are currently trying to expand the boundaries of space travel.", a: "T"},
            {q: "Space tourism is currently affordable enough for the middle class to enjoy.", a: "F"},
            {q: "Reusable rockets have already reduced space travel ticket prices by 50%.", a: "NG"},
            {q: "Engineering failures sometimes require companies to start their designs over from the beginning.", a: "T"},
            {q: "Only government agencies are legally allowed to launch rockets today.", a: "F"}
        ]
    },
    {
        text: `The modern workforce has seen a massive shift toward the gig economy, allowing professionals to be completely <strong>autonomous</strong>. While the freedom to choose your own hours is appealing, the reality of freelance work can be highly <strong>precarious</strong>. Without the traditional <strong>safety net</strong> of health insurance or paid leave, a sudden illness can make it incredibly difficult to <strong>make ends meet</strong>. <br><br> Many freelancers have to constantly <strong>hustle</strong> to find new clients in a market that is increasingly <strong>saturated</strong>. Realizing that you are solely responsible for your own taxes is often <strong>a tough pill to swallow</strong> for newcomers. Before quitting a stable job, individuals must carefully <strong>weigh the pros and cons</strong>, as only the most disciplined tend to truly <strong>thrive</strong>.`,
        data: [
            {q: "Freelancers generally have less control over their working hours than traditional employees.", a: "F"},
            {q: "Gig workers typically receive comprehensive health insurance directly from their clients.", a: "F"},
            {q: "The freelance market currently has a significant amount of competition for new clients.", a: "T"},
            {q: "Freelancers generally pay higher income taxes than regular corporate employees.", a: "NG"},
            {q: "Accepting the financial and administrative responsibilities of freelancing can be difficult for beginners.", a: "T"}
        ]
    },
    {
        text: `Language is inherently <strong>dynamic</strong>; it is never completely <strong>set in stone</strong>. The way teenagers communicate today is <strong>a far cry from</strong> the formal letters written a century ago. As internet slang continues to <strong>evolve</strong>, older generations often feel <strong>out of touch</strong> or entirely <strong>behind the times</strong>. <br><br> Grammarians can sometimes be overly <strong>pedantic</strong> about proper syntax, but the primary goal of language is simply to <strong>convey</strong> meaning efficiently. When abbreviations and emojis began to <strong>catch on</strong>, critics worried that emotional depth would be <strong>lost in translation</strong>. However, linguists argue that these digital tools actually add a new, complex layer to modern communication.`,
        data: [
            {q: "Language rules are permanently fixed and cannot be changed over time.", a: "F"},
            {q: "Modern teenage communication is very similar to the communication style of the 1900s.", a: "F"},
            {q: "The use of emojis has caused a noticeable decline in students' reading test scores.", a: "NG"},
            {q: "Strict grammarians tend to focus heavily on minor details and formal rules.", a: "T"},
            {q: "Linguists believe digital communication tools make language richer and more complex.", a: "T"}
        ]
    },
    {
        text: `The <strong>looming</strong> threat of climate change has acted as a powerful <strong>catalyst</strong> for the <strong>transition</strong> to renewable energy. While solar and wind power have become absolutely <strong>indispensable</strong>, many governments still <strong>drag their feet</strong> when it comes to passing <strong>sweeping</strong> environmental legislation. Bureaucratic <strong>red tape</strong> often delays the construction of new green infrastructure. <br><br> Furthermore, some corporations attempt to <strong>greenwash</strong> their image by exaggerating their eco-friendly initiatives. Environmentalists warn that replacing plastic straws is merely the <strong>tip of the iceberg</strong>. To truly combat global warming, nations must aggressively <strong>phase out</strong> fossil fuels entirely within the next two decades.`,
        data: [
            {q: "Climate change has accelerated the global shift toward renewable energy sources.", a: "T"},
            {q: "Governments are moving as fast as possible to pass sweeping environmental laws.", a: "F"},
            {q: "Solar power is currently the cheapest form of renewable energy available.", a: "NG"},
            {q: "Some companies pretend to be more environmentally friendly than they actually are.", a: "T"},
            {q: "Environmentalists believe banning plastic straws is the most important step to save the planet.", a: "F"}
        ]
    },
    {
        text: `Promoting historical landmarks as tourist destinations is a classic <strong>double-edged sword</strong>. On one hand, millions of visitors <strong>flock</strong> to these sites every year, generating revenue that helps <strong>preserve</strong> local culture. On the other hand, the constant foot traffic causes significant <strong>wear and tear</strong> to ancient structures. <br><br> To keep these locations looking <strong>pristine</strong>, authorities sometimes declare certain fragile areas entirely <strong>off-limits</strong>. While tour companies are eager to <strong>turn a profit</strong>, the <strong>rampant</strong> commercialization often destroys the <strong>authentic</strong> atmosphere of the site. Furthermore, the entrance fees collected are sometimes just <strong>a drop in the bucket</strong> compared to the massive costs required for structural restoration.`,
        data: [
            {q: "Tourism only brings negative consequences and damage to historical landmarks.", a: "F"},
            {q: "The revenue generated from tourism is always enough to cover the costs of restoration.", a: "F"},
            {q: "Certain parts of historical sites are sometimes restricted to protect them from further damage.", a: "T"},
            {q: "Local residents usually dislike the tourists visiting their historical sites.", a: "NG"},
            {q: "Commercialization can negatively impact the genuine historical feel of an ancient location.", a: "T"}
        ]
    },
    {
        text: `In today's highly connected society, smartphones are completely <strong>ubiquitous</strong>, and free apps are <strong>a dime a dozen</strong>. However, users often <strong>turn a blind eye</strong> to the fact that these applications constantly <strong>mine</strong> their personal data. Data brokerage has become an incredibly <strong>lucrative</strong> industry, operating mostly behind closed doors. <br><br> Cybersecurity experts are <strong>at the forefront</strong> of the battle against <strong>malicious</strong> hackers. Unfortunately, many internet users still <strong>fall prey to</strong> phishing scams because they do not bother to read the <strong>fine print</strong> of user agreements. To truly <strong>safeguard</strong> their privacy, individuals must become much more proactive about monitoring their digital footprints.`,
        data: [
            {q: "Free applications are very rare and hard to find in today's digital society.", a: "F"},
            {q: "Many users ignore the reality that their personal information is being secretly collected.", a: "T"},
            {q: "Selling personal data to third parties is a highly profitable business model.", a: "T"},
            {q: "Cybersecurity experts have completely eliminated the threat of online hackers.", a: "F"},
            {q: "Smartphone manufacturers are legally required to teach users about cybersecurity.", a: "NG"}
        ]
    },
  {
    id: "passage_010",
    title: "Linguistics and the Death of Languages",
    content: "Linguists estimate that a significant proportion of the world's spoken languages are on the verge of extinction, with one language disappearing approximately every two weeks. This alarming attrition rate is predominantly driven by globalization and the dominance of a few lingua francas in commerce and media. The loss of a language is not merely the erasure of a communication tool; it signifies the irreversible loss of unique cultural paradigms, indigenous ecological knowledge, and oral histories. Consequently, strenuous revitalization efforts are being mobilized globally to document and preserve these invaluable linguistic artifacts before they vanish completely.",
    vocabularyKeywords: ["proportion", "extinction", "attrition", "indigenous", "strenuous", "mobilized"],
    questions: [
      {
        type: "multiple_choice",
        question: "What is the meaning of 'attrition' in the text?",
        options: [
          "The process of creating something new",
          "The gradual reduction or weakening of something",
          "The sudden popularity of a subject",
          "The strict enforcement of linguistic rules"
        ],
        answer: "The gradual reduction or weakening of something"
      },
      {
        type: "fill_in_the_blank",
        question: "The death of a language often results in the loss of ________ knowledge about local ecosystems.",
        answer: "indigenous"
      }
    ]
  }
];


const s5Pairs = [
    {id:1, t:"Stand out"}, {id:1, t:"To be very noticeable or clearly better than others"},
    {id:2, t:"Make ends meet"}, {id:2, t:"Earn just enough for basic expenses"},
    {id:3, t:"Hot off the press"}, {id:3, t:"Freshly released news or info"},
    {id:4, t:"Scrutinize"}, {id:4, t:"To examine something very closely"},
    {id:5, t:"Take for granted"}, {id:5, t:"Fail to properly appreciate someone/something"},
    {id:6, t:"Step up to the plate"}, {id:6, t:"Take responsibility for doing something"},
    {id:7, t:"Deteriorate"}, {id:7, t:"Become progressively worse"},
    {id:8, t:"Look down on"}, {id:8, t:"To think you are better than someone"},
    {id:9, t:"Carry out"}, {id:9, t:"To conduct or perform an experiment/research"},
    {id:10, t:"Look into"}, {id:10, t:"To investigate a situation or problem"},
    {id:11, t:"Bring up"}, {id:11, t:"To start discussing a subject"},
    {id:12, t:"Rule out"}, {id:12, t:"To eliminate something as a possibility"},
    {id:13, t:"Come across"}, {id:13, t:"To find something by chance"},
    {id:14, t:"Boil down to"}, {id:14, t:"To be the main or most important result of something"},
    {id:15, t:"Phase out"}, {id:15, t:"To gradually stop using something"},
    {id:16, t:"Cut down on"}, {id:16, t:"To reduce the amount or number of something"},
    {id:17, t:"Put off"}, {id:17, t:"To delay doing something"},
    {id:18, t:"Come up with"}, {id:18, t:"To think of an idea or plan"},
    {id:19, t:"Turn out"}, {id:19, t:"To happen in a particular way, often unexpectedly"},
    {id:20, t:"Silver lining"}, {id:20, t:"A positive aspect of a negative situation"},
    {id:21, t:"On the fence"}, {id:21, t:"To be undecided about something"},
    {id:22, t:"Implement"}, {id:22, t:"To put a plan or system into operation"},
    {id:23, t:"Follow up"}, {id:23, t:"To take further action on something already begun"},
    {id:24, t:"Break down"}, {id:24, t:"To explain something step by step to make it easier"}
];

const s6Data = [
    {w: "REMUNERATION", h: "Payment for work or services."}, 
    {w: "ITINERARY", h: "A planned route or journey."}, 
    {w: "SCRUTINIZE", h: "To examine closely."}, 
    {w: "UBIQUITOUS", h: "Present, appearing, or found everywhere."}, 
    {w: "ACCOMMODATION", h: "A room, group of rooms, or building in which someone may live or stay."}, 
    {w: "CONSCIENTIOUS", h: "Wishing to do what is right, especially to do one's work well."}, 
    {w: "SUSCEPTIBLE", h: "Likely or liable to be influenced or harmed by a particular thing."}, 
    {w: "ENVIRONMENT", h: "The surroundings or conditions in which a person, animal, or plant lives."},
    {w: "ENTREPRENEUR", h: "A person who organizes and operates a business."},
    {w: "HINDRANCE", h: "A thing that provides resistance, delay, or obstruction."}, 
    {w: "PARADIGM", h: "A typical example or pattern of something; a model."}, 
    {w: "CATALYST", h: "A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change."}, 
    {w: "PREVALENT", h: "Widespread in a particular area or at a particular time."}, 
    {w: "ACCOMMODATE", h: "Fit in with the wishes or needs of."}, 
    {w: "DETERIORATE", h: "Become progressively worse."}, 
    {w: "MAINTENANCE", h: "The process of preserving a condition or situation."},
    {w: "FLUCTUATION", h: "An irregular rising and falling in number or amount; a variation."}, 
    {w: "IMPLEMENTATION", h: "The process of putting a decision or plan into effect."}, 
    {w: "CONSEQUENCE", h: "A result or effect of an action or condition."}, 
    {w: "SUSTAINABLE", h: "Able to be maintained at a certain rate or level."},
    {w: "EPHEMERAL", h: "Lasting for a very short time."},
    {w: "MITIGATE", h: "To make less severe, serious, or painful."},
    {w: "PRAGMATIC", h: "Dealing with things sensibly and realistically."},
    {w: "ELOQUENT", h: "Fluent or persuasive in speaking or writing."},
    {w: "ANOMALY", h: "Something that deviates from what is standard, normal, or expected."},
    {w: "METICULOUS", h: "Showing great attention to detail; very careful and precise."},
    {w: "INEVITABLE", h: "Certain to happen; unavoidable."},
    {w: "OBSOLETE", h: "No longer produced or used; out of date."},
    {w: "RESILIENT", h: "Able to withstand or recover quickly from difficult conditions."},
    {w: "AMBIGUOUS", h: "Open to more than one interpretation; having a double meaning."}
];

const s7Data = [
    {q: "Which idiom means 'to start a process or activity'?", o:["Learn the ropes", "Get the ball rolling"], a:1, h: "Think about sports equipment in motion."},
    {q: "Which word is a formal synonym for 'route' or 'travel plan'?", o:["Itinerary", "Gridlock"], a:0, h: "You usually check this before a vacation."},
    {q: "Taking news with a 'pinch of salt' implies...", o:["Skepticism", "Total Belief"], a:0, h: "It means you don't swallow the whole truth immediately."},
    {q: "'Ubiquitous' means that something is...", o:["Found everywhere", "Extremely rare"], a:0, h: "Smartphones are a great example of this."},
    {q: "Which phrasal verb means 'to tolerate'?", o:["Put up with", "Look forward to"], a:0, h: "You might have to do this with a noisy neighbor."},
    {q: "If an issue is a 'grey area', it is...", o:["Clearly defined", "Unclear and ambiguous"], a:1, h: "It's not black and white."},
    {q: "To 'mitigate' a problem means to...", o:["Make it worse", "Make it less severe"], a:1, h: "Similar to 'alleviate'."},
    {q: "Which word means 'crucial' or 'absolutely necessary'?", o:["Indispensable", "Trivial"], a:0, h: "You can't dispense with it."},
    {q: "If an argument is 'compelling', it is...", o:["Weak and illogical", "Strong and convincing"], a:1, h: "It compels you to agree."},
    {q: "Which verb correctly collocates with 'research'?", o:["Conduct research", "Make research"], a:0, h: "It sounds more formal than 'do'."},
    {q: "What is the meaning of 'to turn a blind eye'?", o:["To go blind", "To actively ignore something wrong"], a:1, h: "Pretending you didn't see it."},
    {q: "A 'catalyst' is something that...", o:["Slows a process down", "Causes a process to speed up/begin"], a:1, h: "It sparks a reaction."},
    {q: "Which word means 'existing everywhere at the same time'?", o:["Ubiquitous", "Ephemeral"], a:0, h: "Like the air we breathe."},
    {q: "If you 'miss the boat', you...", o:["Are late for a ferry", "Lose an opportunity by being slow"], a:1, h: "The opportunity has sailed away."},
    {q: "Which phrase means to 'weigh up the pros and cons'?", o:["Evaluate advantages and disadvantages", "Complain about a difficult situation"], a:0, h: "Think of a set of scales."},
    {q: "To 'mitigate' environmental damage means to...", o:["Make it less severe", "Study it closely"], a:0, h: "Reducing the negative impact."},
    {q: "What does 'ephemeral' mean?", o:["Lasting for a very short time", "Permanent"], a:0, h: "Like a mayfly's lifespan."},
    {q: "If a solution is 'pragmatic', it is...", o:["Theoretical and idealistic", "Practical and sensible"], a:1, h: "Focused on real-world results."}
];
// --- STAGE 8: Real Speaking Contexts ---
const s8Data = [
    {
        context: "<strong>Examiner:</strong> Do you enjoy studying in a group?<br><strong>Candidate:</strong> Yes, definitely. If I don't understand a concept, my peers can help me ________.",
        options: ["learn the ropes", "jump on the bandwagon", "turn a blind eye"],
        a: 0,
        h: "Means to learn the basics of how to do a task or understand something."
    },
    {
        context: "<strong>Examiner:</strong> How do you deal with heavy traffic in your city?<br><strong>Candidate:</strong> I usually try to avoid rush hour altogether. Otherwise, you end up ________ for hours.",
        options: ["missing the boat", "running on fumes", "beating around the bush"],
        a: 1,
        h: "Means operating with almost zero energy or resources left (or in cars, fuel)."
    },
    {
        context: "<strong>Examiner:</strong> What is your opinion on fast fashion?<br><strong>Candidate:</strong> It's cheap, but it's a ________. The environmental damage is massive.",
        options: ["drop in the ocean", "double-edged sword", "blessing in disguise"],
        a: 1,
        h: "Something that has both positive and negative consequences."
    },
    {
        context: "<strong>Examiner:</strong> Have you ever had to make a very difficult decision?<br><strong>Candidate:</strong> Yes, changing my major in university was tough, but I eventually had to ________ and do it.",
        options: ["bite the bullet", "brush up on", "see eye to eye"],
        a: 0,
        h: "To force yourself to do something unpleasant or difficult."
    },
    {
        context: "<strong>Examiner:</strong> Do you think public transport needs improvement?<br><strong>Candidate:</strong> Absolutely. The government needs to ________ and invest in better train networks.",
        options: ["foot the bill", "step up to the plate", "look down on"],
        a: 1,
        h: "Take responsibility for doing something."
    },
    {
        context: "<strong>Examiner:</strong> How do you keep your language skills sharp?<br><strong>Candidate:</strong> I always try to ________ my vocabulary by reading English articles every day.",
        options: ["brush up on", "cut down on", "phase out"],
        a: 0,
        h: "To improve your knowledge or skill in something."
    },
    {
        context: "<strong>Examiner:</strong> Do people in your country generally agree on environmental policies?<br><strong>Candidate:</strong> Not really. It's rare for everyone to ________ when it comes to climate taxes.",
        options: ["see eye to eye", "bring up", "rule out"],
        a: 0,
        h: "To completely agree with someone."
    },
    {
        context: "<strong>Examiner:</strong> How do politicians address the housing crisis in your city?<br><strong>Candidate:</strong> Honestly, most of them just ________ instead of giving a straight answer.",
        options: ["beat around the bush", "cut down on", "look into"],
        a: 0,
        h: "To avoid talking about the most important part of a subject."
    },
    {
        context: "<strong>Examiner:</strong> Are you planning to study abroad for your Master's degree?<br><strong>Candidate:</strong> I'm still ________ about it. It's a huge financial commitment.",
        options: ["ruling it out", "on the fence", "bringing it up"],
        a: 1,
        h: "To be unable or unwilling to make a decision."
    },
    {
        context: "<strong>Examiner:</strong> What is the primary cause of traffic congestion here?<br><strong>Candidate:</strong> It really ________ a lack of reliable public transportation infrastructure.",
        options: ["comes across", "phases out", "boils down to"],
        a: 2,
        h: "To be the main or most important result or cause of something."
    },
    {
        context: "<strong>Examiner:</strong> Do you think modern technology has improved our daily lives?<br><strong>Candidate:</strong> Definitely, though we often ________ how easy it makes instant communication.",
        options: ["take for granted", "scrutinize", "put off"],
        a: 0,
        h: "To fail to properly appreciate someone or something."
    },
    {
        context: "<strong>Examiner:</strong> What steps are you taking to maintain a healthy lifestyle?<br><strong>Candidate:</strong> I've been actively trying to ________ sugary drinks and eat more whole foods.",
        options: ["come up with", "cut down on", "carry out"],
        a: 1,
        h: "To reduce the amount or number of something you consume or do."
    },
    {
        context: "<strong>Examiner:</strong> How should local governments handle the rise in cybercrime?<br><strong>Candidate:</strong> They really need to ________ stricter regulations for tech companies.",
        options: ["look down on", "look into", "deteriorate"],
        a: 1,
        h: "To investigate a situation, problem, or crime."
    },
    {
        context: "<strong>Examiner:</strong> What was your first impression of your new university professor?<br><strong>Candidate:</strong> At first, she ________ as very strict, but she's actually quite supportive.",
        options: ["stepped up", "came across", "brought up"],
        a: 1,
        h: "To give a particular impression to others."
    },
    {
        context: "<strong>Examiner:</strong> Why do you think the community meeting was so tense?<br><strong>Candidate:</strong> Well, the recent budget cuts were the ________ that nobody wanted to mention.",
        options: ["silver lining", "echo chamber", "elephant in the room"],
        a: 2,
        h: "An obvious problem or controversial issue that no one wants to discuss."
    },
    {
        context: "<strong>Examiner:</strong> Who usually organizes these local charity events?<br><strong>Candidate:</strong> Usually, a few dedicated volunteers ________ when things need to get done.",
        options: ["step up to the plate", "beat around the bush", "phase out"],
        a: 0,
        h: "To take action or take on responsibility when it is needed."
    },
    {
        context: "<strong>Examiner:</strong> How did your study group solve the scheduling conflict?<br><strong>Candidate:</strong> We had a long group chat and managed to ________ a brilliant compromise.",
        options: ["rule out", "put off", "come up with"],
        a: 2,
        h: "To think of or produce an idea, plan, or solution."
    },
    {
        context: "<strong>Examiner:</strong> How do you handle stressful situations at work when deadlines are incredibly tight?<br><strong>Candidate:</strong> To be honest, it can be quite overwhelming at times. However, I usually try not to panic. Instead, I just put my head down, prioritize the most urgent tasks, and try to ________ until the project is finished and things calm down.",
        options: ["weather the storm", "spill the beans", "burn bridges"],
        a: 0,
        h: "To successfully deal with a very difficult problem or survive a difficult situation."
    },
    {
        context: "<strong>Examiner:</strong> Have you ever tried to learn a new skill that you found incredibly difficult at first?<br><strong>Candidate:</strong> Absolutely. I took up learning the violin last year, and initially, it sounded terrible. There were definitely moments when I wanted to give up entirely, but I decided to ________. Eventually, my finger coordination improved, and I started making noticeable progress.",
        options: ["pass the buck", "stick it out", "jump the gun"],
        a: 1,
        h: "To continue doing something to the end, even when it is difficult or tedious."
    },
    {
        context: "<strong>Examiner:</strong> Do you prefer visiting popular tourist attractions or exploring lesser-known places when you travel?<br><strong>Candidate:</strong> I definitely prefer the latter. Popular destinations are often overcrowded and heavily commercialized, which ruins the authentic experience for me. I much prefer going ________ to discover hidden local gems and experience the real culture of a region.",
        options: ["out of the blue", "under the weather", "off the beaten track"],
        a: 2,
        h: "In or into an isolated place; away from frequently traveled routes."
    },
    {
        context: "<strong>Examiner:</strong> In what ways do you think smartphones have changed how we maintain relationships?<br><strong>Candidate:</strong> They've certainly made instant communication much easier, but I think there's a serious downside too. We've become so reliant on texting that a phone call can almost feel intrusive. Furthermore, constantly looking at our screens can often ________ when we are actually spending time with friends face-to-face.",
        options: ["break the ice", "get in the way", "clear the air"],
        a: 1,
        h: "To prevent something from happening or to make it more difficult."
    },
    {
        context: "<strong>Examiner:</strong> Do you think individuals can truly make a difference in combating climate change, or is it mostly up to large corporations?<br><strong>Candidate:</strong> That's a complex issue. While individual actions like recycling or reducing meat consumption are important, they sometimes feel like just ________. Without massive systemic changes and strict regulations on heavy industries, our personal efforts might not be enough to reverse the global damage.",
        options: ["a piece of cake", "a blessing in disguise", "a drop in the ocean"],
        a: 2,
        h: "A very small amount compared to what is needed or expected."
    },
    {
        context: "<strong>Examiner:</strong> How important is it for university students to engage in extracurricular activities?<br><strong>Candidate:</strong> I think it's absolutely vital. Academic grades are important, but employers today are looking for well-rounded individuals. Joining clubs or volunteering allows students to develop soft skills and ________, which gives them a significant advantage when they eventually enter the competitive job market.",
        options: ["get a leg up", "miss the boat", "sit on the fence"],
        a: 0,
        h: "To gain an advantage over others."
    },
    {
        context: "<strong>Examiner:</strong> How do you usually resolve disagreements or arguments with your close friends?<br><strong>Candidate:</strong> I'm not the type to hold a grudge or let resentment build up over time. If a friend says something that upsets me, I prefer to address it immediately and ________. It's usually a bit uncomfortable at first, but honest communication always strengthens the friendship in the long run.",
        options: ["add fuel to the fire", "clear the air", "sweep it under the rug"],
        a: 1,
        h: "To get rid of doubts or negative feelings by openly discussing them."
    },
    {
        context: "<strong>Examiner:</strong> What is your approach to maintaining a healthy diet amidst a busy work schedule?<br><strong>Candidate:</strong> It's certainly a challenge when you're working long hours. I used to rely heavily on fast food because it was convenient. However, I've recently realized that I need to stop taking my health for granted, so I've made a firm decision to completely ________ junk food and start meal prepping on Sundays.",
        options: ["brush up on", "cut out", "look forward to"],
        a: 1,
        h: "To stop eating or drinking something entirely, usually for health reasons."
    },
    {
        context: "<strong>Examiner:</strong> Do you think younger generations are better at managing their personal finances than previous generations?<br><strong>Candidate:</strong> Not necessarily. With the rise of targeted online advertising and one-click purchasing, it's easier than ever to make impulse buys. Many young people struggle to save for the future and often find themselves needing to ________ just to pay their rent and basic utilities at the end of the month.",
        options: ["tighten their belts", "cost an arm and a leg", "hit the jackpot"],
        a: 0,
        h: "To spend less money than you did before because you have less available."
    },
    {
        context: "<strong>Examiner:</strong> Where do you see your career heading in the next five years?<br><strong>Candidate:</strong> I'm currently working in a junior marketing role, but I'm highly ambitious. Over the next few years, I plan to take on more leadership responsibilities, improve my networking skills, and aggressively ________. Ultimately, my main goal is to secure a senior managerial position before I turn thirty.",
        options: ["beat around the bush", "throw in the towel", "climb the corporate ladder"],
        a: 2,
        h: "To advance in one's career to higher positions within a company."
    }
];