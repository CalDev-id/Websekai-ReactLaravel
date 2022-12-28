<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Contracts\Session\Session as SessionSession;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Session\Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */

    private function activePlan(){
        $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubscription : null;

        if(!$activePlan){
            return null;
        }
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonth($activePlan->subscriptionPlan->active_period_in_months);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());

        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' => $remainingActiveDays,
            'activeDays' => $activeDays,
        ];
    }
    
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'flash' => [
                'message' => $request->session()->get('message'),
                'type' => $request->session()->get('type'),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
