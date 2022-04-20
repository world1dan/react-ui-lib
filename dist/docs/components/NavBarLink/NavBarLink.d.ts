/// <reference types="react" />
export interface NavBarLinkProps {
    to: string;
    title: string;
}
declare const NavBarLink: ({ to, title }: NavBarLinkProps) => JSX.Element;
export default NavBarLink;
