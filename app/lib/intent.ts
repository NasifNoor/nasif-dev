export function detectIntent(message: string) {
  const m = message.toLowerCase();

  if (m.includes("project")) return "projects";
  if (m.includes("skill") || m.includes("tech")) return "skills";
  if (m.includes("experience")) return "experience";
  if (m.includes("education")) return "education";
  if (m.includes("work")) return "experience";
  if (
    m.includes("company") ||
    m.includes("employer") ||
    m.includes("job") ||
    m.includes("role") ||
    m.includes("position")
  ) {
    return "experience";
  }
  if (m.includes("cv")) return "cv";

  return "general";
}

export function detectPerspective(message: string) {
  const m = message.toLowerCase();

  // Addressing Nasif wins outright, so "tell me about your projects" is read
  // as a question about him rather than about the person asking.
  if (/\b(you|your|yours|nasif|he|him|his)\b/.test(m)) {
    return "nasif";
  }

  // Whole words only: a substring test matches the "i " inside "api " and the
  // " me" inside "tell me", and then refuses to answer a fair question.
  if (/\b(i|me|my|mine|myself)\b/.test(m)) {
    return "user";
  }

  return "nasif";
}
