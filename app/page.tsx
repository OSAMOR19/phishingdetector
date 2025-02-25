import Urlscanner from "@/components/ui/url-scanner"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="container max-w-4xl mx-auto pt-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Phishing Link Detector
          </h1>
          <p className="text-muted-foreground">Scan any URL to check if it&apos;s safe for use or potentially malicious</p>
        </div>
        <Urlscanner />
      </div>
    </main>
  )
}