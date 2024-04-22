import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";

export function timeDifference(dateTime: string, current: Date | null = null) {
  const now = current ?? new Date();
  const then = new Date(dateTime);
  let label = "min";

  let count = differenceInMinutes(now, then);

  if (count >= 60 && count < 1440) {
    count = differenceInHours(now, then);
    label = "hour";
  }

  if (count >= 1440) {
    count = differenceInDays(now, then);
    label = "day";
  }

  let final = `${count} ${label}`;

  if (count > 1) {
    final += "s";
  }

  return final;
}
