import Link from "next/link"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-between flex flex-col p-5 gap-4 text-center md:flex-row">
        <Link href="/" >
          <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38}/>
        </Link>
        <p>2023 Eventify. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer