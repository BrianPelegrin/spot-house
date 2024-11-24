import { User } from "firebase/auth"
import { defineStore } from "pinia"
import { ref } from "vue";
import { IAuthCredentials } from "../interfaces/authentication";
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth"

export default defineStore('authStore',()=>{

    const auth = useFirebaseAuth();
    const user = ref<User>();
    const errorMessage = ref<string>('') 
    const errorCodes:{[key:string]:string} = {
        'auth/invalid-credential':'Las credenciales no son validas!',
        'auth/too-many-requests':'Numero de intentos excedidos!'
    }


    const login = ({email,password}:IAuthCredentials) =>{        
        errorMessage.value = ''
         signInWithEmailAndPassword(auth!, email,password)
        .then((userCredential) => {
            console.log('Credenciales validas: ', userCredential)
            user.value = userCredential.user;            
        })
        .catch((error) => {
            console.log(error);
            console.log('Error: ',errorCodes[error.code])
            errorMessage.value = errorCodes[error.code];
        })        
    }

    return {
        login,
        errorMessage
    }

})