import { atom, selector } from "recoil";
import axios from "axios"
export const dataAtom = atom({
    key:"dataAtom",
    default:selector({
        key:"dataSelector",
        get:async()=>{
            const res= await axios.get("http://localhost:5000/data")
            return res
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
