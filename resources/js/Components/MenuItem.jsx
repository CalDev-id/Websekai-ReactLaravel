import { Link, Head } from "@inertiajs/inertia-react";

const MenuItem = ({link, icon, text, isActive, method = 'get'}) => {
    return (
        <>
            <Link
                href={link ? route(link) : null}
                className={`flex my-3 w-full ${isActive && 'border-r-2 border-green-500'}`}
                method={method}
                as="button"
            >
                <span className="text-green-500">
                    {icon}
                </span>
                <p className="mx-3">{text}</p>
            </Link>
        </>
    );
};
export default MenuItem;
