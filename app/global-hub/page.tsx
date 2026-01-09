'use client';

import { useState } from 'react';

export default function GlobalHubPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const opportunities = [
    { id: 1, title: 'Website Design for Local Business', category: 'Design', difficulty: 'Intermediate', reward: 150, applicants: 12 },
    { id: 2, title: 'Content Writing - Blog Posts', category: 'Writing', difficulty: 'Beginner', reward: 75, applicants: 8 },
    { id: 3, title: 'Social Media Management', category: 'Marketing', difficulty: 'Intermediate', reward: 120, applicants: 15 },
    { id: 4, title: 'Data Entry Project', category: 'Admin', difficulty: 'Beginner', reward: 50, applicants: 20 },
  ];

  const communityProjects = [
    { id: 1, name: 'Environmental Awareness Campaign', participants: 45, impact: 'High' },
    { id: 2, name: 'Youth Coding Bootcamp', participants: 32, impact: 'Medium' },
    { id: 3, name: 'Digital Literacy Program', participants: 28, impact: 'High' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Jordan K.', points: 5420, reputation: 98 },
    { rank: 2, name: 'Sam M.', points: 4850, reputation: 95 },
    { rank: 3, name: 'Alex R. (You)', points: 1250, reputation: 75 },
    { rank: 4, name: 'Taylor P.', points: 980, reputation: 72 },
    { rank: 5, name: 'Morgan L.', points: 850, reputation: 68 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🌍 Global Hub</h1>
          <p className="text-gray-700 text-lg">
            Connect with the community and collaborate on global opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Real-World Opportunities</h2>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="design">Design</option>
                  <option value="writing">Writing</option>
                  <option value="marketing">Marketing</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="space-y-4">
                {opportunities.map((opp) => (
                  <div key={opp.id} className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{opp.title}</h3>
                        <div className="flex space-x-2 mt-2">
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                            {opp.category}
                          </span>
                          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                            {opp.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">${opp.reward}</div>
                        <div className="text-xs text-gray-500">{opp.applicants} applicants</div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                        Apply Now
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Projects</h2>
              <div className="space-y-4">
                {communityProjects.map((project) => (
                  <div key={project.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        project.impact === 'High' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.impact} Impact
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>👥 {project.participants} participants</span>
                      <button className="text-orange-600 hover:text-orange-700 font-medium">
                        Join Project →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-2">
                  A
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Alex R.</h3>
                <p className="text-sm text-gray-600">Learner</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">Reputation</span>
                  <span className="text-sm font-bold text-orange-600">75/100</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">Points</span>
                  <span className="text-sm font-bold text-orange-600">1,250</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">Rank</span>
                  <span className="text-sm font-bold text-orange-600">#3</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Leaderboard</h2>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`p-3 rounded-lg ${
                      user.name.includes('You') ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className={`font-bold ${
                          user.rank === 1 ? 'text-yellow-500' :
                          user.rank === 2 ? 'text-gray-400' :
                          user.rank === 3 ? 'text-amber-600' :
                          'text-gray-500'
                        }`}>
                          #{user.rank}
                        </span>
                        <span className="text-sm text-gray-900">{user.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{user.points}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Ethical Earning Guidelines</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>✓ Always deliver quality work</li>
                <li>✓ Communicate honestly</li>
                <li>✓ Respect deadlines</li>
                <li>✓ Build your reputation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
