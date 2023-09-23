import { SignUp, UserButton, UserProfile } from "@clerk/nextjs";

export default function Signup() {
  return (
    <>
      <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
        <SignUp />
      </div>
    </>
  );
}
