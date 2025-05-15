# Backend in Next js

---

### Step-1:`Make a api directory`

- make a `api` directory inside `app`
- make the directorys you want and add a `route.ts` file inside it

- Inside `route.ts` file
  - to get `get` and `post` request
  ```ts
  export function GET() {
    return Response.json({
      email: "vishnu@gmail.com",
      password: "vishnu@2005",
    });
  }
  // for post request
  export function POST() {
    return Response.json({
      email: "vishnu@gmail.com",
      password: "vishnu@2005",
    });
  }
  ```
