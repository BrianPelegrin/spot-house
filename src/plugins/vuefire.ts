import { VueFire, VueFireAuth } from "vuefire"
import { firebaseApp } from "../config/firebase.config"

export default {
    VueFire,
    props:{
        firebaseApp,
        modules:[
            VueFireAuth()
        ]
    }
}