import { UserButton, UserProfile, useClerk } from "@clerk/clerk-react";
const Dashboard = () => {
  const { user } = useClerk();
  console.log(user.fullName);
  return (
    <div>
      <h1>Welcome to our Dashboard, Mr. {user.fullName}</h1>
      <UserButton />
      <UserProfile path="/user-profile" routing="path" />
    </div>
  );
};

export default Dashboard;
