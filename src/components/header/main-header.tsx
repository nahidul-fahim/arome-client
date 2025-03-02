"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const categories = [
  { name: "Perfumes", href: "/category/perfumes" },
  { name: "Fragrances", href: "/category/fragrances" },
  { name: "Attar", href: "/category/attar" },
  { name: "Prayer Caps", href: "/category/prayer-caps" },
  { name: "Islamic Clothing", href: "/category/islamic-clothing" },
  { name: "Accessories", href: "/category/accessories" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background"
      )}
    >
      {/* Top bar */}
      <div className="hidden border-b py-2 lg:block">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Free shipping on orders over $50
          </p>
          <div className="flex items-center gap-4">
            <Link href="/track-order" className="text-sm hover:text-primary">
              Track Order
            </Link>
            <Link href="/help" className="text-sm hover:text-primary">
              Help & FAQs
            </Link>
            <Link href="/vendors/apply" className="text-sm hover:text-primary">
              Become a Vendor
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col gap-6 py-4">
              <Link href="/" className="flex items-center gap-2 font-bold">
                <Droplets className="h-6 w-6 text-primary" />
                <span className="text-xl">Attar Essentials</span>
              </Link>
              <div className="relative">
                <Input placeholder="Search products..." className="pr-8" />
                <Search className="absolute right-2 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
              <nav className="flex flex-col gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                      pathname === category.href && "bg-muted font-medium"
                    )}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2 pt-4">
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/account">
                    <User className="mr-2 h-4 w-4" />
                    My Account
                  </Link>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/wishlist">
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Link>
                </Button>
                <Button asChild className="justify-start">
                  <Link href="/cart">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    View Cart
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Droplets className="h-6 w-6 text-primary" />
          <span className="text-xl hidden sm:inline-block">
            Attar Essentials
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" && "text-primary"
            )}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Categories <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[200px]">
              {categories.map((category) => (
                <DropdownMenuItem key={category.name} asChild>
                  <Link href={category.href}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/vendors"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/vendors" && "text-primary"
            )}
          >
            Vendors
          </Link>
          <Link
            href="/deals"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/deals" && "text-primary"
            )}
          >
            Deals
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/about" && "text-primary"
            )}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/contact" && "text-primary"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Search and actions */}
        <div className="flex items-center gap-2">
          {/* Desktop search */}
          <div className="hidden md:block relative">
            <Input
              placeholder="Search products..."
              className="w-[200px] lg:w-[300px] pr-8"
            />
            <Search className="absolute right-2 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>

          {/* Mobile search toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/account/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/addresses">Addresses</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/auth/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth/register">Register</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" aria-label="Wishlist" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cart"
            asChild
            className="relative"
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                3
              </Badge>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile search bar */}
      {isSearchOpen && (
        <div className="border-t p-2 md:hidden">
          <div className="relative">
            <Input
              placeholder="Search products..."
              className="pr-8"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
