import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
    // Extract the slug from the params
    const { slug } = params;

    // Define your GraphQL query with a filter for the specific slug
    const query = gql`
        query GetProjectBySlug($slug: String!) {
            projectens(where: { slug: $slug }) {
                id
                categorie
                intro
                plaats {
                    latitude
                    longitude
                }
                image {
                    url
                }
                content {
                    html
                }
                publishedAt
                slug
                title
            }
        }
    `;

    // Pass the slug as a variable to the query
    const variables = { slug };

    try {
        // Execute the GraphQL query with the variable
        const data = await hygraph.request(query, variables);

        // Return the first project found with the matching slug
        if (data.projectens.length > 0) {
            return {
                project: data.projectens[0], // Assuming you want to return a single project
            };
        } else {
            // Handle the case where no project with the specified slug is found
            return {
                status: 404, // Not Found
                error: "Project not found",
            };
        }
    } catch (error) {
        // Handle any GraphQL request errors here
        console.error(error);
        return {
            status: 500, // Internal Server Error
            error: "Internal server error",
        };
    }
}
