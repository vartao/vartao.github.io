export const social = [
  { url: "mailto:codertao@outlook.com", name: "mail" },
  { url: "https://github.com/vartao", name: "github" },
  //{ url: "https://www.linkedin.com/in/codertao/", name: "linkedin" },
  //{ url: "https://x.com/codertao", name: "x" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
