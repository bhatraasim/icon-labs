import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWraper = ({classNAme , children}:{
    classNAme?:string,
    children:ReactNode
}) =>{
    return(
        <div className={cn( "mx-auto w-full max-w-screen-xl  px-2.5 md-px-20",classNAme)}>
            {children }
        </div>
    )
}

export default MaxWidthWraper