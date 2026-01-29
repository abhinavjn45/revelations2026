import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import teamSheetFile from '../assets/csv/Team Details Sheet.xlsx';

export default function DownloadTeamSheet() {
    const navigate = useNavigate();

    useEffect(() => {
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = teamSheetFile;
        link.download = 'Revelations_2026_Team_Details.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Redirect back to home after download
        setTimeout(() => {
            navigate('/');
        }, 1500);
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
                    Your team sheet is being downloaded
                </p>
            </div>
        </div>
    );
}
