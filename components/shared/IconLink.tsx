import Link from "next/link";

interface IconLinkType {
  icon: React.ReactNode;
  href: string;
}
const IconLink = ({ icon, href }: IconLinkType) => {
  return (
    <Link href={href} className="hover:text-[#BA933E]">
      {icon}
    </Link>
  );
};

export default IconLink;
