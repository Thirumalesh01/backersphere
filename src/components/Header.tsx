
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Menu, 
  X, 
  LogIn, 
  UserPlus,
  Rocket
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">BackerSphere</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/explore" className="text-sm font-medium transition-colors hover:text-primary">
            Explore
          </Link>
          <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            How It Works
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search projects..."
                className="w-[200px] pr-8"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <X
                className="absolute right-2 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Link to="/login">
            <Button variant="ghost" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button variant="ghost" size="sm">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </Link>

          <Link to="/start-campaign">
            <Button size="sm">
              Start a Campaign
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/explore" className="flex items-center gap-2 text-sm font-medium py-2 hover:text-primary">
                  Explore
                </Link>
                <Link to="/categories" className="flex items-center gap-2 text-sm font-medium py-2 hover:text-primary">
                  Categories
                </Link>
                <Link to="/how-it-works" className="flex items-center gap-2 text-sm font-medium py-2 hover:text-primary">
                  How It Works
                </Link>
                <Link to="/about" className="flex items-center gap-2 text-sm font-medium py-2 hover:text-primary">
                  About Us
                </Link>
                <Link to="/login" className="flex items-center gap-2 text-sm font-medium py-2 hover:text-primary">
                  <LogIn className="h-4 w-4" />
                  Log In
                </Link>
                <Link to="/signup" className="flex items-center gap-2 text-sm font-medium py-2 hover:text-primary">
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Link>
                <Link to="/start-campaign" className="mt-4">
                  <Button className="w-full">
                    Start a Campaign
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="absolute inset-x-0 top-16 bg-background p-4 md:hidden border-b">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search projects..."
                className="w-full pr-8"
                autoFocus
              />
              <X
                className="absolute right-2 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
