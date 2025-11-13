import React, { useState } from "react";

// Single-file React component (Tailwind CSS required in your project)
// Default export: WeatherApp

export default function WeatherApp() {
  const [query, setQuery] = useState("Berlin, Germany");

  // mock data - replace with API calls when ready
  const weather = {
    location: query,
    date: "Tuesday, Aug 5, 2025",
    temp: 20,
    feelsLike: 18,
    humidity: 46,
    wind: "14 km/h",
    precipitation: "0 mm",
    hourly: [
      { time: "3 PM", icon: "cloud", t: 20 },
      { time: "4 PM", icon: "cloud-sun", t: 20 },
      { time: "5 PM", icon: "sun", t: 20 },
      { time: "6 PM", icon: "cloud", t: 19 },
      { time: "7 PM", icon: "cloud", t: 19 },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Header / Hero */}
        <header className="lg:col-span-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
            How's the sky looking today?
          </h1>
        </header>

        {/* Main content area */}
        <main className="lg:col-span-8 space-y-6">
          {/* Search */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="relative w-full max-w-xl">
              <span className="absolute inset-y-0 left-3 flex items-center opacity-60">
                🔍
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search for a place..."
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium">
              Search
            </button>
          </div>

          {/* Big weather card */}
          <section className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-8 shadow-2xl text-slate-50">
            <div className="flex items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold">{weather.location}</h2>
                <p className="text-sm opacity-90">{weather.date}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-6xl font-extrabold leading-none">
                    {weather.temp}°
                  </div>
                </div>

                {/* Sunny icon */}
                <div className="w-20 h-20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16">
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      fill="rgba(255,255,255,0.95)"
                    />
                    <g stroke="rgba(255,255,255,0.7)" strokeWidth="1.2">
                      <path d="M12 1v2" />
                      <path d="M12 21v2" />
                      <path d="M4.2 4.2l1.4 1.4" />
                      <path d="M18.4 18.4l1.4 1.4" />
                      <path d="M1 12h2" />
                      <path d="M21 12h2" />
                      <path d="M4.2 19.8l1.4-1.4" />
                      <path d="M18.4 5.6l1.4-1.4" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Feels Like" value={`${weather.feelsLike}°`} />
              <StatCard title="Humidity" value={`${weather.humidity}%`} />
              <StatCard title="Wind" value={weather.wind} />
              <StatCard title="Precipitation" value={weather.precipitation} />
            </div>
          </section>

          {/* Small devices: hourly below */}
          <div className="lg:hidden">
            <HourlyPanel hourly={weather.hourly} />
          </div>
        </main>

        {/* Right column: Hourly forecast */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="bg-slate-800 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Hourly forecast</h3>
              <select className="bg-slate-700 text-sm rounded-md px-2 py-1">
                <option>Tuesday</option>
              </select>
            </div>

            <div className="space-y-3">
              {weather.hourly.map((h) => (
                <div
                  key={h.time}
                  className="flex items-center justify-between bg-slate-900/20 p-3 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-700 rounded-md">
                      {hourIcon(h.icon)}
                    </div>
                    <div className="text-sm opacity-90">{h.time}</div>
                  </div>
                  <div className="font-medium">{h.t}°</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile-only small cards (duplicate info) */}
          <div className="mt-6 hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              <MiniStat title="UV Index" value="3" />
              <MiniStat title="Visibility" value="10 km" />
            </div>
          </div>
        </aside>

        {/* Footer / caption */}
        <footer className="lg:col-span-12 text-center opacity-60 text-sm mt-6">
          Image-style weather UI recreated with Tailwind — connect a real
          weather API to replace mock data.
        </footer>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-slate-800/30 p-4 rounded-xl">
      <div className="text-xs opacity-80">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="bg-slate-800/30 p-3 rounded-lg text-center">
      <div className="text-xs opacity-80">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function HourlyPanel({ hourly }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 shadow-lg">
      <h4 className="font-semibold mb-3">Hourly</h4>
      <div className="flex gap-3 overflow-x-auto">
        {hourly.map((h) => (
          <div
            key={h.time}
            className="min-w-[90px] bg-slate-900/20 p-3 rounded-lg text-center"
          >
            <div className="text-sm opacity-90">{h.time}</div>
            <div className="mt-2">{hourIcon(h.icon)}</div>
            <div className="mt-2 font-medium">{h.t}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function hourIcon(name) {
  // tiny icon placeholders (returns emoji or small svg element)
  if (name === "sun") return <div className="text-2xl">☀️</div>;
  if (name === "cloud") return <div className="text-2xl">☁️</div>;
  if (name === "cloud-sun") return <div className="text-2xl">⛅</div>;
  return <div className="text-2xl">🌤️</div>;
}
