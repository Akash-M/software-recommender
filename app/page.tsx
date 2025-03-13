import Link from "next/link"
import { ArrowRight, Code, Database, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Layers className="h-6 w-6" />
            <span>DevStack</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Find the Perfect Stack for Your Next Project
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  DevStack helps software architects and developers discover, compare, and choose the right tools and
                  libraries.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Software Architects</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Design robust systems with confidence by exploring curated recommendations based on industry best
                    practices.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <span>Compare architecture patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>Evaluate infrastructure options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>Stay updated with emerging technologies</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Developers</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Find the right tools and libraries to build your applications faster and with fewer bugs.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <span>Discover trending frameworks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>Compare library features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>Find code examples and tutorials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Layers className="h-6 w-6" />
            <span>DevStack</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevStack. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

