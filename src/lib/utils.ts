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

export function formatDate(dateStr: string, type: "showcase" | "detail") {
  const date = new Date(dateStr);
  const dayNumber = date.getDate().toString();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  let formattedDate;

  switch (type) {
    case "detail":
      formattedDate = `${dayNumber.padStart(2, "0")} ${month} ${year}`;
      break;

    case "showcase":
      formattedDate = `${dayNumber.padStart(
        2,
        "0"
      )} ${month.toUpperCase()} ${year}`;
      break;

    default:
      break;
  }

  return formattedDate;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
