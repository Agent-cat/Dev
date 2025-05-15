import { PrismaClient } from "../src/generated/prisma";
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