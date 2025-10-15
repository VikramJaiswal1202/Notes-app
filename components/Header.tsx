import Link from "next/link"
import Image from "next/image"
import { shadow } from "@/styles/utils"
import { Button } from "./ui/button"
import { ModeToggle } from "./darkModeToggle"

const Header = () => {
    const user = null;
    return (
        <header
            className="flex relative h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
            style={{ boxShadow: shadow }}
        >
            <Link href="/" className="flex items-end gap-2">
                <Image src="/LOGO.jpg" height={60} width={60} alt="Logo" className="rounded-full" priority />
                <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
                    Chad
                    <span >
                        Notes
                    </span>
                </h1>
            </Link>
            <div className="flex gap-4">
                {user ? (
                    "Logout"
                ) : (
                    <>
                        {/* <Button asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild variant="outline" className=" hidden sm:block">
                            <Link href="/sign-up">SignUp</Link>
                        </Button> */}
                    </>
                )
                }
                <ModeToggle/>
            </div>
        </header>
    )
}

export default Header
