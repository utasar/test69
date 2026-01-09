'use client';

import { useState } from 'react';

export default function PathfinderPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const careerPaths = [
    { id: 'tech', name: 'Technology & Innovation', icon: '💻', progress: 45 },
    { id: 'creative', name: 'Creative Arts', icon: '🎨', progress: 30 },
    { id: 'business', name: 'Business & Entrepreneurship', icon: '💼', progress: 60 },
    { id: 'science', name: 'Science & Research', icon: '🔬', progress: 25 },
    { id: 'social', name: 'Social Impact', icon: '🤝', progress: 50 },
  ];

  const goals = [
    { id: 1, title: 'Complete Python Course', deadline: '2026-02-15', progress: 75, status: 'in-progress' },
    { id: 2, title: 'Build Portfolio Website', deadline: '2026-01-30', progress: 90, status: 'in-progress' },
    { id: 3, title: 'Earn First $100', deadline: '2026-03-01', progress: 45, status: 'in-progress' },
    { id: 4, title: 'Complete 5 Sandbox Projects', deadline: '2026-02-28', progress: 60, status: 'in-progress' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🎯 Pathfinder</h1>
          <p className="text-gray-700 text-lg">
            Explore career paths, set goals, and track your learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Career Paths</h2>
              <div className="space-y-4">
                {careerPaths.map((path) => (
                  <div
                    key={path.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPath === path.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedPath(path.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{path.icon}</span>
                        <h3 className="text-lg font-semibold text-gray-900">{path.name}</h3>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{path.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Goals</h2>
              <div className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        goal.progress >= 75 ? 'bg-green-100 text-green-700' :
                        goal.progress >= 50 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {goal.progress}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Deadline: {goal.deadline}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          goal.progress >= 75 ? 'bg-green-500' :
                          goal.progress >= 50 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                + Add New Goal
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Overview</h2>
              <div className="space-y-4">
                <StatCard label="Total Goals" value="4" icon="🎯" />
                <StatCard label="Completed" value="0" icon="✅" />
                <StatCard label="In Progress" value="4" icon="⏳" />
                <StatCard label="Skills Learned" value="12" icon="📚" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Actions</h2>
              <ul className="space-y-3">
                <ActionItem text="Complete daily coding challenge" />
                <ActionItem text="Update portfolio with latest project" />
                <ActionItem text="Review ethical earning guidelines" />
                <ActionItem text="Connect with mentor in Global Hub" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{icon}</span>
        <span className="text-gray-700">{label}</span>
      </div>
      <span className="text-xl font-bold text-gray-900">{value}</span>
    </div>
  );
}

function ActionItem({ text }: { text: string }) {
  return (
    <li className="flex items-start space-x-2">
      <span className="text-blue-500 mt-1">→</span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}
