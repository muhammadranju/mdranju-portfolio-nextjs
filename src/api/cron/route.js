const URL = "https://portfolio-project-api-sooty.vercel.app/v1/api/project";
// const URL = "https://portfolio-project-api.onrender.com/v1/api/project";

async function getProject() {
  const data = await fetch(URL);
  const result = await data.json();
  console.log(result);
  return result;
}

export default getProject;
