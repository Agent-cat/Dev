# Docker File
---
- `DockerFile` is written in the repository to containerise the app 
```Dockerfile
 # Base Image

FROM node:16-alpine  

# Working Directory Where the code will be  place in container

WORKDIR /app  

# COPY code fron local to container

COPY . .    

# RUN is used to Setup the Project in container

RUN npm install 
RUN npx prisma grnerate
RUN npm run build

# EXPOSE is used to expose the port

EXPOSE 3000

# CMD is used to run the app it is used whed we type docker run 

CMD [ "node","/dist/index.js" ]
```

- Some other commands
- `ENV` - Sets the environment variable

### Add a `.dockerignore` file

- when we run ` COPY . .`  it will copy `node_modules` also so we should make a `.dockerignore` file to ignore coppying them 

---
## Step-2: ` After writing Dockerfile` 

- After writing Dockerfile we should build it

```bash
docker build -t <Imagename> .

```
- Here `-t` is the tage `ie:` name 
- `.` is where Docker can find `Dockerfile`
---
##  Step-3 : `After Building your Docker image is ready `

- You can run it by typing 
```bash
docker run -d -p 3000:3000 <Imagename>
```
---
##  Step-4: `How to add ENV`

- while running the container add a `-e` tag to add an env 
```bash
docker run -d -e DATABASE_URL="..." -p 3000:3000  backend
```
- Here `-e` stands for environment variable
---
## Step-5: `Layers in Docker`
- Every step in docker file is a layer 
- Docker will cache each layer
- If one layer is changed then it runs the below layers again 
```Dockerfile
FROM node:16-alpine

WORKDIR /app

# Here if any thing in code changes it re runs the entire layers below it 
COPY . . 
RUN npm install
RUN npx prisma grnerate
RUN npm run build

EXPOSE 3000

CMD [ "node","/dist/index.js" ]
```
- But `npm install` and `npx prisma generate ` sholud only re run if package.json and prisma changs but we are running them even they are not changed  this is not a good practise 

```Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .

# Here we will run these steps only when package.json or prisma changes 
RUN npm install
RUN npx prisma grnerate

COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "node","/dist/index.js" ]
```
- Here we will run these steps only when package.json or prisma changes
- This will reduce the build time of the image 
- `package*`- any file which starts with package as name 
> Here if the code changes it will just re run the last 2 layers 
---