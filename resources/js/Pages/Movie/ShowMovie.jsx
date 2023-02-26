import Browse from "@/Components/Browse";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";
import ReactPlayer from "react-player";
import { Head } from "@inertiajs/inertia-react";

const Show = ({auth, movie, listMovie}) => {
    return (
        <HomeLayout auth={auth}>
            <Head title={movie.name} />
            <div className="h-screen lg:h-full pb-20">
                <div className="lg:hidden">
                    <ReactPlayer
                        url={"/videos/" + movie.video_url}
                        controls
                        width={"100%"}
                        height={"220px"}
                    />
                </div>
                <div className="hidden lg:block">
                    <ReactPlayer
                    url={"/videos/" + movie.video_url}
                        controls
                        width={"100%"}
                        height={"650px"}
                    />
                </div>
                <div className="mx-5 mt-5">
                    <h1 className="font-bold text-2xl text-white">
                        {movie.name}
                    </h1>
                    <div className="flex my-2">
                        <div className="flex mr-5 self-center">
                            <span className="text-green-500">
                                <i className="bx bxs-star"></i>
                            </span>
                            <p className="px-2">{movie.rating}</p>
                            <span className="text-green-500 text-xl">
                                <i className="bx bx-chevron-right"></i>
                            </span>
                            <p className="text-white">2022</p>
                        </div>
                        <div className="flex self-center">
                            <div className="text-green-500 rounded-lg border-2 border-green-500 text-xs mr-2">
                                <p className="py-[3px] px-2">13+</p>
                            </div>
                            <div className="text-green-500 rounded-lg border-2 border-green-500 text-xs mr-2">
                                <p className="py-[3px] px-2">Japan</p>
                            </div>
                            <div className="text-green-500 rounded-lg border-2 border-green-500 text-xs">
                                <p className="py-[3px] px-2">Subtitle</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between py-2 lg:hidden">
                        <div className="rounded-full border-2 bg-green-500 flex w-[49%] justify-center border-green-500 text-white">
                            <span className="text-xl self-center">
                                <i className="bx bx-play"></i>
                            </span>
                            <p className="self-center font-bold">Play</p>
                        </div>
                        <div className="rounded-full border-2 flex w-[49%] py-1 justify-center border-green-500 text-green-500">
                            <span className="text-xl self-center">
                                <i className="bx bx-cloud-download"></i>
                            </span>
                            <p className="self-center font-bold">Download</p>
                        </div>
                    </div>

                    <div className="py-2 text-sm text-white">
                        <p className="mb-1">
                            {movie.category}
                        </p>
                        <p className="text-slate-300">
                            {movie.description}
                            <span className="text-green-500">View More</span>
                        </p>
                    </div>

                    <div className="lg:hidden">
                        <div className="flex text-white font-bold justify-between mb-3">
                            <p>Anime List</p>
                            <p className="text-green-500 font-normal">
                                View More<i className="bx bx-chevron-down"></i>
                            </p>
                        </div>
                        <Browse movies={listMovie} />
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Show;
