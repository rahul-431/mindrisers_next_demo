import Link from "next/link";

interface LogoLinkType {
  icon: React.ReactNode;
  href: string;
}
const LogoLink = ({ icon, href }: LogoLinkType) => {
  return (
    <Link href={href} className="hover:text-[#BA933E]">
      {icon}
    </Link>
  );
};

export default LogoLink;
