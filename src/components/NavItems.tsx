"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"
import NavItem from "./NavItem"

export const NavItems=()=>{
    const [activeIndex, setActiveIndex] = useState<null| Number>(null)
    const isAnyOpen = activeIndex !== null
    return(
        <div className="flex gap-4 h-full ">
            {PRODUCT_CATEGORIES.map((category,i)=>{
                 

                const handelOpen = ()=>{
                    if (activeIndex === i) {
                        setActiveIndex(null)
                    }else{
                        setActiveIndex(i)
                    }
                }

                const isOpen = i === activeIndex

                return(
                    <NavItem
                        category={category}
                        isOpen={isOpen}
                        handelOpen={handelOpen}
                        key={category.value}
                        isAnyOpen={isAnyOpen}  />
                    
                    ) 
            })}
        </div>
    )
}