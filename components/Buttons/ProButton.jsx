import Link from "next/link";

export default function ProButton({ title, href, css }) {
    return (
        <Link
            href={href}
            className={`bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 text-white h-5 min-w-7 flex items-center justify-center text-sm rounded-[2px] transition duration-300 ${css}`}
        >
            {title}
        </Link>
    );
}
