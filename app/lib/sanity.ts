import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    apiVersion: '2024-02-19',
    dataset: 'production',
    projectId: 'bu6tekup',
    useCdn: false,
})

const builder =  imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}