const SubscriptionDetail = ({isPremium, remainingActiveDays, activeDays, name}) => {
    return (
        <>
        {!isPremium && (
            <div className="absolute bottom-10">
            <h1 className="font-semibold text-xl">{name}</h1>
            <p>{remainingActiveDays} of {activeDays} hari</p>
            <progress
                className="progress progress-success w-56"
                value={remainingActiveDays}
                max={activeDays}
            ></progress>
        </div>
        )}
        {isPremium && (
            <div className="absolute bottom-10">
                <h1 className="font-semibold text-xl">{name}</h1>
                <p>{remainingActiveDays} of {activeDays} hari</p>
                <progress
                    className="progress progress-success w-56"
                    value={remainingActiveDays}
                    max={activeDays}
                ></progress>
            </div>
        )}
        </>
    );
};

export default SubscriptionDetail;
