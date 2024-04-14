import {
  SignInButton,
  SignInWithMetamaskButton,
  SignOutButton,
} from "@clerk/clerk-react";
const Demo = () => {
  return (
    <div className="text-center py-5">
      <h1 className="text-3xl font-bold ">PLease Sign in</h1>
      <SignInButton
        mode="modal"
        redirectUrl="/dashboard"
        className="btn my-5"
      />

      <SignInWithMetamaskButton />

      <SignOutButton mode="modal" className="btn my-5" />
    </div>
  );
};

export default Demo;
