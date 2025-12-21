
export function parseTimeScore(score: string) {
  if (score === "0") {
    return { hours: "0", minutes: "0", seconds: "0", subsecs: "0" };
  }

  const parts = score.split(":");

  let hours = "0";
  let minutes = "0";
  let seconds = "0";
  let subsecs = "0";

  const last = parts[parts.length - 1];
  const [secondStr, subsecsStr] = last.split(".");

  seconds = secondStr;
  subsecs = subsecsStr || "0";

  if (parts.length === 2) {
    minutes = parts[0];
  }

  if (parts.length === 3) {
    hours = parts[0];
    minutes = parts[1];
  }

  return { hours, minutes, seconds, subsecs };
}