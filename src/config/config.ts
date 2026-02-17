export const URL = "https://portfolio-project-api-sooty.vercel.app/v1/api";
export const URL_V2 = "https://portfolio-project-api-sooty.vercel.app/v2/api";

async function getProject(page?: number, limit?: number) {
  const params = new URLSearchParams();

  if (page && limit) {
    params.set("page", String(page));
    params.set("limit", String(limit));
  }

  const queryString = params.toString();

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects${
      queryString ? `?${queryString}` : ""
    }`,
    {
      next: {
        revalidate: 60 * 60 * 12,
      },
    },
  );
  const result = await data.json();
  return result;
}

export default getProject;
