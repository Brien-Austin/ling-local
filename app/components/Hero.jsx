import { SignUp, SignUpButton, UserButton, UserProfile } from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export default function hero() {
  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-orange-50 to-teal-50">
        <h1 className="p-5 text-orange-500 text-3xl font-semibold flex justify-between items-center">
          LingoLocal
          <span>
            <UserButton className="w-10" afterSignOutUrl="/" />
          </span>
        </h1>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold text-slate-800 text-center  ">
              Translate any Pdf , Docx , Images into your Native Languages
            </h1>

            <h1 className="text-center mt-3 text-slate-600">
              Facilitating seamless communication across diverse Indian
              languages and cultures
            </h1>
            <Link href="sign-in">
              <button className="mt-5 text-md px-7 flex justify-center items-center gap-2 py-2 shadow-2xl bg-gradient-to-b from-green-400 text-white rounded-md to-green-500 ">
                Get Started <LogInIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
