import 'dotenv/config';
import fetch from 'node-fetch';
import fs from 'fs/promises';

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
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const projects = data.data.user.pinnedItems.nodes;

    await fs.writeFile('projects.json', JSON.stringify(projects, null, 2));
    console.log('projects.json has been updated')
}

getProjects();