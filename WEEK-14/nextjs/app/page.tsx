import axios from "axios";
const getUser=async()=>{
  const response=await axios.get("http://localhost:3000/api/user")
  return response.data
}
const Page = async() => {
  const UserDetails= await getUser();
  return (
    <div>
      <h1>{UserDetails?.name}</h1>
      <h1>{UserDetails?.email}</h1>
    </div>
  )
}

export default Page
