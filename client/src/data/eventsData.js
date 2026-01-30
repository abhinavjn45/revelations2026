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

// Event data with images and detailed info
export const events = [
    {
        id: 1,
        title: "Vecna's Mind Maze",
        subtitle: "IT Quiz",
        date: "FEB 06",
        time: "02:30 PM Onwards",
        venue: "Room 815",
        type: "Technical",
        bgImage: VecnaMindMazeImg,
        venueImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        description: "Enter the mind of Vecna and navigate through layers of technical puzzles. Test your knowledge across programming, databases, networking, and more in this thrilling IT quiz competition.",
        rules: [
            "Team of 2 members",
            "3 rounds: Prelims, Semi-finals, Finals",
            "No electronic devices allowed",
            "Decision of judges is final"
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Joshua Joby", "Abhinav Jain"]
    },
    {
        id: 2,
        title: "Plan B: Joyce Blueprint",
        subtitle: "IT Manager",
        date: "FEB 18 & 24",
        time: "02:30 PM Onwards",
        venue: "Room 815",
        type: "Technical",
        bgImage: JoyceBlueprintImg,
        venueImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        description: "Think like Joyce planning to save Will! Manage resources, make strategic decisions, and lead your team to victory in this IT management simulation.",
        rules: [
            "Team of 3-4 members",
            "Multiple business scenarios",
            "Presentation required",
            "Decision-making under pressure"
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹4000 | 2nd: ₹2500 | 3rd: ₹1500",
        coordinators: ["Rahul", "Abhinav Jain"]
    },
    {
        id: 3,
        title: "Mindscape Design",
        subtitle: "UI/UX",
        date: "FEB 18",
        time: "02:30 PM Onwards",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: MindscapeDesignImg,
        venueImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        description: "Design interfaces that users love! Create stunning UI/UX designs for given problem statements using tools like Figma or Adobe XD.",
        rules: [
            "Team of 1-2 members",
            "Bring your own laptop",
            "Design tools: Figma/Adobe XD/Sketch",
            "Prototype must be interactive"
        ],
        eligibility: "Open to all design enthusiasts",
        prizes: "1st: ₹3500 | 2nd: ₹2500 | 3rd: ₹1500",
        coordinators: ["Merry Don"]
    },
    {
        id: 4,
        title: "Capture the Gate",
        subtitle: "CTF: Capture the Flag",
        date: "FEB 20",
        time: "02:30 PM Onwards",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: CapturetheGateImg,
        venueImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        description: "Break through the gate's defenses! A cybersecurity challenge where you solve puzzles, crack codes, and capture flags.",
        rules: [
            "Team of 2-3 members",
            "Bring your own laptop",
            "Categories: Web, Crypto, Forensics, Reversing",
            "No attacks on infrastructure"
        ],
        eligibility: "Open to cybersecurity enthusiasts",
        prizes: "1st: ₹5000 | 2nd: ₹3000 | 3rd: ₹2000",
        coordinators: ["Baarathi", "I Blessy"]
    },
    {
        id: 5,
        title: "Code Red: Demogorgon Debug",
        subtitle: "Coding-Debugging",
        date: "FEB 16",
        time: "02:30 PM Onwards",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: CodeRedDemogorgonImg,
        venueImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        description: "Hunt down the bugs like hunting a Demogorgon! Find and fix errors in code snippets across multiple programming languages.",
        rules: [
            "Individual participation",
            "Languages: C, Java, Python",
            "Multiple rounds",
            "No internet access during event"
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Abhinav Jain", "Paavan"]
    },
    {
        id: 6,
        title: "The Prompt Flayer",
        subtitle: "Prompt Engineering",
        date: "FEB 17",
        time: "02:30 PM Onwards",
        venue: "Room 815",
        type: "Technical",
        bgImage: ThePromptFlayerImg,
        venueImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        description: "Master the art of AI communication! Craft the perfect prompts to solve complex problems using AI tools like ChatGPT, Claude, and more.",
        rules: [
            "Individual participation",
            "3 rounds of increasing difficulty",
            "Internet access provided",
            "Time-bound challenges"
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Baarathi", "Xavier Amith"]
    },
    {
        id: 7,
        title: "Hawkins Arena",
        subtitle: "Sports",
        date: "FEB 02 (Chess) + TBD",
        time: "02:30 PM / 07:30 PM Onwards",
        venue: "Multiple Venues",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        venueImage: "https://images.unsplash.com/photo-1461896836934-28f9c37e9eb2?w=800&q=80",
        description: "Step into the Hawkins Arena for an action-packed sports extravaganza! Compete in various sports events and prove your athletic prowess.",
        rules: [
            "Cricket (Mixed) - 07:30 PM - Dharmaram / Football Ground - Abhishek Kumar",
            "Football (Mixed) - 07:30 PM - Dharmaram / Football Ground - Abhinav Jain, Mohit",
            "Badminton (Mixed) - 07:30 PM - Chrispo Arena",
            "Chess (Individual) - FEB 02 - 02:30 PM - Online / Room 815 + Room 814 - Omkaar"
        ],
        eligibility: "Open to all department students",
        prizes: "Varies by sport category",
        coordinators: ["Abhishek Kumar", "Abhinav Jain", "Mohit", "Omkaar"]
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
        venueImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
        description: "Transform into your favorite character! Whether it's Eleven, Hopper, or the Demogorgon - bring your best cosplay to the Snow Ball.",
        rules: [
            "Individual participation",
            "Costumes must be self-made or customized",
            "Props allowed (no sharp objects)",
            "5-minute stage presentation"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Baarathi"]
    },
    {
        id: 9,
        title: "Scoops Troop Snippets",
        subtitle: "Reel Making",
        date: "FEB 03",
        time: "10:00 PM (Deadline)",
        venue: "Entire Campus / Online Submissions",
        type: "Non-Technical",
        bgImage: ScoopsTroopSnippetsImg,
        venueImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
        description: "Unleash your creativity and storytelling skills! Create engaging reels that capture the essence of college life, technology, or the Stranger Things theme.",
        rules: [
            "Individual or team of 2",
            "Reel duration: 30-60 seconds",
            "Must include event hashtag",
            "No copyrighted music without permission"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹2500 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Baarathi", "Roy Mathew"]
    },
    {
        id: 10,
        title: "Mr. Clarke's Journal",
        subtitle: "Infobahn (Writing)",
        date: "JAN 31 - FEB 07",
        time: "10:00 PM (Deadline)",
        venue: "Online Submissions",
        type: "Non-Technical",
        bgImage: MrClarkeJournalImg,
        venueImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
        description: "Channel your inner Mr. Clarke and pen down your thoughts! Write articles, stories, or technical blogs that inspire and inform.",
        rules: [
            "Individual participation only",
            "Word limit: 500-1500 words",
            "Original content only",
            "Submit in PDF format"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹2000 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Infobahn Team"]
    },
    {
        id: 11,
        title: "D&D: Dumb Deeds",
        subtitle: "Dumb Charades",
        date: "FEB 23",
        time: "02:30 PM Onwards",
        venue: "Room 815",
        type: "Non-Technical",
        bgImage: DumbDeedsImg,
        venueImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        description: "No talking allowed! Act out movies, shows, and tech terms in this hilarious game of dumb charades with a Stranger Things twist.",
        rules: [
            "Team of 4 members",
            "Categories: Movies, TV Shows, Tech Terms",
            "Time limit per round: 2 minutes",
            "No props or sounds allowed"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹2500 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Abhinav Jain", "Parthiv"]
    },
    {
        id: 12,
        title: "Will's Visions",
        subtitle: "Drawing/Painting/Sketching",
        date: "FEB 04",
        time: "02:30 PM Onwards",
        venue: "Round Tables 8th Floor",
        type: "Non-Technical",
        bgImage: WillsVisionsImg,
        venueImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
        description: "Like Will's visions of the Upside Down, express your imagination through art! Showcase your drawing and painting skills on given themes.",
        rules: [
            "Individual participation",
            "Materials will be provided",
            "Theme revealed on spot",
            "Time limit: 2 hours"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹2000 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Baarathi", "Anamika KS"]
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
        label: 'JAN 31 - FEB 07',
        date: 'ONGOING',
        title: 'THE JOURNAL',
        events: [
            { id: 10, time: '10:00 PM (Deadline)', title: "Mr. Clarke's Journal (Infobahn)", venue: 'Online Submissions', type: 'Non-Technical' },
        ]
    },
    {
        id: 'e2',
        label: 'FEB 02',
        date: 'SUNDAY',
        title: 'THE ARENA',
        events: [
            { id: 7, time: '02:30 PM Onwards', title: 'Hawkins Arena - Chess (Individual)', venue: 'Online / Room 815 + Room 814', type: 'Non-Technical' },
        ]
    },
    {
        id: 'e3',
        label: 'FEB 03',
        date: 'MONDAY',
        title: 'THE SNIPPETS',
        events: [
            { id: 9, time: '10:00 PM (Deadline)', title: 'Scoops Troop Snippets (Reel Making)', venue: 'Entire Campus / Online Submissions', type: 'Non-Technical' },
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
            { id: 3, time: '02:30 PM Onwards', title: 'Mindscape Design (UI/UX)', venue: 'MCA Lab 811', type: 'Technical' },
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
        title: 'THE GATE',
        events: [
            { id: 4, time: '02:30 PM Onwards', title: 'Capture the Gate (CTF)', venue: 'MCA Lab 811', type: 'Technical' },
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
    }
];

export default events;
