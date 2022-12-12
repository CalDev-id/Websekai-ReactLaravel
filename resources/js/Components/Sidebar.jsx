import { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Index from "@/Pages/Index";
// import route from "vendor/tightenco/ziggy/src/js";

const Sidebar = ({sidebarOn, setSidebarOn}) => {
    return (
        <>
            <section
                className={
                    sidebarOn
                        ? "w-full bg-black lg:w-[15%] sm:w-1/2 bg-opacity-50 lg:bg-transparent z-20 fixed"
                        : "hidden lg:block"
                }
            >
                <section
                    className={
                        sidebarOn
                            ? "w-2/3 sm:w-full bg-[#35383F] h-screen lg:w-full relative"
                            : "hidden lg:block lg:fixed lg:w-[15%] sm:w-1/2 h-full bg-[#35383F]"
                    }
                >
                    <span
                        onClick={() => {
                            setSidebarOn(false);
                        }}
                        className="text-green-500 text-3xl float-right m-5 lg:hidden"
                    >
                        <i className="bx bx-x"></i>
                    </span>
                    <div className="pl-5">
                        <h1 className="py-10 font-semibold text-2xl">Dynavx</h1>

                        <div className="mb-10">
                            <p className="text-white">Menu</p>
                            <ul className="text-lg">
                                <Link href={route("index")} className="flex my-3">
                                    <span className="text-green-500">
                                        <i className="bx bxs-home"></i>
                                    </span>
                                    <p className="mx-3">Discover</p>
                                </Link>
                                <li className="flex my-3">
                                    <span className="text-green-500">
                                        <i className="bx bxs-heart"></i>
                                    </span>
                                    <p className="mx-3">Your Favourite</p>
                                </li>
                                <li className="flex my-3">
                                    <span className="text-green-500">
                                        <i className="bx bxs-download"></i>
                                    </span>
                                    <p className="mx-3">Downloads</p>
                                </li>
                                <li className="flex my-3">
                                    <span className="text-green-500">
                                        <i className="bx bxs-chat"></i>
                                    </span>
                                    <p className="mx-3">Messages (102)</p>
                                </li>
                            </ul>
                        </div>
                        <div className="relative z-10">
                            <p className="text-white">Others</p>
                            <ul className="text-lg">
                                <Link href={route("subscription")} className="flex my-3">
                                    <span className="text-green-500">
                                        <i className="bx bxs-wallet"></i>
                                    </span>
                                    <p className="mx-3">Payments</p>
                                </Link>
                                <li className="flex my-3">
                                    <span className="text-green-500">
                                        <i className="bx bxs-bar-chart-square"></i>
                                    </span>
                                    <p className="mx-3">Analytics</p>
                                </li>
                                <li className="flex my-3">
                                    <span className="text-green-500">
                                        <i className="bx bxs-user"></i>
                                    </span>
                                    <p className="mx-3">Your Profile</p>
                                </li>
                                <Link href={route("logintes")}>
                                    <li className="flex my-3">
                                        <span className="text-green-500">
                                            <i className="bx bx-log-out"></i>
                                        </span>
                                        <p className="mx-3">Logout</p>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                        {/* bawah */}

                        <div>
                            <img src="/images/deku.png" alt="" className="absolute pl-5 z-0 opacity-30 w-full -bottom-0 -right-0 lg:w-full"/>
                        </div>
                        {/* <div className="my-10">
                            <p className="text-xl font-bold">For Greatest</p>
                            <p>12 of 30 hari</p>
                            <progress
                                className="progress progress-success w-56"
                                value="40"
                                max="100"
                            ></progress>
                        </div> */}
                    </div>
                </section>
            </section>
        </>
    );
};

export default Sidebar;
