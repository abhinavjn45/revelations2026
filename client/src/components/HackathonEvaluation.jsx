import React, { useState } from "react";

const teamOptions = Array.from({ length: 50 }, (_, i) => i + 1);

function getToday() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

export default function HackathonEvaluation() {
  const [teamNumber, setTeamNumber] = useState("");
  const [form, setForm] = useState({
    problemStatementId: "",
    judgeName: "",
    date: getToday(),
    originality: 0,
    alignment: 0,
    impact: 0,
    functionality: 0,
    codeQuality: 0,
    techStack: 0,
    uiUx: 0,
    presentation: 0,
    deployment: 0,
    complexity: 0,
    teamwork: 0,
    strength: "",
    improvement: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Section totals
  const innovationTotal = form.originality + form.alignment + form.impact;
  const implementationTotal = form.functionality + form.codeQuality + form.techStack;
  const designTotal = form.uiUx;
  const presentationTotal = form.presentation;
  const mainTotal = innovationTotal + implementationTotal + designTotal + presentationTotal;
  const bonusTotal = form.deployment + form.complexity + form.teamwork;
  const grandTotal = mainTotal + bonusTotal;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Redirect with GET params
    const params = new URLSearchParams({
      teamNumber,
      ...form,
      innovationTotal,
      implementationTotal,
      designTotal,
      presentationTotal,
      mainTotal,
      bonusTotal,
      grandTotal
    }).toString();
    window.location.href = `https://your-server.com/hackathon-eval?${params}`;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900 via-[#1a0505]/60 to-gray-900 border border-red-900/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(220,38,38,0.15)]">
        <h1 className="font-stranger text-4xl text-red-600 mb-8 text-center">Hackathon Evaluation</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 font-typewriter mb-2">Select Team Number</label>
            <select
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 font-typewriter"
              value={teamNumber}
              onChange={(e) => setTeamNumber(e.target.value)}
              required
            >
              <option value="">Select...</option>
              {teamOptions.map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {teamNumber && (
            <>
              <div className="mb-4">
                <label className="block text-gray-300 font-typewriter mb-2">Problem Statement ID</label>
                <input
                  type="text"
                  name="problemStatementId"
                  className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 font-typewriter"
                  value={form.problemStatementId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 font-typewriter mb-2">Judge Name</label>
                <input
                  type="text"
                  name="judgeName"
                  className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 font-typewriter"
                  value={form.judgeName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 font-typewriter mb-2">Date</label>
                <input
                  type="text"
                  name="date"
                  className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 font-typewriter"
                  value={form.date}
                  readOnly
                />
              </div>

              {/* Innovation & Relevance */}
              <h2 className="font-stranger text-xl text-red-400 mt-8 mb-2">Innovation & Relevance (Marks out of 30)</h2>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Originality & Creativity (out of 10)</label>
                <input type="number" name="originality" min="0" max="10" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.originality} onChange={handleNumberChange} required />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Alignment with Problem Statement & SDGs (out of 10)</label>
                <input type="number" name="alignment" min="0" max="10" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.alignment} onChange={handleNumberChange} required />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Real World Impact Potential (out of 10)</label>
                <input type="number" name="impact" min="0" max="10" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.impact} onChange={handleNumberChange} required />
              </div>
              <div className="mb-4 text-right text-red-300 font-typewriter">Section Total: {innovationTotal} / 30</div>

              {/* Implementation & Technicality */}
              <h2 className="font-stranger text-xl text-red-400 mt-8 mb-2">Implementation & Technicality (Marks out of 40)</h2>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Functionality (out of 20)</label>
                <input type="number" name="functionality" min="0" max="20" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.functionality} onChange={handleNumberChange} required />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Code Quality (out of 10)</label>
                <input type="number" name="codeQuality" min="0" max="10" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.codeQuality} onChange={handleNumberChange} required />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Tech Stack & AI (out of 10)</label>
                <input type="number" name="techStack" min="0" max="10" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.techStack} onChange={handleNumberChange} required />
              </div>
              <div className="mb-4 text-right text-red-300 font-typewriter">Section Total: {implementationTotal} / 40</div>

              {/* Design & User Experience */}
              <h2 className="font-stranger text-xl text-red-400 mt-8 mb-2">Design & User Experience (Marks out of 20)</h2>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">UI aesthetics, usability, navigation, responsiveness (out of 20)</label>
                <input type="number" name="uiUx" min="0" max="20" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.uiUx} onChange={handleNumberChange} required />
              </div>
              <div className="mb-4 text-right text-red-300 font-typewriter">Section Total: {designTotal} / 20</div>

              {/* Presentation & Impact */}
              <h2 className="font-stranger text-xl text-red-400 mt-8 mb-2">Presentation & Impact (Marks out of 10)</h2>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Clarity, demo quality, team communication, vision (out of 10)</label>
                <input type="number" name="presentation" min="0" max="10" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.presentation} onChange={handleNumberChange} required />
              </div>
              <div className="mb-4 text-right text-red-300 font-typewriter">Section Total: {presentationTotal} / 10</div>

              {/* Main Total */}
              <div className="mb-6 text-right text-red-400 font-stranger text-lg">Total: {mainTotal} / 100</div>

              {/* Bonus Points */}
              <h2 className="font-stranger text-xl text-yellow-400 mt-8 mb-2">Bonus Points (Optional)</h2>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Deployment (live, stable hosting) (out of 5)</label>
                <input type="number" name="deployment" min="0" max="5" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.deployment} onChange={handleNumberChange} />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Exceptional Complexity (advanced implementation) (out of 3)</label>
                <input type="number" name="complexity" min="0" max="3" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.complexity} onChange={handleNumberChange} />
              </div>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Outstanding Teamwork (visible collaboration) (out of 2)</label>
                <input type="number" name="teamwork" min="0" max="2" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.teamwork} onChange={handleNumberChange} />
              </div>
              <div className="mb-4 text-right text-yellow-300 font-typewriter">Bonus Total: {bonusTotal} / 10</div>

              {/* Grand Total */}
              <div className="mb-6 text-right text-yellow-400 font-stranger text-lg">Grand Total: {grandTotal} / 110</div>

              {/* Comments & Notes */}
              <h2 className="font-stranger text-xl text-gray-300 mt-8 mb-2">Comments & Notes</h2>
              <div className="mb-2">
                <label className="block text-gray-300 font-typewriter mb-1">Strength</label>
                <textarea name="strength" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.strength} onChange={handleChange} rows={2} />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 font-typewriter mb-1">Areas for Improvement</label>
                <textarea name="improvement" className="w-full p-2 rounded bg-gray-800 text-gray-200" value={form.improvement} onChange={handleChange} rows={2} />
              </div>

              <button type="submit" className="w-full py-3 mt-4 bg-red-600 hover:bg-red-700 text-white font-typewriter text-lg rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300">Save & Submit</button>
            </>
          )}
        </form>
        {submitted && (
          <div className="mt-6 text-green-400 font-typewriter text-center">Evaluation submitted! Redirecting...</div>
        )}
      </div>
    </div>
  );
}
