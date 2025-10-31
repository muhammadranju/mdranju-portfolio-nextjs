export const URL = "https://portfolio-project-api-sooty.vercel.app/v1/api";
export const URL_V2 = "https://portfolio-project-api-sooty.vercel.app/v2/api";

async function getProject() {
  const data = await fetch("/api/projects", {
    next: {
      revalidate: 60 * 60 * 12,
    },
  });
  const result = await data.json();
  return result;
}

export default getProject;
