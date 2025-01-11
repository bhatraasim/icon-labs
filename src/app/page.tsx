import MaxWidthWraper from "@/components/MAxWidthWraper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";


const perks =[
  {
    name:"Instant dilivery",
    icon:<ArrowDownToLine />,
    description:"Get you asset in seconds on to your email "
  },
  {
    name:"Garanteed  Quality",
    icon:<CheckCircle />,
    description:"Every item is verified by our team which ensures highest quality "
  },
  {
    name:"For the Plent",
    icon:<Leaf />,
    description:"we have 1% of sales to help the planet "
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWraper >
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your market place for high-quality {''}
            <span className="text-blue-600 ">Digital assets </span>
          </h1>
          <p className=" mt-6 text-lg max-w-prose text-muted-foreground">
            welcome to Icon Labs  .Every assest in our platform is verified by out team to ensure highest quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6  ">
            <Link href={'/products'} className={buttonVariants()} > Browse Trending</Link>
            <Button variant={"ghost"}> Our Quality Products &rarr; </Button>

          </div>
        </div>
        {/* TODO:lists products */}
      </MaxWidthWraper>
      <section className="brodet-t border-gray-200 bg-gray-50"> 
        <MaxWidthWraper classNAme="py-20 ">

          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk)=>(
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full  bg-blue-100  text-blue-900">
                    {perk.icon }
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6  ">
                  <h3 className="text-base font-medium text-gray-900"> {perk.name} </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWraper>
      </section>

    </>
  )
}
