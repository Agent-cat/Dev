## Steps to Initialize a prisma Todo Project
---
#### step-1: `Initialize Project`
initialize a prisma project
```bash
npx prisma init 
```
###### It will create a schema .prisma file and an .env
```prisma

generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
---
### Step-2:  `Create Models`
create models in `schema.prisma` file 

```prisma
model User{
id Int @id @default(autoincrement())
username String @unique
password String
firstName String?
lastName String?
}
```
- @id = PRIMARY KEY
- ? = optional

---
### Step-3: `Create Migrations`
 Anytime we change the `schema.prisma` File we need to create migrations  bu running
```bash
npx prisma migrate dev --name <anything>
```
- This will convert  the code into  sql queries 

- It will generate a migrations folder with a folder with the name given it contains the SQL queries

---
### Step-4: `Genetrate Clients`
To use `User.find({...})` we need to generate the clients 

```bash
npx prisma generate
```
- this generates new `client` for you
- This will generate a generated folder inside `/src` it contains prisma client code 
---
### Step-5: `Creating App`

- After generating the `clients ` we can use them by importing `import { PrismaClient } from "./generated/prisma";`

```ts
import { PrismaClient } from "./generated/prisma";
const { user, todos } = new PrismaClient();

const InsertUser = async (
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email:string
) => {
  await user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
      email
    },
  });
};

InsertUser("Agent-cat","Vishnu@2005","vishnu","Vardhan","mandalavishnuvardhan07@gmail.com")
```
- when we run this file it will insert the date into postgres database
---
### Step-6 : `Relationships`
- To link two Tables we shouls use the following code in `schems.sql` File

```prisma

generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User{
id Int @id @default(autoincrement())
username String @unique
password String
firstName String?
lastName String?
email String @unique
todos Todos[]
}

model Todos{
  id Int @id @default(autoincrement())
  title String 
  description String
  done Boolean @default(false)
  userId Int 
  User User @relation(fields: [userId], references: [id])
}
```
- Here the User has a todos model referense with array of todos a its type 
- The Toodos model has a User field with user as datatype and `@relation(fields: [userId], references: [id])` For the reletion between userId and id

---
# Read CRUD in todos from the official website
