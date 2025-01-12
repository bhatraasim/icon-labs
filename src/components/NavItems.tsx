"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import React, { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-onClick-outside"

export const NavItems=()=>{
    const [activeIndex, setActiveIndex] = useState<null| Number>(null)
    const isAnyOpen = activeIndex !== null

    useEffect(() => {
      const handler = (e:KeyboardEvent)=>{
        if(e.key === "Escape"){
            setActiveIndex(null)
        }
      }
      if(!activeIndex){
        document.addEventListener("keydown",handler)
      }
      

      return()=>{document.removeEventListener("keydown",handler)}
    }, [])
    
    

    const navRef= useRef<HTMLDivElement> (null)
    

    useOnClickOutside(navRef ,()=> setActiveIndex(null))
    return(
        <div className="flex gap-4 h-full " ref={navRef}>
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