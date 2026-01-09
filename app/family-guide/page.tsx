'use client';

import { useState } from 'react';

export default function FamilyGuidePage() {
  const [activeView, setActiveView] = useState('overview');

  const familyMembers = [
    { id: 1, name: 'Alex (You)', role: 'Learner', points: 1250, status: 'active' },
    { id: 2, name: 'Mom', role: 'Guardian', points: 850, status: 'active' },
    { id: 3, name: 'Dad', role: 'Guardian', points: 920, status: 'active' },
    { id: 4, name: 'Sarah', role: 'Sibling', points: 680, status: 'active' },
  ];

  const sharedGoals = [
    { id: 1, title: 'Family Learning Night', progress: 75, participants: 4 },
    { id: 2, title: 'Complete 10 Projects Together', progress: 60, participants: 3 },
    { id: 3, title: 'Reach 5000 Family Points', progress: 85, participants: 4 },
  ];

  const guidelines = [
    { category: 'Screen Time', rule: 'Max 3 hours/day on earning activities', status: 'compliant' },
    { category: 'Safety', rule: 'All activities monitored', status: 'active' },
    { category: 'Earnings', rule: 'Parent approval required for withdrawals', status: 'active' },
    { category: 'Content', rule: 'Age-appropriate projects only', status: 'compliant' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">👨‍👩‍👧‍👦 Family Guide</h1>
          <p className="text-gray-700 text-lg">
            Parental guidance, family collaboration, and shared learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex space-x-4 mb-6 border-b">
                <TabButton
                  active={activeView === 'overview'}
                  onClick={() => setActiveView('overview')}
                  label="Overview"
                />
                <TabButton
                  active={activeView === 'members'}
                  onClick={() => setActiveView('members')}
                  label="Family Members"
                />
                <TabButton
                  active={activeView === 'guidelines'}
                  onClick={() => setActiveView('guidelines')}
                  label="Guidelines"
                />
              </div>

              {activeView === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shared Family Goals</h2>
                    <div className="space-y-4">
                      {sharedGoals.map((goal) => (
                        <div key={goal.id} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                            <span className="text-sm text-gray-600">{goal.participants} members</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div
                              className="bg-purple-500 h-2 rounded-full"
                              style={{ width: `${goal.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-gray-600">{goal.progress}% Complete</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">Family Collaboration Bonus</h3>
                    <p className="text-sm text-purple-800">
                      Working together earns 20% bonus points! Keep collaborating to unlock family achievements.
                    </p>
                  </div>
                </div>
              )}

              {activeView === 'members' && (
                <div className="space-y-4">
                  {familyMembers.map((member) => (
                    <div key={member.id} className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">{member.points}</div>
                        <div className="text-xs text-gray-500">points</div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-purple-400 hover:text-purple-600 transition-colors">
                    + Invite Family Member
                  </button>
                </div>
              )}

              {activeView === 'guidelines' && (
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Family guidelines ensure a safe and productive learning environment for everyone.
                  </p>
                  {guidelines.map((guideline, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{guideline.category}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          guideline.status === 'compliant' ? 'bg-green-100 text-green-700' :
                          guideline.status === 'active' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {guideline.status === 'compliant' ? '✓ Compliant' :
                           guideline.status === 'active' ? '● Active' : '⚠ Warning'}
                        </span>
                      </div>
                      <p className="text-gray-600">{guideline.rule}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Family Stats</h2>
              <div className="space-y-4">
                <StatCard label="Total Points" value="3,700" icon="⭐" />
                <StatCard label="Active Members" value="4" icon="👥" />
                <StatCard label="Shared Goals" value="3" icon="🎯" />
                <StatCard label="Achievements" value="12" icon="🏆" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Parental Controls</h2>
              <div className="space-y-3">
                <ControlItem label="Activity Monitoring" enabled={true} />
                <ControlItem label="Spending Limits" enabled={true} />
                <ControlItem label="Content Filter" enabled={true} />
                <ControlItem label="Time Restrictions" enabled={true} />
              </div>
              <button className="mt-4 w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors">
                Manage Controls
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Weekly Family Report</h3>
              <p className="text-sm mb-4 opacity-90">
                Review this week&apos;s activities, progress, and achievements
              </p>
              <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                View Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      className={`px-4 py-2 font-medium transition-colors ${
        active
          ? 'border-b-2 border-purple-500 text-purple-600'
          : 'text-gray-600 hover:text-gray-900'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
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

function ControlItem({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
      <span className="text-gray-700 text-sm">{label}</span>
      <span className={`px-2 py-1 text-xs rounded ${
        enabled ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
      }`}>
        {enabled ? 'ON' : 'OFF'}
      </span>
    </div>
  );
}
