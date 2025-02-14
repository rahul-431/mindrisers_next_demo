import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
interface NavMenuType {
  title: string;
  list: {
    href: string;
    label: string;
  }[];
}
const NavMenu = ({ title, list }: NavMenuType) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-max flex flex-col gap-2 px-6 py-2">
            {list.map((item, index) => (
              <NavigationMenuLink
                key={index}
                href={item.href}
                className="hover:text-[#BA933E]"
              >
                {item.label}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
