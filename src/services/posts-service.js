import { ApolloClient, InMemoryCache } from '@apollo/client'
import CONTENTFUL_API from '../constants/js/contentful-api'

export const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_API.SPACE_ID}`,
    headers: {
        Authorization: `Bearer ${CONTENTFUL_API.KEY}`
    },
    cache: new InMemoryCache()
})
