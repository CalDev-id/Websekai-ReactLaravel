import { useEffect } from "react";
import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
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

        // console.log(data);
        post(route("register"));
    };

    const [dark, setDark] = useState(true);

    return (
        <>
            <img
                className={dark ? "absolute md:hidden h-fit max-h-[720px] w-full" : "absolute md:hidden max-h-[720px] h-fit w-full"}
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
                        className="h-full w-full"
                        src="/images/group.png"
                        alt=""
                    />
                </div>

                <div id="sign" className="md:w-1/2 xl:w-1/3 md:flex md:justify-center self-center mx-auto w-full">
                    <div className="pt-5 mx-5 md:w-96">
                        <Head title="Register" />
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
                            Create Your Account
                        </h1>

                        {/* mulai disini */}
                        <form onSubmit={submit}>
                            <div>
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                                <TextInput
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={data.name}
                                    autoComplete="name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                    className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100"
                                />
                            </div>

                            <div className="mt-4">
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={data.email}
                                    className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100"
                                    autoComplete="username"
                                    handleChange={onHandleChange}
                                    required
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
                                    placeholder="Password"
                                    name="password"
                                    value={data.password}
                                    className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100"
                                    autoComplete="new-password"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="mt-4">
                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-center w-full mt-4 rounded-full font-semibold bg-green-600">
                                <PrimaryButton
                                    className="ml-4"
                                    processing={processing}
                                >
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                        <div className="flex justify-center mb-5 mt-2">
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

                        <p className="text-slate-500 text-center mt-5 pb-10">
                            Already have an account?{" "}
                            <Link
                                href={route("login")}
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
                    #password,
                    #password_confirmation {
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
}
