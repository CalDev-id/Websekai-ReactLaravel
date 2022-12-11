import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";
import SwiperC from "@/Components/Swiper";
import { useState } from "react";
import { Swiper } from "swiper/react";
import Browse from "@/Components/Browse";
import HomeLayout from "@/Layouts/HomeLayout";

const Index = () => {
    return (
        <HomeLayout>
            <SwiperC />
            <div className="my-2 px-3">
                <div className="flex mb-3 justify-between text-green-500">
                    <p>Anime Baru</p>
                    <a href="#">selengkapnya..</a>
                </div>
                <Browse />
            </div>
            <div className="px-3">
                <div className="flex mb-3 justify-between text-green-500">
                    <p>Anime Baru</p>
                    <a href="#">selengkapnya..</a>
                </div>
                <Browse />
            </div>
        </HomeLayout>
    );
};

export default Index;
