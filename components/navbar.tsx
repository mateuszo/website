import NavLink from "./navlink";

export default function Navbar() {
  const navLinks = [
    // { href: "/", label: "Home" },
    { href: "/", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/videos", label: "Videos" },
    { href: "/talks", label: "Talks" },
  ];
  return (
    <nav className="border-black border-4 md:border-8 ">
      <ul className="flex justify-between">
        {navLinks.map((navLink) => (
          <li
            key={navLink.label}
            className="border-black border-4 md:border-8 flex-1"
          >
            <NavLink href={navLink.href} label={navLink.label}></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
