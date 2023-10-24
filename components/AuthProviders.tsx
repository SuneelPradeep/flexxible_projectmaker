'use client';
import {useState,useEffect}  from 'react'
import {getProviders, signIn} from 'next-auth/react'

const AuthProviders = () => {

  type Provider  ={
    id : string, name : string, type : string, signinUrl : string, 
    signinUrlParams? : Record<string , string> | null;
  }
  type Providers = Record<string, Provider>;
  
  const [autha,setautha] = useState<Providers | null>(null)
 
   useEffect(()=>{
     const fetchProviders = async()=>{
        const res = await getProviders();
        console.log('res is',res);
        setautha(res)
     }
     fetchProviders()
   },[])

   if(autha){
    return (
      <div>
        {Object.values(autha).map((auth : Provider,id)=>(
          <button key={id} onClick={()=> signIn(auth?.id)}>
            {auth.id}
          </button>
        ))}
        </div>
      )
   }
}

export default AuthProviders