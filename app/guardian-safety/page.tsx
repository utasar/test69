'use client';

import { useState } from 'react';

export default function GuardianSafetyPage() {
  const [activeSection, setActiveSection] = useState('monitoring');

  const activities = [
    { id: 1, type: 'Project Started', description: 'Web Design Practice', time: '2 hours ago', status: 'safe' },
    { id: 2, type: 'Communication', description: 'Message to mentor', time: '4 hours ago', status: 'safe' },
    { id: 3, type: 'Earning Activity', description: 'Completed calculator project', time: '1 day ago', status: 'safe' },
    { id: 4, type: 'Profile Update', description: 'Updated skills list', time: '2 days ago', status: 'safe' },
  ];

  const safetyRules = [
    { id: 1, rule: 'No sharing personal information', severity: 'Critical', active: true },
    { id: 2, rule: 'Age-appropriate content only', severity: 'High', active: true },
    { id: 3, rule: 'Supervised communication', severity: 'High', active: true },
    { id: 4, rule: 'Verified opportunities only', severity: 'Medium', active: true },
  ];

  const alerts = [
    { id: 1, type: 'info', message: 'New safety guidelines available', time: '1 day ago' },
    { id: 2, type: 'success', message: 'All activities compliant this week', time: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🛡️ Guardian Safety</h1>
          <p className="text-gray-700 text-lg">
            Safety monitoring, ethical guidelines, and parental controls
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex space-x-4 mb-6 border-b">
                <SectionTab
                  active={activeSection === 'monitoring'}
                  onClick={() => setActiveSection('monitoring')}
                  label="Activity Monitor"
                />
                <SectionTab
                  active={activeSection === 'rules'}
                  onClick={() => setActiveSection('rules')}
                  label="Safety Rules"
                />
                <SectionTab
                  active={activeSection === 'alerts'}
                  onClick={() => setActiveSection('alerts')}
                  label="Alerts"
                />
              </div>

              {activeSection === 'monitoring' && (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-green-800 font-semibold">All recent activities are safe</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {activities.map((activity) => (
                      <div key={activity.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{activity.type}</h3>
                            <p className="text-sm text-gray-600">{activity.description}</p>
                          </div>
                          <span className={`px-3 py-1 text-xs rounded-full ${
                            activity.status === 'safe' ? 'bg-green-100 text-green-700' :
                            activity.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {activity.status === 'safe' ? '✓ Safe' :
                             activity.status === 'warning' ? '⚠ Review' :
                             '✕ Blocked'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'rules' && (
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Safety rules are automatically enforced to protect all users. These rules ensure a safe learning environment.
                  </p>
                  {safetyRules.map((rule) => (
                    <div key={rule.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{rule.rule}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          rule.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                          rule.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {rule.severity}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${rule.active ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                        <span className="text-sm text-gray-600">{rule.active ? 'Active' : 'Inactive'}</span>
                      </div>
                    </div>
                  ))}
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Critical and High severity rules cannot be disabled to ensure safety.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'alerts' && (
                <div className="space-y-4">
                  {alerts.length > 0 ? (
                    alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-4 rounded-lg border ${
                          alert.type === 'success' ? 'bg-green-50 border-green-200' :
                          alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                          alert.type === 'error' ? 'bg-red-50 border-red-200' :
                          'bg-blue-50 border-blue-200'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className={`font-medium ${
                              alert.type === 'success' ? 'text-green-800' :
                              alert.type === 'warning' ? 'text-yellow-800' :
                              alert.type === 'error' ? 'text-red-800' :
                              'text-blue-800'
                            }`}>
                              {alert.message}
                            </p>
                            <p className="text-xs text-gray-600 mt-1">{alert.time}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No alerts at this time
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy & Security</h2>
              <div className="space-y-4">
                <SecurityFeature
                  icon="🔒"
                  title="Data Encryption"
                  description="All personal data is encrypted and securely stored"
                  status="active"
                />
                <SecurityFeature
                  icon="👁️"
                  title="Content Filtering"
                  description="AI-powered content filter blocks inappropriate material"
                  status="active"
                />
                <SecurityFeature
                  icon="🚨"
                  title="Real-time Monitoring"
                  description="24/7 monitoring of all platform activities"
                  status="active"
                />
                <SecurityFeature
                  icon="✅"
                  title="Verified Users"
                  description="All users and opportunities are verified"
                  status="active"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Safety Score</h2>
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-100 border-4 border-green-500">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-700">98</div>
                    <div className="text-xs text-green-600">Excellent</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Your account maintains excellent safety standards
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
              <div className="space-y-3">
                <StatItem label="Activities Monitored" value="247" />
                <StatItem label="Safety Checks Passed" value="247" />
                <StatItem label="Alerts" value="0" />
                <StatItem label="Days Safe" value="45" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Guardian Actions</h2>
              <div className="space-y-2">
                <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors text-sm">
                  View Full Activity Log
                </button>
                <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                  Export Safety Report
                </button>
                <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                  Configure Settings
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Emergency Contact</h3>
              <p className="text-sm mb-3 opacity-90">
                If you have any safety concerns, contact us immediately.
              </p>
              <button className="w-full bg-white text-red-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Report Issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTab({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      className={`px-4 py-2 font-medium transition-colors ${
        active
          ? 'border-b-2 border-red-500 text-red-600'
          : 'text-gray-600 hover:text-gray-900'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function SecurityFeature({ icon, title, description, status }: {
  icon: string;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg">
      <div className="flex items-start space-x-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
              {status === 'active' ? '✓ Active' : 'Inactive'}
            </span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between p-2 bg-gray-50 rounded">
      <span className="text-sm text-gray-700">{label}</span>
      <span className="text-sm font-bold text-gray-900">{value}</span>
    </div>
  );
}
