
export function parseTimeScore(score: string) {
  if (score === "0") {
    return { hours: 0, minutes: 0, seconds: 0, subsecs: 0 };
  }

  const parts = score.split(":");

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let subsecs = 0;

  const last = parts[parts.length - 1];
  const [secStr, subStr] = last.split(".");

  seconds = parseInt(secStr, 10);

  if (subStr) {
    // normalize back to 2 digits (your Go code trims trailing zeros)
    subsecs = parseInt(subStr.padEnd(2, "0"), 10);
  }

  if (parts.length === 2) {
    minutes = parseInt(parts[0], 10);
  }

  if (parts.length === 3) {
    hours = parseInt(parts[0], 10);
    minutes = parseInt(parts[1], 10);
  }

  return { hours, minutes, seconds, subsecs };
}