import React from 'react'
import SlideTemplate from '../components/template/slide-template/slide-template'
import { useQuery, gql } from '@apollo/client'

const Posts = () => {
    const query = gql`
        query getAllPosts {
            postsCollection {
                items {
                    id
                    title
                    description
                    image {
                        url
                    }
                }
            }
        }
    `
    const { data } = useQuery(query)

    return <SlideTemplate slideItems={data?.postsCollection.items} title='POSTS' />
}

export default Posts
