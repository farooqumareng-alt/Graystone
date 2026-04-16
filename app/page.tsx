import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Truck, Users, Shield, ArrowRight, CheckCircle2, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Gray Stone Transport" width={48} height={48} className="rounded-full" />
            <span className="text-lg font-semibold text-foreground hidden sm:block">Gray Stone Transport</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hidden md:block">Services</Link>
            <Link href="#coverage" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hidden md:block">Coverage</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hidden md:block">Contact</Link>
            <Link href="tel:9405007787" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(940) 500-7787</span>
              <span className="sm:hidden">Call</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Serving DFW Since 2010
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
                Your Health Moves
                <span className="text-primary block">With Us</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Professional non-emergency medical transportation throughout Dallas-Fort Worth. Safe, comfortable, and always on time.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="tel:9405007787" className="bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                  <Phone className="h-5 w-5" />
                  Book a Ride
                </Link>
                <Link href="#services" className="border border-border text-foreground px-6 py-3.5 rounded-lg font-semibold hover:bg-card hover:border-primary/50 transition-all inline-flex items-center gap-2">
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6">
                {["Wheelchair Accessible", "Certified Drivers", "24/7 Available"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                    <Image src="/logo.png" alt="Gray Stone Transport" width={64} height={64} className="rounded-full" />
                    <div>
                      <h3 className="font-semibold text-lg">Gray Stone Transport</h3>
                      <p className="text-sm text-muted-foreground">NEMT Provider</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Fleet Ready</p>
                        <p className="text-xs text-muted-foreground">Modern, well-maintained vehicles</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-lg">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Always On Time</p>
                        <p className="text-xs text-muted-foreground">Punctual & reliable service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored to your medical needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Wheelchair Transport", desc: "ADA-compliant vehicles with secure wheelchair systems for safe travel.", color: "primary" },
              { icon: Shield, title: "Stretcher Services", desc: "Medical-grade stretcher transport for patients who need to remain lying down.", color: "accent" },
              { icon: Users, title: "Ambulatory Services", desc: "Door-to-door assistance for patients who can walk with minimal support.", color: "primary" },
            ].map((service) => (
              <div key={service.title} className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color === "accent" ? "bg-accent/20" : "bg-primary/20"}`}>
                  <service.icon className={`h-7 w-7 ${service.color === "accent" ? "text-accent" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">Service Area</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dallas-Fort Worth Coverage</h2>
              <p className="text-muted-foreground mb-8">
                Serving the entire DFW metroplex with reliable, on-time medical transportation.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Dallas County", "Tarrant County", "Collin County", "Denton County", "Ellis County", "Rockwall County"].map((area) => (
                  <div key={area} className="flex items-center gap-3 bg-secondary/50 p-3 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-2xl p-10 text-center">
              <div className="text-6xl font-bold text-primary mb-2">50+</div>
              <p className="text-xl font-medium mb-2">Mile Service Radius</p>
              <p className="text-muted-foreground">From the heart of DFW</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to schedule a ride? Contact us today for reliable medical transportation.
              </p>
              <div className="space-y-4">
                <Link href="tel:9405007787" className="flex items-center gap-4 bg-card border border-border p-5 rounded-xl hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">(940) 500-7787</p>
                  </div>
                </Link>
                <Link href="mailto:contact@graystonet.com" className="flex items-center gap-4 bg-card border border-border p-5 rounded-xl hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">contact@graystonet.com</p>
                  </div>
                </Link>
                <div className="flex items-center gap-4 bg-card border border-border p-5 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">Available 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Request a Ride</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="(XXX) XXX-XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground">
                    <option>Wheelchair Transport</option>
                    <option>Stretcher Service</option>
                    <option>Ambulatory Service</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/25">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Gray Stone Transport" width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-semibold">Gray Stone Transport</p>
                <p className="text-sm text-muted-foreground">Since 2010</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Professional NEMT Services in Dallas-Fort Worth, Texas</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
