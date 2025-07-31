"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavigationBarItems = [
  {
    name: "캠페인명 생성",
    href: "/create_campaign_name",
  },
  {
    name: "광고그룹명 생성",
    href: "/create_ad_group_name",
  },
];

export default function NavigationBar() {
  return (
    <div className="flex justify-between items-center p-4">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {NavigationBarItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.href}>{item.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

//   <NavigationMenu viewport={false}>
//     <NavigationMenuList>
//       <NavigationMenuItem>
//         <NavigationMenuLink
//           asChild
//           className={navigationMenuTriggerStyle()}
//         >
//           <Link href="/create_campaign_name">Create Campaign Name</Link>
//         </NavigationMenuLink>
//       </NavigationMenuItem>
//       <NavigationMenuItem>
//         <NavigationMenuLink
//           asChild
//           className={navigationMenuTriggerStyle()}
//         >
//           <Link href="/create_ad_group_name">Create Ad Group Name</Link>
//         </NavigationMenuLink>
//       </NavigationMenuItem>
//     </NavigationMenuList>
//   </NavigationMenu>
// </div>
//   );
// }
