import HomeLayout from "@/Layouts/HomeLayout";
import SubscriptionCard from "@/Components/SubscriptionCard";

const Subscription = () => {
    return (
        <HomeLayout>
            <div className="py-20 lg:py-0 flex flex-col items-center">
                <div className="text-green-500 font-semibold text-[26px] mb-3">
                    Subscribe To Premium
                </div>
                <p className="text-base text-white leading-7 max-w-[302px] text-center">
                    Enjoy watching Full-HD animes, without restriction and without ads
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="md:flex justify-center gap-10 mt-5 md:mt-[70px]">
                    {/* <!-- Basic --> */}
                    <SubscriptionCard
                        name="Basic"
                        price={299000}
                        durationInMonth={3}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />

                    {/* <!-- For Greatest --> */}
                    <SubscriptionCard
                        isPremium
                        name="Premium"
                        price={899000}
                        durationInMonth={6}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </HomeLayout>
    );
};

export default Subscription;
