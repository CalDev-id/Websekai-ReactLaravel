import HomeLayout from "@/Layouts/HomeLayout";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";

const Subscription = ({ auth, plans }) => {
    const selectSubscription = (id) => {
        Inertia.post(route('user.dashboard.subscription.userSubscribe', { subscriptionPlan : id }));
    }
    return (
        <HomeLayout auth={auth}>
            <Head title="Subscription" />
            <div className="py-20 lg:py-0 flex flex-col items-center">
                <div className="text-green-500 font-semibold text-[26px] mb-3">
                    Subscribe To Premium
                </div>
                <p className="text-base text-white leading-7 max-w-[302px] text-center">
                    Enjoy watching Full-HD animes, without restriction and
                    without ads
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="md:flex justify-center gap-10 mt-5 md:mt-[70px]">
                    {/* <!-- Basic --> */}
                    {plans.map((plan) => (
                        <SubscriptionCard
                            name={plan.name}
                            price={plan.price}
                            durationInMonth={plan.active_period_in_months}
                            features={JSON.parse(plan.features)}
                            isPremium={plan.name === "Premium"}
                            key={plan.id}
                            onSelectSubscription={() => selectSubscription(plan.id)}
                        />
                    ))}
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </HomeLayout>
    );
};

export default Subscription;
