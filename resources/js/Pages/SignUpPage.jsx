import { Link, Head } from "@inertiajs/inertia-react";
import { useState } from "react";
// import route from "vendor/tightenco/ziggy/src/js";

const signUp = () => {
    const [dark, setDark] = useState(true);
    return (
        <>
            <Head title="Sign Up" />
            <img
                className={dark ? "absolute md:hidden" : "absolute md:hidden"}
                src="/images/LoadScreen.png"
                alt=""
            />
            <div
                className={
                    dark
                        ? "flex md:h-screen bg-white bg-opacity-90 relative text-black md:text-white md:bg-[#181a20]"
                        : "bg-slate-900 bg-opacity-70 relative flex md:h-screen text-white md:bg-transparent md:text-black"
                }
            >
                <div className="hidden md:block w-1/2 xl:w-2/3 bg-[#181a20]">
                    <img
                        className="h-full w-full xl:pr-28"
                        src="/images/group.png"
                        alt=""
                    />
                </div>

                <div className="md:w-1/2 xl:w-1/3 md:flex md:justify-center md:pt-20 mx-auto">
                    <div className="pt-5 mx-5 md:w-96 pb-10">
                        <input
                            data-theme="light"
                            type="checkbox"
                            className="toggle"
                            onClick={() => {
                                setDark(!dark);
                            }}
                        />
                        <img
                            src="/images/websekai-logo.jpg"
                            alt=""
                            className="rounded-full w-24 mx-auto mb-5"
                        />
                        <h1 className="font-bold text-2xl text-center mb-5">
                            Login To Your Account
                        </h1>
                        <form action="" className="w-full justify-center mb-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nama Anda"
                                className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100 mb-5 focus:outline-green-500"
                            />

                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100 mb-5 focus:outline-green-500"
                            />

                            <input
                                type="Password"
                                name="Password"
                                id="Password"
                                placeholder="Password"
                                className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100 focus:outline-green-500"
                            />
                            <div className="flex mt-5 mb-5">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="border-green-600 self-center mr-5 rounded-sm focus:outline-none"
                                />
                                <p className="self-center">Remember Me</p>
                            </div>

                            <button className="bg-green-600 text-white w-full py-2 rounded-full font-semibold">
                                Sign up
                            </button>
                        </form>

                        <div className="flex justify-center mb-5">
                            <p
                                className={
                                    dark
                                        ? "border-black border-b-[1px] px-10 self-center"
                                        : "border-b-[1px] px-10 border-slate-200 self-center"
                                }
                            ></p>
                            <p className="text-center font-semibold mx-2">
                                or continue with
                            </p>
                            <p
                                className={
                                    dark
                                        ? "border-black border-b-[1px] px-10 self-center"
                                        : "border-b-[1px] px-10 border-slate-200 self-center"
                                }
                            ></p>
                        </div>

                        <section className="flex justify-evenly">
                            <div className="px-6 py-3 border rounded-xl">
                                <img
                                    src="/images/facebooklogo.svg"
                                    alt=""
                                    className="w-7"
                                />
                            </div>
                            <div className="px-6 py-3 border rounded-xl">
                                <img
                                    src="/images/GoogleLogo.svg"
                                    alt=""
                                    className="w-7"
                                />
                            </div>
                            <div className="px-6 py-3 border rounded-xl">
                                <img
                                    src="/images/appleLogo.png"
                                    alt=""
                                    className="w-7"
                                />
                            </div>
                        </section>

                        <p className="text-slate-500 text-center mt-5">
                            Already have an account?{" "}
                            <Link
                                href={route("logintes")}
                                className="text-green-500 px-2"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`
                    #email {
                        background-image: url("/images/email.png");
                        background-repeat: no-repeat;
                        background-position: left center;
                        background-position: 3% 50%;
                    }
                `}
            </style>

            <style jsx="true">
                {`
                    #Password {
                        background-image: url("/images/pass.png");
                        background-repeat: no-repeat;
                        background-position: left center;
                        background-position: 3% 50%;
                    }
                `}
            </style>

            <style jsx="true">
                {`
                    #name {
                        background-image: url("/images/user.png");
                        background-repeat: no-repeat;
                        background-position: left center;
                        background-position: 3% 50%;
                    }
                `}
            </style>
        </>
    );
};

export default signUp;
