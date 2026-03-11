
export function parseTimeScore(score: string) {
  if (score === "0") {
    return ["0", "0", "0", "0"];
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

  return [hours, minutes, seconds, subsecs];
}

function parseInt8(s: string, min: number, max: number): number {
  const n = Number.parseInt(s, 10);

  if (Number.isNaN(n)) {
    throw new Error(`invalid value "${s}"`);
  }

  if (n < min) {
    throw new Error(`value ${n} cannot be less than ${min}`);
  }

  if (n > max) {
    throw new Error(`value ${n} cannot be greater than ${max}`);
  }

  return n;
}

export function parseSubsecs(s: string): number {
  return parseInt8(s, 0, 99);
}

export function parseSeconds(s: string): number {
  return parseInt8(s, 0, 59);
}

export function parseMinutes(s: string): number {
  return parseInt8(s, 0, 59);
}

export function parseHours(s: string): number {
  return parseInt8(s, 0, 127);
}