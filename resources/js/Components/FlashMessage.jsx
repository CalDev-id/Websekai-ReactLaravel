
const FlashMessage = ({ message, type }) => {
    return (
        <div
            className={`${
                type === "success"
                    ? "bg-green-100 border-green-400 my-5 text-green-700"
                    : "bg-red-100 border-red-400 my-5 text-red-700"
            } border-l-4 p-4`}
            role="alert"
        >
            <p className="font-bold">{type}</p>
            <p>{message}</p>
        </div>
    );
};

export default FlashMessage;