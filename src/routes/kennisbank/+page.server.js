import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query SPATquery {
      projectens {
        categorie
        createdAt
        intro
        plaats {
          latitude
          longitude
        }
        image {
          url
        }
        title
        slug
      }
      kennisbanks {
        author
        categorie
        createdAt
        date
        image {
          url
        }
        title
        content {
          raw
          html
          markdown
          text
        }
        slug
      }
      partner(first: 12) {
        image {
          url
        }
        link
      }
      teams {
        email {
          text
        }
        imageHover {
          id
        }
        image {
          id
          url
        }
        name
        title
      }
      klimaatadaptaties {
        boldText {
          raw
          html
          markdown
          text
        }
        content {
          raw
          html
          markdown
          text
        }
        lijst 
        image {
          id
          url
        }
        title
      }
      bedrijventerreinens {
        boldTekst {
          raw
          html
          markdown
          text
        }
        content {
          raw
          html
          markdown
          text
        }
        image {
          id
          url
        }
        title
        list
        
      }
      gemeentens {
        boldTekst {
          raw
          html
          markdown
          text
        }
        content {
          raw
          html
          markdown
          text
        }
        image {
          id
          url
        }
        title
      }
      overs {
        content {
          raw
          html
          markdown
          text
        }
        image {
          id
          url
        }
        title
      }
    }
  `;


  
  return await hygraph.request(query)
  }
