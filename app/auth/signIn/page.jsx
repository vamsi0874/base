"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef } from "react";
import { assets } from "@/assests/assests";
import Image from "next/image";

export default function SignInPage() {
  const userName = useRef("");
  const pass = useRef("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handleProviderSignIn = async (provider) => {
    await signIn(provider, {
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      
      <div className="relative w-1/2 bg-cover bg-center bg-no-repeat bg-custom-blue"
      >
        <div className="absolute top-8 left-8 text-white text-4xl font-extrabold">
          Base
        </div>

        <div className="absolute top-1/4 left-8 text-white text-xl font-semibold max-w-xs">
          Generative detailed reports with just one click
        </div>

        <Image
          src='https://s3-alpha-sig.figma.com/img/ecc4/49ea/6b53db2801f7197a6cf3c0f494d01327?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syz0UqWYn9iHnDUh1-MAL0Tqhtnk2Gi8mSQaGEj3yGtp2K-W72HMR0yg873DEGqn10XPrA4bL6g0Q-FImgxuKUVg9Lz22JqNXHRu3m9rpFisCpBil5hWujFdIPvJSoaf6lplusMrgRUYtK6m5Gy4UaKECDKQnCRAf8aUQHw~Hq9yjQpZvIGJ239dXGXavrluMcJbBNRiwG92SEUKc0FDhhU1c9wPSwPt4XCxP5-l0uN~nbKiWKZe~r~RW4o~ZYqqF8kARPVD09NtSb2pWXjE3P2nmafUUBns~AxiLaEzgXP-1jlpTxJciRihvArSJa7nUWPbK0QdFexTnDoazgVqpQ__'
          alt="Generative Reports"
          width={400} 
          height={400} 
          className="absolute bottom-8 left-8 rounded-lg shadow-lg"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-800 p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-white">Sign In</h2>
          <p className="text-gray-300 mb-6">Sign in to your account</p>
          <div className="flex gap-custom-gap mb-6">
            <button
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-600 rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600"
              onClick={() => handleProviderSignIn("google")}
            >
              <Image
                src={assets.google_logo}
                alt="Google Logo"
                width={25}
                height={25}
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
            <button
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-600 rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600"
              onClick={() => handleProviderSignIn("apple")}
            >
              <Image
                src={assets.apple_logo}
                alt="Apple Logo"
                width={25}
                height={25}
                className="w-5 h-5 mr-2"
              />
              Sign in with Apple
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => (userName.current = e.target.value)}
               
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={(e) => (pass.current = e.target.value)}
              
              />
            </div>
            <div className="text-left mb-6">
              <Link href="/forgot-password" className="text-blue-400 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
            <div className="text-center mt-4">
              Don&apos;t have an account?{" "}
              <span className="text-blue-400 cursor-pointer hover:underline">
                Register here
              </span>
            </div>
          </form>
          <div className="flex justify-center gap-custom-gap mt-6">
            <Image
              src={assets.github_logo}
              alt="GitHub Logo"
              width={25}
              height={25}
              className="w-6 h-6"
            />
            <Image
              src={assets.twitter_logo}
              alt="Twitter Logo"
              width={25}
              height={25}
              className="w-6 h-6"
            />
            <Image
              src={assets.linkedin_logo}
              alt="LinkedIn Logo"
              width={25}
              height={25}
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
