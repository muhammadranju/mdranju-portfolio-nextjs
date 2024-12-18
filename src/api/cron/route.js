export const URL = "https://portfolio-project-api-sooty.vercel.app/v1/api";
// const URL = "https://portfolio-project-api.onrender.com/v1/api/project";

async function getProject() {
  const data = await fetch(`${URL}/project`);
  const result = await data.json();
  return result;
}

export default getProject;
