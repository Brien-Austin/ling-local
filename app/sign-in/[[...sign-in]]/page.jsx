import { SignUp, SignIn, UserButton, UserProfile } from "@clerk/nextjs";

export default function Signin() {
  return (
    <>
      <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
        <SignIn />
      </div>
    </>
  );
}
