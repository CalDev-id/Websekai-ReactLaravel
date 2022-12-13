import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    const [dark, setDark] = useState(false);

    return (
        <>
            <Head title="Log in" />
            <img
                className={dark ? "absolute md:hidden max-h-[720px] w-full" : "absolute md:hidden max-h-[720px] w-full"}
                src="/images/LoadScreen.png"
                alt=""
            />
            <div
                className={
                    dark
                        ? "flex md:h-screen bg-white bg-opacity-90 relative text-black md:text-white md:bg-[#181a20]"
                        : "bg-slate-900 h-full bg-opacity-70 relative flex md:h-screen text-white md:bg-transparent md:text-black"
                }
            >
                <div className="hidden md:block w-1/2 xl:w-2/3 bg-[#181a20]">
                    <img
                        className="h-full w-full xl:pr-28"
                        src="/images/group.png"
                        alt=""
                    />
                </div>
                <div className="md:w-1/2 xl:w-1/3 md:flex md:justify-center md:pt-20 mx-auto w-full">
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

                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div>
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                <TextInput
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={data.email}
                                    className="rounded-2xl py-3 px-10 w-full border-none text-black bg-slate-100 focus:outline-green-500"
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />
                            </div>

                            <div className="mt-4">
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={data.password}
                                    className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100 focus:outline-green-500"
                                    autoComplete="current-password"
                                    handleChange={onHandleChange}
                                />
                            </div>

                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        value={data.remember}
                                        handleChange={onHandleChange}
                                    />
                                    <span className="ml-2">
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center justify-center w-full mt-4 rounded-full font-semibold bg-green-600">
                                <PrimaryButton
                                    className=""
                                    processing={processing}
                                >
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="font-semibold text-green-500 rounded-md flex justify-center py-3"
                            >
                                Forgot Password
                            </Link>
                        )}
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
                            Don't have an account?{" "}
                            <Link
                                href={route("register")}
                                className="text-green-500 px-2"
                            >
                                Register
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
                    #password {
                        background-image: url("/images/pass.png");
                        background-repeat: no-repeat;
                        background-position: left center;
                        background-position: 3% 50%;
                    }
                `}
            </style>
        </>
    );
}
