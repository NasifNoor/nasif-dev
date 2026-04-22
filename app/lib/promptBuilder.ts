import { cv } from "@/data/cv";
import { detectIntent, detectPerspective } from "./intent";

function buildContext(intent: string) {
  if (intent === "skills") {
    return `
      Frontend: ${cv.skills.frontend.join(", ")}
      State Management: ${cv.skills.stateManagement.join(", ")}
      APIs: ${cv.skills.apis.join(", ")}
      Authentication: ${cv.skills.authentication.join(", ")}
      `;
  }

  if (intent === "projects") {
    return cv.projects
      .map(
        (p) => `- ${p.name}: ${p.overview} (Tech: ${p.techStack.join(", ")})`,
      )
      .join("\n");
  }

  if (intent === "experience") {
    return `
      Company: ${cv.professionalDetails.company}

      Roles:
      ${cv.professionalDetails.positions
        .map((r) => `- ${r.title} (${r.duration})`)
        .join("\n")}

      Responsibilities:
      ${cv.professionalDetails.responsibilities.join("\n")}
      `;
  }

  if (intent === "education") {
    return cv.education
      .map((e) => `- ${e.degree}, ${e.institution} (${e.year}) - ${e.result}`)
      .join("\n");
  }
  if (intent === "cv") {
    return 'CV Download:download from CTA in portfolio hero section: "Download CV"';
  }

  return `
    Name: ${cv.personalInfo.name}
    Role: ${cv.personalInfo.role}
    Address: ${cv.personalInfo.address}
    Linkedin: ${cv.personalInfo.linkedin}
    Github: ${cv.personalInfo.github}


    Summary:
    ${cv.about.summary}

    Top Skills:
    ${cv.skills.frontend.slice(0, 5).join(", ")}

    Projects:
    ${cv.projects.map((p) => p.name).join(", ")}
    `;
}

export async function buildUserPrompt(userMessage: string) {
  const perspective = detectPerspective(userMessage);
  const intent = detectIntent(userMessage);
  const context = buildContext(intent);
  let behavior = "";

  if (perspective === "user") {
    behavior = `
      The user is asking about themselves.

      You DO NOT know their information.

      Respond Role:
      I only have information about Nasif. Feel free to ask me about Nasif's skills, experience, or projects.`;
  } else {
    behavior = `
      The user is asking about you (Nasif).
      Answer using your context.

      Context:
      ${context}
      `;
  }

  return `
  
${behavior}


User question:
${userMessage}
`;
}

export async function buildSystemPrompt() {
  return `
    You are M. Nasif Hasan Noor, a Frontend Engineer.

    Today’s date: ${new Date().toDateString()}

    You are speaking directly to a recruiter.

    Rules:
    - Always answer in FIRST PERSON (I, my)
    - Sound like a real developer, not an AI
    - Be confident but not arrogant
    - Keep answers concise (3–5 lines)
    - Focus on impact and real-world experience
    - Do NOT say "based on the context"
    - Do NOT sound robotic

    If asked about:
    - Skills → highlight strongest stack first
    - Projects → mention real systems and impact
    - Experience → summarize growth and responsibilities
    - Availability → respond clearly and positively

    If something is unknown, say:
    "I don't have that information at the moment."

    Tone:
    - Professional
    - Slightly conversational
    - Recruiter-friendly
    `;
}

export function buildPrompt(userMessage: string) {
  const perspective = detectPerspective(userMessage);

  let behavior = "";

  if (perspective === "user") {
    behavior = `
      The user is asking about themselves.

      You DO NOT know their information.

      Respond like:
      "I don't have that information yet. Can you tell me your name?"

      If they provide it, remember it for this conversation.
      `;
  } else {
    behavior = `
      The user is asking about you (Nasif).
      Answer using your CV context.
      `;
  }

  return `
    You are M. Nasif Hasan Noor.

    ${behavior}

    Rules:
    - Speak in first person
    - Be natural and conversational
    - Do not assume unknown user data

    User:
    ${userMessage}
    `;
}
