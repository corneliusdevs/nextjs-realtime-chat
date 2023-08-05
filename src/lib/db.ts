import { Redis } from "@upstash/redis"

export const db = new Redis({
    // something seems wrong with @upstash redis typechecking. The code works fine and the correct properties expected from the object passed as an argument are: 'url: string' and 'token: string'
   // @ts-expect-error 
    url: process.env.UPSTASH_REDDIS_REST_URL,
    token: process.env.UPSTASH_REDDIS_REST_TOKEN
})

