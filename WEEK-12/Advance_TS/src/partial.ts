/*
Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
*/

interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }

  //Here we cant make the picked fields as optional so we should use Partial

  type UserProfile1 = Pick<User, 'name'|'email'>

  type UpdateOptional=Partial<UserProfile1>
  
  const displayUserProfile1= (user: UpdateOptional) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };