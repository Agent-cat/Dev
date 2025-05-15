# Netxt js Frontend
### Step-1: `Create the project`
```bash
npx create-next-app@latest
```
---
### Step-2:`Routing`
- React use page based Routing 
    - Create a folder with the name of the route you want to create and create a `page.tsx` file inside the folder 

---
### Step-3: `Layout.tsx`
- We can create `layout.tsx` file to maintain the layout of the pages `example:` we want to display Navbar on All the Routes
- We can also Create `layout.tsx` inside the folders to maintain Route Specific Layout `example:` A banner of 20% discount for all the users who login in all the login routes
---
### Step-4:`Merging Routes`
- If we want to create the banner for both `signin` and `signup` page 
- We can solve the problem i two ways
    ### Step-1:
    - By creating A auth folder and placing both `signup` and `signin` inside auth folder with layout.tsx
        - It creates Routes `/auth/signin`  `/auth/signup`
    ### Step-2:
    - while creating `auth` folder name it as `(auth)`  this will ignore the auth route 
        - It creates route `/signin`  `/signup`
---
### Step-5: `Components Directory`

- You should put all your `components` in a `components directory` insteed of keep them in `app ` directory

---
### Step-6: `Client And server components`

- For example if we want to create a `onClick` hadler when a button is clicked in Next js it gives an error it saks to use client 

```js
Error: Event handlers cannot be passed to Client Component props.
  <button onClick={function onClick} type=... className=... children=...>
                  ^^^^^^^^^^^^^^^^^^
If you need interactifirstvity, consider converting part of this to a Client Component.
```

### What is the error about  ?

- Next js expects you to identify the component as either `client` or `server`
    - `server` components are rendered on server 
    - `client` components are pushed to client to be rendered
- By default all the components are server components  

### How to resolve the error 
- Make it as a client component 
```
"use client"
```
- Add `"use client"` at the top of the component to resolve the error 

    - But will loose the SEO of the page 

---
### Step-7 : `Fix the SEO problem`
- Insted of making the entire component as client make a `new component` for the button and make it as a `client component`  and import it  
    - Here only the button is rendered in client the entire parent component is redered on the server

---
# Read about fetching data from backend 
- we will use async components and loader.tsx 