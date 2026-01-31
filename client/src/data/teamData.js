// Team data mapping IDs to CSV files and parsed data
import henryImg from '../assets/images/homepage/henry001-removebg.png';
import vecnaImg from '../assets/images/homepage/vecna.png';
import willImg from '../assets/images/homepage/will.png';
import heroMainImg from '../assets/images/homepage/hero-main.png';

// Import CSV files as raw text
import mindFlayersCSV from '../assets/csv/Mind Flayers.csv?raw';
import hawkinsLabsCSV from '../assets/csv/Hawkins labs.csv?raw';
import demogorgansCSV from '../assets/csv/The Demogorgans .csv?raw';
import upsideDownCSV from '../assets/csv/The upside down.csv?raw';
import signalSeekersCSV from '../assets/csv/The Signal Seekers .csv?raw';
import starcourtSquadCSV from '../assets/csv/Starcourt Squad.csv?raw';

// Parse CSV to extract student data
function parseCSV(csvText) {
    const lines = csvText.split(/\r?\n/).filter(line => line.trim());
    const students = [];

    for (const line of lines) {
        const columns = line.split(',');
        // Check if this is a student row (first column is a number)
        const slNo = columns[0]?.trim();
        if (slNo && !isNaN(parseInt(slNo)) && parseInt(slNo) > 0) {
            const section = columns[1]?.trim();
            const regNo = columns[2]?.trim();
            const name = columns[3]?.trim();

            if (section && regNo && name) {
                students.push({
                    slNo: parseInt(slNo),
                    section,
                    regNo,
                    name
                });
            }
        }
    }

    return students;
}

// Team data with parsed CSV
export const TEAMS_DATA = [
    {
        id: 1,
        name: 'Mind Flayers',
        tagline: 'We control the system.',
        logo: henryImg,
        slug: 'mind-flayers',
        description: 'The Mind Flayers are the strategic masterminds of Revelations. We control the system with precision and power.',
        students: parseCSV(mindFlayersCSV),
        groupLink: "https://chat.whatsapp.com/LSIxBSnLsc19fbh7OgGvBp",
    },
    {
        id: 2,
        name: 'Hawkins Labs',
        tagline: 'Experiment. Break. Innovate.',
        logo: vecnaImg,
        slug: 'hawkins-labs',
        description: 'Hawkins Labs is where experiments happen. We break boundaries and innovate beyond limits.',
        students: parseCSV(hawkinsLabsCSV),
        groupLink: "https://chat.whatsapp.com/Kc3d4ZsArvaCZntIwG62bs",
    },
    {
        id: 3,
        name: 'The Demogorgans',
        tagline: 'Code. Conquer. Consume.',
        logo: willImg,
        slug: 'the-demogorgans',
        description: 'The Demogorgans are relentless. We code, we conquer, and we consume all challenges.',
        students: parseCSV(demogorgansCSV),
        groupLink: "https://chat.whatsapp.com/KSE6sAwaOCmLElPuGvkt79",
    },
    {
        id: 4,
        name: 'The Upside Down',
        tagline: 'We live in the parallel network',
        logo: heroMainImg,
        slug: 'the-upside-down',
        description: 'The Upside Down operates in the shadows of the parallel network, unseen but always present.',
        students: parseCSV(upsideDownCSV),
        groupLink: "https://chat.whatsapp.com/IlUjSMx6JrtEbRhid58RuF",
    },
    {
        id: 5,
        name: 'The Signal Seekers',
        tagline: 'Searching for hidden signals.',
        logo: henryImg,
        slug: 'the-signal-seekers',
        description: 'The Signal Seekers are always tuned in, searching for hidden signals others miss.',
        students: parseCSV(signalSeekersCSV),
        groupLink: "https://chat.whatsapp.com/GBMTJHYmsUB8ElXFWw8Wfj",
    },
    {
        id: 6,
        name: 'Starcourt Squad',
        tagline: 'Style meets science.',
        logo: vecnaImg,
        slug: 'starcourt-squad',
        description: 'Starcourt Squad brings style to science. Fashion-forward and technically brilliant.',
        students: parseCSV(starcourtSquadCSV),
        groupLink: "https://chat.whatsapp.com/Jtbin3pS0oG5awTLniO9O6",
    },
];

export function getTeamBySlug(slug) {
    return TEAMS_DATA.find(team => team.slug === slug);
}

export function getTeamById(id) {
    return TEAMS_DATA.find(team => team.id === id);
}
