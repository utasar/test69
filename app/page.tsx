import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            NextGen Earning & Learning Platform
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Track progress, encourage ethical earning, and collaborate at individual, family, and global levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ModuleCard
            title="🎯 Pathfinder"
            description="Explore career paths, set goals, and track your learning journey"
            href="/pathfinder"
            color="bg-blue-500"
          />
          <ModuleCard
            title="🛠️ Sandbox"
            description="Practice skills in a safe environment and experiment with new ideas"
            href="/sandbox"
            color="bg-green-500"
          />
          <ModuleCard
            title="👨‍👩‍👧‍👦 Family Guide"
            description="Parental guidance, family collaboration, and shared learning"
            href="/family-guide"
            color="bg-purple-500"
          />
          <ModuleCard
            title="🌍 Global Hub"
            description="Connect with the community and collaborate on global opportunities"
            href="/global-hub"
            color="bg-orange-500"
          />
          <ModuleCard
            title="🛡️ Guardian Safety"
            description="Safety monitoring, ethical guidelines, and parental controls"
            href="/guardian-safety"
            color="bg-red-500"
          />
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-dashed border-gray-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">📊 Your Progress</h3>
            <div className="space-y-3">
              <ProgressBar label="Reputation" value={75} color="bg-yellow-500" />
              <ProgressBar label="Skills" value={60} color="bg-blue-500" />
              <ProgressBar label="Earnings" value={45} color="bg-green-500" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <Feature icon="✅" text="Progress Tracking" />
              <Feature icon="⭐" text="Reputation System" />
              <Feature icon="💡" text="Ethical Earning" />
              <Feature icon="🚀" text="Real-World Scaling" />
              <Feature icon="👥" text="Family Collaboration" />
              <Feature icon="🌐" text="Global Community" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({ title, description, href, color }: {
  title: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer h-full">
        <div className={`${color} text-white text-3xl w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          {title.split(' ')[0]}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

function ProgressBar({ label, value, color }: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-700">{label}</span>
        <span className="text-gray-900 font-semibold">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-xl">{icon}</span>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
