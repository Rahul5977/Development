import { useContext } from "react";
import UserContext from "../context/userContext.js";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username}</div>;
};
export default Profile;
