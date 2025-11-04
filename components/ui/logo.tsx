import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-12 w-auto",
    md: "h-16 w-auto",
    lg: "h-20 w-auto",
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo/Bistro_official_logo.png"
        alt="Biztro"
        width={600}
        height={200}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
    </Link>
  )
}
