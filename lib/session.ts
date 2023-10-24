import {getServerSession} from 'next-auth/next'
import {NextAuthOptions, User} from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import jsonwebtoken from 'jsonwebtoken'
import {JWT } from 'next-auth/jwt'
import { SessionInterface } from '@/common.types'


export const authOptions : NextAuthOptions ={
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENTID!,
            clientSecret : process.env.GOOGLE_CLIENTSECRET!
        })
    ],
    // jwt : {
    //     encode : ({secret, token}) => {},
    //     decode : ({secret, token}) => {}
    // },
    theme : {
        colorScheme : 'light',
        logo : '/logo.png'

    },
    callbacks : {
        async session({session}: any){
            return session;
        },
        async signIn( {user} : {user : AdapterUser | User}){
          try {
              //see if get

              //if not then create

              return true;
          } catch (error : any) {
            console.log('error is',error);
            return false;
          }
        }
    }
}


export async function getCurrentUser() {
 const session = await getServerSession(authOptions) as  SessionInterface ;
 return session;
    
}