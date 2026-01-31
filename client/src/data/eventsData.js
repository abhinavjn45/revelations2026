// Import event images
import HawkinsArenaImg from '../assets/images/events/1.png';
import ScoopsTroopSnippetsImg from '../assets/images/events/2.png';
import MrClarkeJournalImg from '../assets/images/events/3.png';
import TheSnowBallShowdownImg from '../assets/images/events/4.png';
import MindscapeDesignImg from '../assets/images/events/5.png';
import WillsVisionsImg from '../assets/images/events/6.png';
import ThePromptFlayerImg from '../assets/images/events/7.png';
import DumbDeedsImg from '../assets/images/events/8.png';
import JoyceBlueprintImg from '../assets/images/events/9.png';
import CodeRedDemogorgonImg from '../assets/images/events/10.png';
import VecnaMindMazeImg from '../assets/images/events/11.png';
import CapturetheGateImg from '../assets/images/events/12.png';
import VenueClassImg from '../assets/images/venue/class.png';
import VenueGround1Img from '../assets/images/venue/ground1.jpeg';
import VenueGround2Img from '../assets/images/venue/ground2.jpeg';
import VenueLabImg from '../assets/images/venue/lab.png';
import VenueSports1Img from '../assets/images/venue/sports1.png';
import VenueSports2Img from '../assets/images/venue/sports2.png';
import VenueTableImg from '../assets/images/venue/table.png';

// Event data with images and detailed info
export const events = [
    {
        id: 17,
        title: "Hawkins Arena - Chess",
        subtitle: "Chess (Individual)",
        date: "FEB 02",
        time: "02:30 PM Onwards",
        venue: "Online / Room 815 + Room 814",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        venueImage: VenueClassImg,
        description: "Strategize like a grandmaster in the Hawkins Arena chess tournament! Test your tactical skills in this classic battle of minds.",
        rules: [
            "Individual participation",
            "Swiss format / Knockout",
            "Standard chess rules apply",
            "Time control: Rapid",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "https://docs.google.com/document/d/1qHzMS7L7nBaysoaIjSX7OhOCMHKq1mCA1IIbCsKzsUM/edit?tab=t.0",
        coordinators: [
            { name: "Omkaar", contact: "+91 83999 45212" },
            { name: "Abhinav", contact: "+91 92145 44078" }
        ],
        registrationLink: "https://forms.gle/xcR3oQhG5VAd9Thi7",
        registrationStatus: "open",
    },
    {
        id: 9,
        title: "Scoops Troop Snippets",
        subtitle: "Reel Making",
        date: "JAN 31 - FEB 03",
        time: "10:00 PM (Deadline)",
        venue: "Entire Campus / Online Submissions",
        type: "Non-Technical",
        bgImage: ScoopsTroopSnippetsImg,
        venueImage: VenueGround2Img,
        description: "Unleash your creativity and storytelling skills! Create engaging reels that capture the essence of college life, technology, or the Stranger Things theme.",
        rules: [
            "Team of 2-4 members",
            "Reel duration: 30-40 seconds (Strict)",
            "Must include all the team members",
            "Should follow proper decorum and guidelines",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "https://docs.google.com/document/d/1euodST-RgGaJqcEioHGVBxlCQO7k1AUq/edit?usp=sharing",
        coordinators: [
            { name: "Roy Mathew", contact: "+91 75940 29419" },
            { name: "Baarathi", contact: "+91 94871 65589" }
        ],
        registrationLink: "https://forms.gle/HTfoGDsToTYZQawD6",
        registrationStatus: "open",
    },
    {
        id: 12,
        title: "Will's Visions",
        subtitle: "Drawing/Painting/Sketching",
        date: "FEB 04",
        time: "02:30 PM Onwards",
        venue: "Round Tables, 8th Floor, Central Block",
        type: "Non-Technical",
        bgImage: WillsVisionsImg,
        venueImage: VenueTableImg,
        description: "Like Will's visions of the Upside Down, express your imagination through art! Showcase your drawing and painting skills on given themes.",
        rules: [
            "Individual participation",
            "Only A3 size paper allowed and participants must bring their own sheet and art supplies",
            "Theme will be revealed on the spot",
            "Time limit: 2 hours",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "https://docs.google.com/document/d/1Y5TkkVQr47FOCTtNOeHuTzR628dllOkr/edit",
        coordinators: [
            { name: "Anamika KS", contact: "+91 73068 21180" },
            { name: "Baarathi", contact: "+91 94871 65589" }
        ],
        registrationLink: "https://forms.gle/As696BhieBbsukjG8",
        registrationStatus: "open",
    },
    {
        id: 10,
        title: "Mr. Clarke's Journal",
        subtitle: "Infobahn (Writing)",
        date: "JAN 31 - FEB 06",
        time: "10:00 PM (Deadline)",
        venue: "Online Submissions",
        type: "Non-Technical",
        bgImage: MrClarkeJournalImg,
        venueImage: VenueClassImg,
        description: "Channel your inner Mr. Clarke and pen down your thoughts! Write articles, stories, or technical blogs that inspire and inform. Let your words create impact.",
        rules: [
            "Individual participation only",
            "Word limit: 250-300 words",
            "Original content only",
            "Submit in PDF format",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "https://docs.google.com/document/d/1TkybOcZJU8x_qJtCgFuiZb-B6rMyKXdfiOp8nW9vcAU/edit?usp=sharing",
        coordinators: [
            { name: "Ekta", contact: "+91 82998 13635" },
            { name: "Neha", contact: "+91 89049 15226" },
            { name: "Baarathi", contact: "+91 94871 65589" }
        ],
        registrationLink: "https://forms.gle/EC7kJ5TZroqsmTuz8",
        registrationStatus: "open",
    },
    {
        id: 1,
        title: "Vecna's Mind Maze",
        subtitle: "IT Quiz",
        date: "FEB 06",
        time: "02:30 PM Onwards",
        venue: "Room 815, 8th Floor, Central Block",
        type: "Technical",
        bgImage: VecnaMindMazeImg,
        venueImage: VenueClassImg,
        description: "If you want to test how sharp your mind really is, step into Vecna's Mind Maze — the IT Quiz of Revelations '26. This team-based technical quiz challenges your logic, technical knowledge, and teamwork through carefully designed rounds that get tougher as you go.",
        rules: [
            "Team of 2 members",
            "3 rounds: Prelims, Semi-finals, Finals",
            "No electronic devices allowed",
            "Decision of judges is final",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Participation", points: 2 },
            { position: "Second Runner-up", points: 3 },
        ],
        rulesLink: "https://docs.google.com/document/d/1NWw4CaUJeDNIBh4Zi69AO_mQTNPFroQf6AJ41rs9rQE/edit?usp=sharing",
        coordinators: [
            { name: "Joshua Joby", contact: "+91 96068 27876" },
            { name: "Abhinav Jain", contact: "+91 92145 44078" }
        ],
        registrationLink: "https://forms.gle/cYGzUH3U622HA46TA",
        registrationStatus: "open",
    },
    {
        id: 2,
        title: "Plan B: Joyce Blueprint",
        subtitle: "IT Manager",
        date: "FEB 18 & 24",
        time: "02:30 PM Onwards",
        venue: "Room 815, 8th Floor, Central Block",
        type: "Technical",
        bgImage: JoyceBlueprintImg,
        venueImage: VenueClassImg,
        description: "Think like Joyce planning to save Will! Manage resources, make strategic decisions, and lead your team to victory in this IT management simulation that tests your business acumen and technical leadership.",
        rules: [
            "Team of 3-4 members",
            // "Multiple business scenarios",
            // "Presentation required",
            // "Decision-making under pressure",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Rahul", contact: "+91 75067 32498" },
            { name: "Abhinav", contact: "+91 92145 44078" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 3,
        title: "Mindscape Design",
        subtitle: "UI/UX",
        date: "FEB 18",
        time: "02:30 PM Onwards",
        venue: "MCA Lab 811, 8th Floor, Central Block",
        type: "Technical",
        bgImage: MindscapeDesignImg,
        venueImage: VenueLabImg,
        description: "Design interfaces that users love! Create stunning UI/UX designs for given problem statements using tools like Figma or Adobe XD. Showcase your creativity and user-centric thinking.",
        rules: [
            "Team of 1-2 members",
            "Problem statements will be provided on the spot",
            "Bring your own laptop",
            "Design tools: Figma/Adobe XD/Sketch",
            "Prototype must be interactive",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Merry Don", contact: "+91 90375 65824" },
            { name: "Abhinav", contact: "+91 92145 44078" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 4,
        title: "Capture the Gate",
        subtitle: "CTF: Capture the Flag",
        date: "FEB 20",
        time: "02:30 PM Onwards",
        venue: "MCA Lab 811, 8th Floor, Central Block",
        type: "Technical",
        bgImage: CapturetheGateImg,
        venueImage: VenueLabImg,
        description: "Break through the gate's defenses! A cybersecurity challenge where you solve puzzles, crack codes, and capture flags. Test your hacking skills in a safe, competitive environment.",
        rules: [
            "Team of 2 members",
            "Bring your own laptop",
            "Categories: To be announced",
            "No attacks on infrastructure",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Baarathi", contact: "+91 94871 65589" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 5,
        title: "Code Red: Demogorgon Debug",
        subtitle: "Coding-Debugging",
        date: "FEB 16",
        time: "02:30 PM Onwards",
        venue: "MCA Lab 811, 8th Floor, Central Block",
        type: "Technical",
        bgImage: CodeRedDemogorgonImg,
        venueImage: VenueLabImg,
        description: "Hunt down the bugs like hunting a Demogorgon! Find and fix errors in code snippets across multiple programming languages. Test your debugging skills under pressure.",
        rules: [
            "Team of 2 members",
            "Languages: To be announced",
            "Multiple rounds",
            "No internet access during event",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Paavan", contact: "+91 76919 40657" },
            { name: "Abhinav Jain", contact: "+91 92145 44078" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 6,
        title: "The Prompt Flayer",
        subtitle: "Prompt Engineering",
        date: "FEB 17",
        time: "02:30 PM Onwards",
        venue: "Room 815, 8th Floor, Central Block",
        type: "Technical",
        bgImage: ThePromptFlayerImg,
        venueImage: VenueClassImg,
        description: "Master the art of AI communication! Craft the perfect prompts to solve complex problems using AI tools like ChatGPT, Claude, and more. The future belongs to prompt engineers!",
        rules: [
            "Team of 2 members",
            "3 rounds of increasing difficulty",
            "Limited Internet access provided",
            "Time-bound challenges",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "2nd Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Xavier Amith", contact: "+91 73395 18912" },
            { name: "Baarathi", contact: "+91 94871 65589" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 7,
        title: "Hawkins Arena - Cricket",
        subtitle: "Cricket (Mixed)",
        date: "TBD",
        time: "07:30 AM Onwards",
        venue: "To be Announced",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        venueImage: VenueGround1Img,
        description: "Step into the Hawkins Arena for an action-packed cricket match! Form your team and compete in this exciting mixed cricket tournament.",
        rules: [
            "Mixed team participation",
            "1 Faculty, 2 Girls, 6 Boys per team (Mandatory)",
            "Knockout Tournament format",
            "Standard cricket rules apply other than LBW and Legbyes",
            "Decision of umpires & organising committee is final",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Abhishek", contact: "" },
            { name: "Abhinav", contact: "+91 92145 44078" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 13,
        title: "Hawkins Arena - Football",
        subtitle: "Football (Mixed)",
        date: "TBD",
        time: "07:30 AM Onwards",
        venue: "Dharmaram / Football Ground",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        venueImage: VenueGround2Img,
        description: "Kick off your competitive spirit in the Hawkins Arena football tournament! Show your skills on the field and lead your team to victory.",
        rules: [
            "Mixed team participation",
            "Tournament format",
            "Standard football rules apply",
            "Decision of referees is final",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Abhinav Jain", contact: "+91 92145 44078" },
            { name: "Mohit", contact: "" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 14,
        title: "Hawkins Arena - Table Tennis (Boys)",
        subtitle: "Table Tennis Singles - Boys",
        date: "TBD",
        time: "07:30 AM Onwards",
        venue: "Chrispo Arena",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        venueImage: VenueSports1Img,
        description: "Test your reflexes and precision in the Table Tennis singles tournament for boys at Hawkins Arena! Fast-paced action awaits.",
        rules: [
            "Individual participation (Boys)",
            "Knockout format",
            "Standard TT rules apply",
            "Best of 3 sets",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all male MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Abhinav Jain", contact: "+91 92145 44078" },
            { name: "Slaven", contact: "" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 15,
        title: "Hawkins Arena - Table Tennis (Girls)",
        subtitle: "Table Tennis Singles - Girls",
        date: "TBD",
        time: "07:30 AM Onwards",
        venue: "Chrispo Arena",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        venueImage: VenueSports1Img,
        description: "Test your reflexes and precision in the Table Tennis singles tournament for girls at Hawkins Arena! Fast-paced action awaits.",
        rules: [
            "Individual participation (Girls)",
            "Knockout format",
            "Standard TT rules apply",
            "Best of 3 sets",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all female MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Abhinav Jain", contact: "+91 92145 44078" },
            { name: "Slaven", contact: "" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 16,
        title: "Hawkins Arena - Badminton",
        subtitle: "Badminton (Mixed)",
        date: "TBD",
        time: "07:30 AM Onwards",
        venue: "Chrispo Arena",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        venueImage: VenueSports2Img,
        description: "Smash your way to victory in the Hawkins Arena badminton tournament! Open for mixed participation.",
        rules: [
            "Mixed participation",
            "Knockout format",
            "Standard badminton rules apply",
            "Best of 3 sets",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Abhinav Jain", contact: "+91 92145 44078" },
            { name: "Slaven", contact: "" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 8,
        title: "The Snow Ball Showdown",
        subtitle: "Cosplay Performance",
        date: "FEB 19",
        time: "03:00 PM Onwards",
        venue: "Campus View",
        type: "Non-Technical",
        bgImage: TheSnowBallShowdownImg,
        venueImage: VenueGround1Img,
        description: "Transform into your favorite character! Whether it's Eleven, Hopper, or the Demogorgon - bring your best cosplay to the Snow Ball and shine on stage.",
        rules: [
            "Individual participation",
            "Costumes must be self-made or customized",
            "Props allowed (no sharp objects)",
            "5-minute stage presentation",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Participation", points: 2 },
            { position: "Second Runner-up", points: 3 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Baarathi", contact: "" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 11,
        title: "D&D: Dumb Deeds",
        subtitle: "Dumb Charades",
        date: "FEB 23",
        time: "02:30 PM Onwards",
        venue: "Room 815, 8th Floor, Central Block",
        type: "Non-Technical",
        bgImage: DumbDeedsImg,
        venueImage: VenueClassImg,
        description: "No talking allowed! Act out movies, shows, and tech terms in this hilarious game of dumb charades with a Stranger Things twist. Bring your acting A-game!",
        rules: [
            "Team of 4 members",
            "Categories: Movies, TV Shows, Tech Terms",
            "Time limit per round: 2 minutes",
            "No props or sounds allowed",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc AIML students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Second Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Abhinav Jain", contact: "+91 92145 44078" },
            { name: "Parthiv", contact: "" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
    {
        id: 18,
        title: "Project 011: Appathon",
        subtitle: "Appathon (Alternative)",
        date: "FEB 20",
        time: "02:30 PM Onwards",
        venue: "MCA Lab 811, 8th Floor, Central Block",
        type: "Technical",
        bgImage: CapturetheGateImg,
        venueImage: VenueLabImg,
        description: "Build innovative applications in this exciting app development marathon! Create solutions to real-world problems using your coding and design skills.",
        rules: [
            "Team of 2-4 members",
            "Bring your own laptop",
            "Any technology stack allowed",
            "Working prototype required",
            "Rules and Regulations are subject to change at any point."
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: [
            "1st Position",
            "2nd Position",
        ],
        pointSystem: [
            { position: "Winner", points: 7 },
            { position: "Runner-up", points: 5 },
            { position: "Second Runner-up", points: 3 },
            { position: "Participation", points: 2 },
        ],
        rulesLink: "",
        coordinators: [
            { name: "Baarathi", contact: "" },
            { name: "I Blessy", contact: "" }
        ],
        registrationLink: "",
        registrationStatus: "coming_soon",
    },
];

// Create EVENT_DETAILS object for easy lookup by ID
export const EVENT_DETAILS = events.reduce((acc, event) => {
    acc[event.id] = event;
    return acc;
}, {});

// Schedule data - sorted by date for schedule page
export const SCHEDULE_DATA = [
    {
        id: 'e1',
        label: 'JAN 31 - FEB 06',
        date: 'ONGOING',
        title: 'THE JOURNAL',
        events: [
            { id: 10, time: '10:00 PM (Deadline)', title: "Mr. Clarke's Journal (Infobahn)", venue: 'Online Submissions', type: 'Non-Technical' },
        ]
    },
    {
        id: 'e2',
        label: 'JAN 31 - FEB 03',
        date: 'ONGOING',
        title: 'THE SNIPPETS',
        events: [
            { id: 9, time: '10:00 PM (Deadline)', title: 'Scoops Troop Snippets (Reel Making)', venue: 'Entire Campus / Online Submissions', type: 'Non-Technical' },
        ]
    },
    {
        id: 'e3',
        label: 'FEB 02',
        date: 'SUNDAY',
        title: 'THE ARENA - CHESS',
        events: [
            { id: 17, time: '02:30 PM Onwards', title: 'Hawkins Arena - Chess (Individual)', venue: 'Online / Room 815 + Room 814', type: 'Non-Technical' },
        ]
    },
    {
        id: 'e4',
        label: 'FEB 04',
        date: 'TUESDAY',
        title: 'THE VISIONS',
        events: [
            { id: 12, time: '02:30 PM Onwards', title: "Will's Visions (Drawing/Painting/Sketching)", venue: 'Round Tables 8th Floor', type: 'Non-Technical' },
        ]
    },
    {
        id: 'e5',
        label: 'FEB 06',
        date: 'THURSDAY',
        title: 'THE MIND MAZE',
        events: [
            { id: 1, time: '02:30 PM Onwards', title: "Vecna's Mind Maze (IT Quiz)", venue: 'Room 815', type: 'Technical' },
        ]
    },
    {
        id: 'e6',
        label: 'FEB 16',
        date: 'SUNDAY',
        title: 'CODE RED',
        events: [
            { id: 5, time: '02:30 PM Onwards', title: 'Code Red: Demogorgon Debug (Coding-Debugging)', venue: 'MCA Lab 811', type: 'Technical' },
        ]
    },
    {
        id: 'e7',
        label: 'FEB 17',
        date: 'MONDAY',
        title: 'THE FLAYER',
        events: [
            { id: 6, time: '02:30 PM Onwards', title: 'The Prompt Flayer (Prompt Engineering)', venue: 'Room 815', type: 'Technical' },
        ]
    },
    {
        id: 'e8',
        label: 'FEB 18',
        date: 'TUESDAY',
        title: 'THE DESIGN & BLUEPRINT',
        events: [
            { id: 3, time: '01:30 PM Onwards', title: 'Mindscape Design (UI/UX)', venue: 'MCA Lab 811', type: 'Technical' },
            { id: 2, time: '02:30 PM Onwards', title: 'Plan B: Joyce Blueprint (IT Manager) - Round 1', venue: 'Room 815', type: 'Technical' },
        ]
    },
    {
        id: 'e9',
        label: 'FEB 19',
        date: 'WEDNESDAY',
        title: 'THE SHOWDOWN',
        events: [
            { id: 8, time: '03:00 PM Onwards', title: 'The Snow Ball Showdown (Cosplay Performance)', venue: 'Campus View', type: 'Non-Technical' },
        ]
    },
    {
        id: 'e10',
        label: 'FEB 20',
        date: 'THURSDAY',
        title: 'THE GATE & APPATHON',
        events: [
            { id: 4, time: '02:30 PM Onwards', title: 'Capture the Gate (CTF)', venue: 'MCA Lab 811', type: 'Technical' },
            { id: 18, time: '02:30 PM Onwards', title: 'Project 011: Appathon (Alternative)', venue: 'MCA Lab 811', type: 'Technical' },
        ]
    },
    {
        id: 'e11',
        label: 'FEB 23',
        date: 'SUNDAY',
        title: 'DUMB DEEDS',
        events: [
            { id: 11, time: '02:30 PM Onwards', title: 'D&D: Dumb Deeds (Dumb Charades)', venue: 'Room 815', type: 'Non-Technical' },
        ]
    },
    {
        id: 'e12',
        label: 'FEB 24',
        date: 'MONDAY',
        title: 'THE BLUEPRINT FINAL',
        events: [
            { id: 2, time: '02:30 PM Onwards', title: 'Plan B: Joyce Blueprint (IT Manager) - Finals', venue: 'Room 815', type: 'Technical' },
        ]
    },
    {
        id: 'e13',
        label: 'TBD',
        date: 'SPORTS',
        title: 'HAWKINS ARENA - SPORTS',
        events: [
            { id: 7, time: '07:30 AM Onwards', title: 'Hawkins Arena - Cricket (Mixed)', venue: 'Dharmaram / Football Ground', type: 'Non-Technical' },
            { id: 13, time: '07:30 AM Onwards', title: 'Hawkins Arena - Football (Mixed)', venue: 'Dharmaram / Football Ground', type: 'Non-Technical' },
            { id: 14, time: '07:30 AM Onwards', title: 'Hawkins Arena - Table Tennis (Boys)', venue: 'Chrispo Arena', type: 'Non-Technical' },
            { id: 15, time: '07:30 AM Onwards', title: 'Hawkins Arena - Table Tennis (Girls)', venue: 'Chrispo Arena', type: 'Non-Technical' },
            { id: 16, time: '07:30 AM Onwards', title: 'Hawkins Arena - Badminton (Mixed)', venue: 'Chrispo Arena', type: 'Non-Technical' },
        ]
    }
];

export default events;
