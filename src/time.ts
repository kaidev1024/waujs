
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

function parseInt8(s: string, name: string, min: number, max: number): number {
  const v = Number.parseInt(s, 10);

  if (Number.isNaN(v)) {
    throw new Error(`invalid ${name} "${s}"`);
  }

  const n = v;

  if (n < min) {
    throw new Error(`${name} cannot be less than ${min}`);
  }

  if (n > max) {
    throw new Error(`${name} cannot be greater than ${max}`);
  }

  return n;
}

export function parseSubsecs(s: string): number {
  if (s.length === 1) {
    s += "0";
  }
  return parseInt8(s, "value", 0, 99);
}

export function parseSeconds(s: string): number {
  return parseInt8(s, "seconds", 0, 59);
}

export function parseMinutes(s: string): number {
  return parseInt8(s, "minutes", 0, 59);
}

export function parseHours(s: string): number {
  return parseInt8(s, "hours", 0, 127);
}