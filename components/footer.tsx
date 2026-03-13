import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-border bg-background text-foreground py-12"> {/* Use border-border, bg-background, text-foreground */}
      <div className="container mx-auto px-4 text-center">
        <p className="font-bold mb-4">© {new Date().getFullYear()} Bhrugu. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
            <Link href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                {/* Replace with actual SVG icons */}
                <span className="text-2xl"><i className="fab fa-linkedin"></i></span> {/* Example: LinkedIn */}
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                <span className="text-2xl"><i className="fab fa-github"></i></span> {/* Example: GitHub */}
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors duration-200">
                <span className="text-2xl"><i className="fab fa-twitter"></i></span> {/* Example: Twitter */}
            </Link>
        </div>
      </div>
    </footer>
  );
}