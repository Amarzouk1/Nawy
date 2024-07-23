// MainNav.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/nawy.png"
const mainNavItems = ["Products"];

export default function MainNav() {
  return (
    <div className="flex justify-between px-16 py-4">
    <Image
    className="w-20 object-fit "
     src={logo} width={100} height={100} alt="nawy"/>
      <div className="mr-4 gap-2">
        {mainNavItems.map((item, index) => (
          <Button key={index} variant="link">
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
