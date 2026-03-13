import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; // Assuming Card component is available
import { Input } from "./ui/input"; // Assuming Input component is available
import { Textarea } from "./ui/textarea"; // Assuming Textarea component is available

// Placeholder for social media icons/links
const SocialMediaLinks = () => (
  <div className="flex justify-center space-x-6 mt-8">
    <Link href="#" className="text-foreground hover:text-primary transition-colors duration-200">
      {/* Replace with actual SVG icons */}
      <span className="text-3xl"><i className="fab fa-linkedin"></i></span> {/* Example: LinkedIn */}
    </Link>
    <Link href="#" className="text-foreground hover:text-primary transition-colors duration-200">
      <span className="text-3xl"><i className="fab fa-github"></i></span> {/* Example: GitHub */}
    </Link>
    <Link href="#" className="text-foreground hover:text-primary transition-colors duration-200">
      <span className="text-3xl"><i className="fab fa-twitter"></i></span> {/* Example: Twitter */}
    </Link>
  </div>
);


export default function Contact() {
  return (
    <section className="w-full max-w-3xl mx-auto py-12 px-4 bg-background text-foreground"> {/* Use bg-background, text-foreground, adjusted padding */}
      <Card className="neo-border shadow-neo bg-background text-foreground"> {/* Use bg-background, text-foreground */}
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">Let&apos;s Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-lg font-medium text-center text-foreground/80">
            Have a project in mind, a question, or just want to say hi? Feel free to reach out!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-2">Name</label>
              <Input id="name" type="text" placeholder="Your Name" className="neo-border bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-2">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" className="neo-border bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-2">Message</label>
              <Textarea id="message" placeholder="Your message here..." rows={5} className="neo-border bg-background text-foreground" />
            </div>
            <Button type="submit" size="lg" className="w-full neo-border shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all text-lg py-4">
              Send Message
            </Button>
          </form>
          <SocialMediaLinks /> {/* Integrate social media links */}
        </CardContent>
      </Card>
    </section>
  );
}