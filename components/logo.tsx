import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="absolute top-12 left-6 z-10">
      <Link href="/">
        <div className="relative h-72 w-72 cursor-pointer">
          <Image
            src="/companylogo.png?height=400&width=400"
            alt="Buddhist Art Consultancy Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    </div>
  );
}
