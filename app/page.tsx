import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Truck, Users, Shield, CheckCircle2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary fixed w-full top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Gray Stone Transport" width={50} height={50} className="rounded-full" />
            <span className="text-xl font-bold text-primary-foreground font-serif">Gray Stone Transport</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wide">Services</Link>
            <Link href="#coverage" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wide">Coverage</Link>
            <Link href="#contact" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wide">Contact</Link>
            <Link href="tel:9405007787" className="bg-accent text-accent-foreground px-5 py-2 rounded font-semibold hover:bg-accent/90 transition-colors">
              Call Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <span className="inline-block bg-accent/20 text-accent border border-accent px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                Since 2010
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-balance">
                Reliable Medical Transportation You Can Trust
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Professional non-emergency medical transportation throughout Dallas-Fort Worth. Safe, comfortable, and always on time.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Wheelchair Accessible Vehicles</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Trained & Certified Drivers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>24/7 Scheduling Available</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="tel:9405007787" className="bg-accent text-accent-foreground px-6 py-3 rounded font-semibold inline-flex items-center gap-2 hover:bg-accent/90 transition-all hover:-translate-y-0.5">
                  <Phone className="h-5 w-5" />
                  (940) 500-7787
                </Link>
                <Link href="#services" className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-card rounded-xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary">Book Your Ride</h3>
                    <p className="text-sm text-muted-foreground">Quick & Easy Scheduling</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  We provide door-to-door service for all your medical appointments. Reliable transportation when you need it most.
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Clock className="h-5 w-5" />
                  Available 7 Days a Week
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive non-emergency medical transportation tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Wheelchair Transport", desc: "ADA-compliant vehicles with secure wheelchair systems for safe and comfortable travel." },
              { icon: Shield, title: "Stretcher Services", desc: "Medical-grade stretcher transport for patients who need to remain lying down." },
              { icon: Users, title: "Ambulatory Services", desc: "Door-to-door assistance for patients who can walk with minimal support." },
            ].map((service) => (
              <div key={service.title} className="bg-secondary rounded-xl p-8 text-center border border-transparent hover:border-accent hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <service.icon className="h-8 w-8 text-accent group-hover:text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-serif">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">Service Area</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {["Dallas County", "Tarrant County", "Collin County", "Denton County", "Ellis County", "Rockwall County"].map((area) => (
                <div key={area} className="flex items-center gap-4 bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/20 hover:translate-x-2 transition-all">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Dallas-Fort Worth Metroplex</h3>
              <p className="text-primary-foreground/80 mb-6">
                Serving the entire DFW area with reliable, on-time medical transportation services.
              </p>
              <div className="text-accent text-4xl font-bold">50+ Mile Radius</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to schedule a ride? Contact us today for reliable medical transportation services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-card p-4 rounded-lg shadow-sm hover:-translate-y-1 transition-transform">
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <p className="text-muted-foreground">(940) 500-7787</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-card p-4 rounded-lg shadow-sm hover:-translate-y-1 transition-transform">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold text-primary">Location</p>
                    <p className="text-muted-foreground">Dallas-Fort Worth, Texas</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-card p-4 rounded-lg shadow-sm hover:-translate-y-1 transition-transform">
                  <Clock className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold text-primary">Hours</p>
                    <p className="text-muted-foreground">Available 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-6">Request a Ride</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2 uppercase tracking-wide">Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2 uppercase tracking-wide">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="(XXX) XXX-XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2 uppercase tracking-wide">Service Type</label>
                  <select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent transition-colors bg-card">
                    <option>Wheelchair Transport</option>
                    <option>Stretcher Service</option>
                    <option>Ambulatory Service</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-primary/90 hover:-translate-y-0.5 transition-all">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-card py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Image src="/logo.png" alt="Gray Stone Transport" width={60} height={60} className="mx-auto mb-4 rounded-full" />
          <p className="text-card/80 mb-2">Gray Stone Transport - Since 2010</p>
          <p className="text-card/60 text-sm">Professional NEMT Services in Dallas-Fort Worth, Texas</p>
        </div>
      </footer>
    </div>
  )
}
