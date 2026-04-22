export function detectIntent(message: string) {
  const m = message.toLowerCase();

  if (m.includes("project")) return "projects";
  if (m.includes("skill") || m.includes("tech")) return "skills";
  if (m.includes("experience")) return "experience";
  if (m.includes("education")) return "education";
  if (m.includes("work")) return "experience";
  if (m.includes("cv")) return "cv";

  return "general";
}

export function detectPerspective(message: string) {
  const m = message.toLowerCase();

  if (m.includes("my ") || m.includes(" me") || m.includes("i ")) {
    return "user";
  } else return "nasif";
}
