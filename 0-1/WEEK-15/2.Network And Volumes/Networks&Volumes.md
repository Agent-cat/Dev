# Networks and Volumes

- them become important when we have multiple containers
    - Allow containers to talk to eachother we need Networks 
    - If you are running a database store data and stop the container the data goes away
    to solve this we need Volumes 

```
  Backend container 
                |
                |[NETWORKS]
                |    
   Database Container (mongo)
                |
                |
            [VOLUMES]
                
```   

---
# `Volumes :`

- Volumes helps you store the data in the database container even if the database container crashes or removed 

## Step-1: `Create a volume`
```bash
docker volume create volume_database
```
- Can view volumes `Docker volume ls `
## Step-2: `Mount`
- Mount the Volume to the database 
```bash
docker run -v volume_database:/data/db -p 27017:27017
```
- `-v` stands for volume 
- `volume_database:/data/db` - Here we are connecting the volume to the location where the database stores the data 
- mongo stores the data in `/data/db` inside the container ` it will be different for every database ` 
---
# `Networks`
- In docker Networks allows us to communicate with other containers
- Docker containers cant talk to each other by default 
- for `example :` we have two containers one with nodejs (backend ) and other with mongodb (database) thew boat cant communicate to each other 
```
    Backend      Database
        |           |
        |           |
        |           |[port:27017]
    [DB Port:27017]
```
- Here Both the ports are different They are connecting to the `ports of the container` not to the `Host machine Ports`

## Step-1: `Create Network`
```bash
docker network create my_custom_network
```
- It Creates a Network
- We can view Networks using ` docker network ls`

## Step-2: `Connect DB to Network`

- We can connect the Db to network using `--network ` tag and give it a name using `--name `

```bash
docker run -d --network my_custom_network --name mongo -p 27017:27017 mongo
```

- Here the database is connected to the network but the backend did not 

- To connect change the database url from `mongodb://localhost:27017/mydb` to `mongodb://<Container_name>:27017/mydb` ie `mongodb://mongo:27017/mydb`
---
## We can see the logs of the container by 
`docker logs <container id>  `