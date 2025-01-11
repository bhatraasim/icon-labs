import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"

type Category = typeof PRODUCT_CATEGORIES[number ]

interface NavItemProp{
    category: Category
    handelOpen:()=> void
    isOpen:boolean
    isAnyOpen:boolean

}

const NavItem =({category,handelOpen,isOpen,isAnyOpen}:NavItemProp)=>{
    return <div className="flex ">
        <div className="relative flex items-center">
            <Button className="gap-1.5 "> </Button>
        </div>
    </div>
}

export default NavItem