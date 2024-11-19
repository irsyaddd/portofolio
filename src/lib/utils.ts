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
interface Breakpoints {
  [key: string]: number;
}

export const breakpoints: Breakpoints = {
  lg: 1199,
  md: 799,
  sm: 374,
  xs: 319,
  xxs: 0,
};

interface RowHeights {
  [key: string]: number;
}

export const rowHeights: RowHeights = {
  lg: 280,
  md: 180,
  sm: 164,
  xs: 136,
  xxs: 132,
};

export const cols = { lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 };

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

export const removeTags = (str: string) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};
