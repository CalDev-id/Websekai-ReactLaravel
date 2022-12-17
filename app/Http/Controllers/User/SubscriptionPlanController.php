<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\UserSubscription;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $plans = SubscriptionPlan::all();
        return inertia('Subscription', [
            'plans' => $plans
        ]);
    }
    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan )
    {
        //['user_id', 'subscription_plan_id', 'price', 'expired_date', 'payment_status', 'snapToken']
        $data = [
            'user_id' => auth()->user()->id,
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonth($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }

}
