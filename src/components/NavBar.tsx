import MaxWidthWraper from "./MAxWidthWraper"
import { Icons } from "./ui/Icon"
import { NavItems } from "./NavItems"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

function NavBar() {
  const user = null
  return (
    <div className="bg-white sticky z-50 top-0  inset-x-0 h-16">
      <header className="relative bg-white ">
        <MaxWidthWraper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 itme-center">
              {/* TODO:mobile devices */}
              <div className="ml-4 flex lg:ml-0 lg:mt-2 ">
                <Link href={"/"}>
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-start lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "secondary" })}
                    >
                      Sign In
                    </Link>
                  )}

                  {user ? null : (
                    <span
                      className="h-9 w-px bg-gray-200 "
                      aria-hidden="true"
                    />)}


                  {user ? null :
                    <Link
                      href='/sign-up'
                      className={buttonVariants({ variant: "default" })}>Create  account </Link>
                  }
                  {user ? <span
                    className="h-9 w-px bg-gray-200 "
                    aria-hidden="true" >

                  </span> : null}

                  {user ? null : <div className="flex lg:ml-6 " >
                    <span
                      className="h-9 w-px bg-gray-200 "
                      aria-hidden="true" >

                    </span>
                  </div>}

                  <div className="ml-4 flow-root lg:ml-6 ">
                    {/* <Cart /> */}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </MaxWidthWraper>
      </header>
    </div>
  )
}

export default NavBar
