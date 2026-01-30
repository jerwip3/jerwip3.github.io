import "dotenv/config";
import fetch from "node-fetch";
import fs from "fs/promises";

const query = `
{
    user(login: "jerwip3"){
        pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
                ... on Repository {
                    name
                    description
                    url
                    languages(first: 3) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }
}`;

async function getProjects() {
  const token = process.env.VITE_GITHUB_TOKEN || process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("Error: No GitHub Token found in environment variables.");
    process.exit(1);
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  if (data.errors) {
    console.error("GraphQL Errors:", JSON.stringify(data.errors, null, 2));
    process.exit(1);
  }

  const projects = data.data.user.pinnedItems.nodes;

  await fs.writeFile("projects.json", JSON.stringify(projects, null, 2));
  console.log("projects.json has been updated successfully.");
}

getProjects();
