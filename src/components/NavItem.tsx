import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProp {
    category: Category
    handelOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean

}

const NavItem = ({ category, handelOpen, isOpen, isAnyOpen }: NavItemProp) => {
    return <div className="flex ">
        <div className="relative flex items-center">
            <Button className="gap-1.5  " onClick={handelOpen} variant={isOpen ? "secondary" : "ghost"}>{category.label}
                <ChevronDownIcon className={cn("h-4 w-4 transition-all text-muted-foreground ", { "-rotate-180 ": isOpen })} />
            </Button>
        </div>
        {isOpen ? (
            <div className={cn("absolute inset-x-0  top-full text-sm text-muted-foreground", {
                "animate-in fade-in slide-in-from-top-5 ": isOpen
            })}>
                <div
                    className="absolute inset-0 top-1/2 bg-white"
                    aria-hidden="true"
                />
                <div className="relative bg-white ">
                    <div className="mx-auto max-w-7xl px-8 ">
                        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16  ">
                            <div className="col-span-4  grid grid-cols-3 gap-x-8">
                                {category.feature.map((item) => (
                                    <div className="group relative text-base sm:text-sm  "
                                        key={item.pname}>
                                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75  ">
                                            <Image
                                                src={item.imagesrc}
                                                alt="product img"
                                                width={380}
                                                height={110}
                                                className="object-center object-cover" />
                                        </div>
                                        <Link href={item.herf} className="mt-6 block font-semibold text-gray-900 ">
                                            {item.pname || "unNamed"} 
                                        </Link>
                                        <p className="mt-1" aria-hidden="true"> Shop now </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
    </div>
}

export default NavItem