import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  label: string;
}
export default function NavLink({ href, label }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href}>
      <a
        className={`group md:text-4xl block text-center font-bold uppercase ${
          isActive ? "bg-black text-white" : ""
        } hover:bg-black hover:text-white transition-colors duration-300`}
      >
        <span className="group-hover:animate-glitch block">{label}</span>
      </a>
    </Link>
  );
}
