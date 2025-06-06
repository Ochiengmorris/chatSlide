import { usePathname } from "next/navigation";

export const usePath = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  const page = path[path.length - 1]; // let and const???
  return { page, pathname };
};
