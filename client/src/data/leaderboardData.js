// src/data/leaderboardData.js
// Centralized leaderboard data for teams

// Google Sheet ID from the URL
const SHEET_ID = '1fRkNBb8K2ryBG_E2uUKyBPvxZjBxFanZErhnUjs8J7A';
const GID = '926862716';

// Fallback data in case fetch fails
const fallbackData = [
  { team: 'Mind Flayers', points: 0, participation: 0, winner: 0, runnerUp: 0, secondRunnerUp: 0 },
  { team: 'Hawkins Labs', points: 0, participation: 0, winner: 0, runnerUp: 0, secondRunnerUp: 0 },
  { team: 'The Demogorgans', points: 0, participation: 0, winner: 0, runnerUp: 0, secondRunnerUp: 0 },
  { team: 'The Upside Down', points: 0, participation: 0, winner: 0, runnerUp: 0, secondRunnerUp: 0 },
  { team: 'The Signal Seekers', points: 0, participation: 0, winner: 0, runnerUp: 0, secondRunnerUp: 0 },
  { team: 'Starcourt Squad', points: 0, participation: 0, winner: 0, runnerUp: 0, secondRunnerUp: 0 },
];

// Function to fetch leaderboard data from Google Sheets
export async function fetchLeaderboardData() {
  try {
    // Use Google Sheets CSV export URL
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }
    
    const csvText = await response.text();
    const rows = csvText.split('\n').map(row => {
      // Handle CSV parsing with potential commas in values
      const values = [];
      let current = '';
      let inQuotes = false;
      
      for (let char of row) {
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current.trim());
      return values;
    });
    
    // Skip header row (index 0)
    const dataRows = rows.slice(1).filter(row => row.length >= 7 && row[1]);
    
    return dataRows.map(row => ({
      team: row[1] || '',                           // Division Name (Column B)
      participation: parseInt(row[2]) || 0,         // Participation (Column C)
      winner: parseInt(row[3]) || 0,                // Winner (Column D)
      runnerUp: parseInt(row[4]) || 0,              // Runner-Up (Column E)
      secondRunnerUp: parseInt(row[5]) || 0,        // 2nd Runner Up (Column F)
      points: parseInt(row[6]) || 0,                // Total (Column G)
    }));
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return fallbackData;
  }
}

// Default export for backward compatibility
const leaderboardData = fallbackData;
export default leaderboardData;