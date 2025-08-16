# Asynchronus Data Queries 
- An atom does not support an async function 
- Selector supports async functions 
- so we should use selector inside atom to make asynchronus data queries 
```js
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
```
