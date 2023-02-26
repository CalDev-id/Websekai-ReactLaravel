import { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Index from "@/Pages/Index";
import { UserMenu, UserOthers, Admin } from "@/Components/MenuList";
import SubscriptionDetail from "./SubscriptionDetail";
import MenuItem from "./MenuItem";
// import route from "vendor/tightenco/ziggy/src/js";

const Sidebar = ({ sidebarOn, setSidebarOn, name, plans, auth }) => {
    // console.log(auth.roles);

    return (
        <>
            <section
                className={
                    sidebarOn
                        ? "w-full bg-black lg:w-[20%] 2xl:w-[15%] sm:w-1/2 bg-opacity-50 lg:bg-transparent z-20 fixed"
                        : "hidden lg:block"
                }
            >
                <section
                    className={
                        sidebarOn
                            ? "w-2/3 sm:w-full bg-[#35383F] h-screen lg:w-full relative"
                            : "hidden lg:block lg:fixed lg:w-[20%] 2xl:w-[15%] sm:w-1/2 h-full bg-[#35383F]"
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
                        <h1 className="py-10 lg:py-16 font-semibold text-2xl">
                            {name}
                        </h1>

                        <div className="mb-10">
                            <p className="text-white">Menu</p>
                            <ul className="text-lg">
                                {UserMenu.map((menu, index) => (
                                    <MenuItem
                                        key={`${index}-${menu.text}`}
                                        link={menu.link}
                                        icon={menu.icon}
                                        text={menu.text}
                                        isActive={
                                            menu.link &&
                                            route().current(menu.link)
                                        }
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="relative z-10 mb-10">
                            <p className="text-white">Others</p>
                            <ul className="text-lg">
                                {UserOthers.map((menu, index) => (
                                    <MenuItem
                                        key={`${index}-${menu.text}`}
                                        link={menu.link}
                                        icon={menu.icon}
                                        text={menu.text}
                                        method={menu.method}
                                        isActive={
                                            menu.link &&
                                            route().current(menu.link)
                                        }
                                    />
                                ))}
                            </ul>
                        </div>
                        {auth.roles == "admin" ? (
                            <div className="relative z-10 mb-10">
                                <p className="text-white">Others</p>
                                <ul className="text-lg">
                                    {Admin.map((menu, index) => (
                                        <MenuItem
                                            key={`${index}-${menu.text}`}
                                            link={menu.link}
                                            icon={menu.icon}
                                            text={menu.text}
                                            method={menu.method}
                                            isActive={
                                                menu.link &&
                                                route().current(menu.link)
                                            }
                                        />
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            null
                        )}

                        {/* bawah */}

                        <div>
                            <img
                                src="/images/deku.png"
                                alt=""
                                className=" absolute pl-5 z-0 opacity-30 w-full -bottom-0 -right-0 lg:w-full"
                            />
                        </div>
                        {auth.activePlan && (
                            <SubscriptionDetail
                                isPremium={auth.activePlan.name === "Premium"}
                                remainingActiveDays={
                                    auth.activePlan.remainingActiveDays
                                }
                                activeDays={auth.activePlan.activeDays}
                                name={auth.activePlan.name}
                            />
                        )}
                    </div>
                </section>
            </section>
        </>
    );
};

export default Sidebar;
