import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

const Index = () => {
    const [sidebarOn, setSidebarOn] = useState(true);
    return (
        <section className="md:flex bg-[#181A20]">
            <Sidebar />
            <section className="md:w-full md:px-5">
                <div className="w-full">
                    <div className="bg-transparent absolute py-5 md:py-8 z-10 w-full md:static">
                        <div className="flex justify-between mx-5">
                            <img
                                src="/images/logo.png"
                                alt=""
                                className="w-10 md:hidden"
                                onClick={() => {
                                    setSidebarOn(false);
                                }}
                            />
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search movie, anime, genre"
                                className="rounded-full py-2 px-5 min-w-[600px] max-w-[700px] border-none hidden md:block text-black bg-[#35383F] focus:outline-green-500"
                            />

                            <div className="flex self-center">
                                <span className="text-3xl text-white self-center mx-2 md:hidden">
                                    <i className="bx bx-search-alt-2"></i>
                                </span>
                                <img
                                    src="/images/websekai-logo.jpg"
                                    alt=""
                                    className="w-12 rounded-full hidden md:block"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        id="banner"
                        className="bg-black bg-opacity-40 h-72 text-white md:rounded-2xl md:w-2/3 md:mx-5"
                    >
                        <div className="bg-black bg-opacity-50 pt-44 px-5 pb-4 md:rounded-2xl md:px-20 md:pt-24 h-full">
                            <h1 className="text-2xl font-bold md:text-3xl">
                                Demon Slayer : Kimetsu No..
                            </h1>
                            <p className="text-sm md:text-base">
                                Action, Shounen, Martial Arts, Adventure
                            </p>
                            <div className="flex mt-2">
                                <button className="flex bg-green-500 text-white py-1 px-4 rounded-full mr-5">
                                    <span className="self-center">
                                        <i className="bx bx-play"></i>
                                    </span>
                                    <p className="self-center">Play</p>
                                </button>
                                <button className="flex bg-transparent border-2 border-white text-white py-1 px-4 rounded-full">
                                    <span>
                                        <i className="bx bx-plus"></i>
                                    </span>
                                    <p>My List</p>
                                </button>
                            </div>
                            <style jsx="true">
                                {`
                                    #banner {
                                        background-image: url("/images/tanjiro.webp");
                                        background-repeat: no-repeat;
                                        background-position: center;
                                        background-size: cover;
                                    }
                                `}
                            </style>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx="true">
                {`
                    #search {
                        background-image: url("/images/search.png");
                        background-repeat: no-repeat;
                        background-position: right center;
                        background-position: 95% 50%;
                    }
                `}
            </style>
        </section>
    );
};

export default Index;
