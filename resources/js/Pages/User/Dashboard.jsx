import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";
import SwiperC from "@/Components/Swiper";
import { useState } from "react";
import { Swiper } from "swiper/react";
import Browse from "@/Components/Browse";
import HomeLayout from "@/Layouts/HomeLayout";

const Dashboard = ({auth, movies, bMovies}) => {
    return (
        <HomeLayout home={true} pageName={"Websekai"} auth={auth}>
            <SwiperC movies={bMovies} />
            <div className="my-2 px-3">
                <div className="flex mb-3 justify-between text-green-500">
                    <p>Anime Baru</p>
                    <a href="#">selengkapnya..</a>
                </div>
                <Browse movies={movies} />
            </div>
            <div className="px-3">
                <div className="flex mb-3 justify-between text-green-500">
                    <p>Anime Baru</p>
                    <a href="#">selengkapnya..</a>
                </div>
                <Browse movies={movies} />
            </div>
        </HomeLayout>
    );
};

export default Dashboard;
