"use client"
import { ShoppingCart } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"

const Cart = ()=>{

    const itemCout = 0
    const fee = 1 
    return <Sheet >
        <SheetTrigger className="group m-2 flex items-center ">
            <ShoppingCart
            aria-hidden="true"
             className="h-6 w-6  flex-shrink-0  text-gray-400 group-hover:text-gray-700 " > </ShoppingCart>
             <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-800 ">
                {itemCout}
            </span>
        </SheetTrigger>
        <SheetContent  className="flex w-full flex-col pr-0 sm:max-w-lg ">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle>Cart({itemCout})</SheetTitle>
            </SheetHeader>
            {itemCout > 0 ? (
                <>
                    <div className="flex w-full flex-col pr-6">
                        {/* TODO:cart logic */}
                        Cart items
                    </div>
                    <div className="space-y-4 pr-6">
                        <Separator />
                        <div className="space-y-1.5 pr-6 text-gray-700">
                            <div className="flex">
                                <span className="flex-1"> Shipping</span>
                                <span> Free</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1"> Transaction Fee</span>
                                <span> {formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1"> Total</span>
                                <span> {formatPrice(fee)}</span>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetTrigger asChild >
                                <Link  
                                href={'/cart'} 
                                className={buttonVariants({
                                    variant:"default" , 
                                    className:"w-full"
                                })}>
                                    Continue to Checkout
                                 </Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                    
                </>
            ) :(
                <>
                <div className="flex h-full flex-col justify-center items-center space-y-1 ">
                    <div 
                    aria-hidden="true"
                    className="relitive mb-4 w-60 h-60 text-muted-foreground">
                        <Image 
                        src='/hippo-empty-cart.png' 
                        width={500}
                        height={100}
                        alt="empty image" />
                    </div>
                    <div className="text-xl font-semibold"> Your cart is empty</div>
                    <SheetTrigger asChild >
                        <Link  href='/products' className={buttonVariants({
                            variant:"link",
                            size:"sm",
                            className:"text-sm text-muted-foreground"
                            })}> Add products </Link>
                    </SheetTrigger>
                </div>
                </>
            )}
        </SheetContent>
    </Sheet>
}

export default Cart