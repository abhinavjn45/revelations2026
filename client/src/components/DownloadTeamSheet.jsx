import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { TEAMS_DATA } from '../data/teamData';

export default function DownloadTeamSheet() {
    const navigate = useNavigate();

    useEffect(() => {
        // Create workbook
        const workbook = XLSX.utils.book_new();

        // Create a summary sheet with all teams
        const summaryData = TEAMS_DATA.map(team => ({
            'Team Name': team.name,
            'Tagline': team.tagline,
            'Total Members': team.students.length,
            'Description': team.description
        }));
        const summarySheet = XLSX.utils.json_to_sheet(summaryData);
        XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');

        // Create a sheet for each team
        TEAMS_DATA.forEach(team => {
            const teamData = team.students.map(student => ({
                'Sl. No': student.slNo,
                'Name': student.name,
                'Register Number': student.regNo,
                'Section': student.section
            }));

            const teamSheet = XLSX.utils.json_to_sheet(teamData);

            // Truncate sheet name to 31 chars (Excel limit)
            const sheetName = team.name.substring(0, 31);
            XLSX.utils.book_append_sheet(workbook, teamSheet, sheetName);
        });

        // Create a combined "All Students" sheet
        const allStudents = [];
        TEAMS_DATA.forEach(team => {
            team.students.forEach(student => {
                allStudents.push({
                    'Team': team.name,
                    'Sl. No': student.slNo,
                    'Name': student.name,
                    'Register Number': student.regNo,
                    'Section': student.section
                });
            });
        });
        const allStudentsSheet = XLSX.utils.json_to_sheet(allStudents);
        XLSX.utils.book_append_sheet(workbook, allStudentsSheet, 'All Students');

        // Generate file and trigger download
        const fileName = `Revelations_2026_Team_Sheet.xlsx`;
        XLSX.writeFile(workbook, fileName);

        // Redirect back to home after download
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
            <div className="text-center">
                <div className="animate-pulse mb-4">
                    <svg className="w-16 h-16 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h1 className="font-stranger text-3xl text-red-600 mb-2">DOWNLOADING...</h1>
                <p className="font-typewriter text-gray-400 text-sm">
                    Your team sheet is being prepared
                </p>
            </div>
        </div>
    );
}
