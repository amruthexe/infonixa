// components/Stats.tsx
"use client";

import { useEffect, useState, useRef } from "react";

interface StatItem {
  label: string;
  value: number | string;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: "Year in Business", value: 7, suffix: "+" },
  { label: "Team Members", value: 8, suffix: "+" },
  { label: "Happy Clients", value: 58, suffix: "+" },
  { label: "Projects Done", value: 78, suffix: "+" },
  { label: "Hours Worked", value: 103000, suffix: "k" },
  { label: "Support Available", value: "24/5" },
];

const Stats = () => {
  const [counters, setCounters] = useState<number[]>(Array(stats.length).fill(0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          animateCounters();
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    const animateCounters = () => {
      stats.forEach((stat, index) => {
        if (typeof stat.value === "number") {
          let start = 0;
          const end = stat.value;
          const duration = 2000;
          const increment = end / (duration / 20);
          const counterInterval = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(counterInterval);
            }
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(start);
              return newCounters;
            });
          }, 20);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // in case already in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">
              {counters[index]}
              {stat.suffix}
            </span>
            <span className="mt-2 text-sm sm:text-base md:text-lg">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
