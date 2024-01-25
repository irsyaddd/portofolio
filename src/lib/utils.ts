import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Define an array of month names in Indonesian.
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Define an array of day names in Indonesian.
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = dayNames[date.getDay()];
  const dayNumber = date.getDate().toString();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${dayNumber.padStart(2, "0")} ${month.toUpperCase()} ${year}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
