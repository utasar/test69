'use client';

import { useState } from 'react';

export default function SandboxPage() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    { id: 1, name: 'Web Design Practice', type: 'Design', difficulty: 'Beginner', status: 'active' },
    { id: 2, name: 'Build a Calculator', type: 'Coding', difficulty: 'Intermediate', status: 'completed' },
    { id: 3, name: 'Social Media Marketing', type: 'Business', difficulty: 'Beginner', status: 'active' },
    { id: 4, name: 'Data Analysis Project', type: 'Data Science', difficulty: 'Advanced', status: 'not-started' },
  ];

  const skills = [
    { name: 'HTML/CSS', level: 85, category: 'Technical' },
    { name: 'JavaScript', level: 70, category: 'Technical' },
    { name: 'Communication', level: 65, category: 'Soft Skills' },
    { name: 'Problem Solving', level: 75, category: 'Soft Skills' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🛠️ Sandbox</h1>
          <p className="text-gray-700 text-lg">
            Practice skills in a safe environment and experiment with new ideas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex space-x-4 mb-6 border-b">
                <button
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === 'projects'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab('projects')}
                >
                  Practice Projects
                </button>
                <button
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === 'experiments'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab('experiments')}
                >
                  Experiments
                </button>
              </div>

              {activeTab === 'projects' && (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                          <div className="flex space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                              {project.type}
                            </span>
                            <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                              {project.difficulty}
                            </span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                          project.status === 'completed' ? 'bg-green-100 text-green-700' :
                          project.status === 'active' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status === 'completed' ? 'Completed' :
                           project.status === 'active' ? 'Active' : 'Not Started'}
                        </span>
                      </div>
                      <button className="mt-3 text-green-600 hover:text-green-700 font-medium text-sm">
                        {project.status === 'not-started' ? 'Start Project →' : 'Continue →'}
                      </button>
                    </div>
                  ))}
                  <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-green-400 hover:text-green-600 transition-colors">
                    + Start New Practice Project
                  </button>
                </div>
              )}

              {activeTab === 'experiments' && (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">No active experiments yet</p>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Create Your First Experiment
                  </button>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skill Development</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{skill.category}</span>
                        <span className="text-gray-900 font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Sandbox Stats</h2>
              <div className="space-y-4">
                <StatCard label="Projects Completed" value="1" icon="✅" color="text-green-600" />
                <StatCard label="Active Projects" value="2" icon="⚡" color="text-yellow-600" />
                <StatCard label="Hours Practiced" value="24" icon="⏱️" color="text-blue-600" />
                <StatCard label="Skills Improved" value="4" icon="📈" color="text-purple-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Safe Practice Tips</h2>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Experiment freely - mistakes are learning opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>All sandbox activities are monitored for safety</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Get feedback from mentors and peers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Track your progress and celebrate wins</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Ready for Real Projects?</h3>
              <p className="text-sm mb-4 opacity-90">
                Once you&apos;ve mastered skills in the sandbox, move to real-world opportunities!
              </p>
              <button className="w-full bg-white text-green-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }: { label: string; value: string; icon: string; color: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <span className={`text-2xl ${color}`}>{icon}</span>
        <span className="text-gray-700">{label}</span>
      </div>
      <span className={`text-xl font-bold ${color}`}>{value}</span>
    </div>
  );
}
