import Link from "next/link"
import MaxWidthWraper from "./MAxWidthWraper"
import { Icons } from "./ui/Icon"
import { NavItems } from "./NavItems"

function NavBar() {
  return (
    <div className="bg-white sticky z-50 top-0  inset-x-0 h-16">
      <header className="relative bg-white ">
        <MaxWidthWraper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 itme-center">
              {/* TODO:mobile devices */}
              <div className="ml-4 flex lg:ml-0 lg:mt-2 ">
                <Link href={"/"}>
                <Icons.logo className="h-10 w-10"/>
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWraper>
      </header>
    </div>
  )
}

export default NavBar
