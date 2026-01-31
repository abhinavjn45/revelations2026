import React, { useState } from 'react';

// Example data, replace with your actual data source or import
const studentsData = [
  { name: 'John Doe', regNo: 'REG001', division: 'A' },
  { name: 'Jane Smith', regNo: 'REG002', division: 'B' },
  // ... more students
];

const StudentSearchPage = () => {
  const [search, setSearch] = useState('');

  const filtered = studentsData.filter(
    s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.regNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-red-600 font-stranger">Student Search</h1>
      <input
        type="text"
        placeholder="Search by Name or Register Number..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-6 px-4 py-2 w-full max-w-md rounded border-2 border-red-600 bg-black text-white focus:outline-none focus:border-red-400"
      />
      <div className="overflow-x-auto">
        <table className="w-full border border-red-600 rounded-lg">
          <thead>
            <tr className="bg-red-700 text-white">
              <th className="py-2 px-4 border-b border-red-600">Sr. No.</th>
              <th className="py-2 px-4 border-b border-red-600">Name of Student</th>
              <th className="py-2 px-4 border-b border-red-600">Register Number</th>
              <th className="py-2 px-4 border-b border-red-600">Division Name</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-400">No results found.</td>
              </tr>
            ) : (
              filtered.map((s, idx) => (
                <tr key={s.regNo} className="hover:bg-red-900 transition">
                  <td className="py-2 px-4 border-b border-red-600">{idx + 1}</td>
                  <td className="py-2 px-4 border-b border-red-600">{s.name}</td>
                  <td className="py-2 px-4 border-b border-red-600">{s.regNo}</td>
                  <td className="py-2 px-4 border-b border-red-600">{s.division}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentSearchPage;
