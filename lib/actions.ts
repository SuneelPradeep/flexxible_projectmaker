import { getUserQuery } from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = isProduction ? process.env.API_URL|| '' : 'http://127.0.0.1/4000/graphql'
const apikey = isProduction ? process.env.API_KEY || '' : '1234'
const serverUrl = isProduction ? process.env.SERVER_URL || '' : 'http://localhost:3000'

const client = new GraphQLClient(apiUrl)
const makeGraphQLRequest = async (query : string,variables ={})=>{
    try {
        //connect to graphql database client request
        return await client.request(query,variables)
    } catch (error) {
        throw error
    }
}

export const getUser = (email : string) =>{
    return makeGraphQLRequest(getUserQuery,{email})
}