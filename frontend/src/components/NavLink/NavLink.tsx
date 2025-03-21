import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkArgs {
    href: Maybe<string>
}

export const NavLink: FC<PropsWithChildren<NavLinkArgs>> = ({ href, children }) => {

    if(!href) return children

    const pathname = usePathname();
    const cleanHref = href.startsWith("/") ? href.slice(1) : href;
    const isActive = pathname === href || pathname === "/" + cleanHref;

    return <Link href={href} className={isActive ? "active" : ""}>
        {children}
    </Link>
}