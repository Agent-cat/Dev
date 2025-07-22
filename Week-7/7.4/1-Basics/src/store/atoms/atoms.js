import { atom, selector } from "recoil";

export const Networkcount = atom({
    key:'Networkcount',
    default:10
})
export const Jobscount = atom({
    key:'Jobscount',
    default:0
})

export const Messagescount = atom({
    key:'Messagescount',
    default:0
})

export const TotalNotification=selector({
    key:"TotalNotification",
    get:({get})=>{
        const Networkcount1= get(Networkcount);
        const Jobscount1 = get(Jobscount);
        const Messagescount1= get(Messagescount);
        return Networkcount1+Jobscount1+Messagescount1
    }
})

