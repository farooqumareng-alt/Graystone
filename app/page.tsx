"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, Clock, Truck, Users, Shield, ArrowRight, CheckCircle2, Mail, AlertTriangle, Calendar } from "lucide-react"

export default function HomePage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleBookingSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      pickup: data.get("pickup"),
      dropoff: data.get("dropoff"),
      date: data.get("date"),
      time: data.get("time"),
      service: data.get("service"),
      notes: data.get("notes"),
    }

    setStatus("submitting")
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="fixed w-full top-0 z-50">
        {/* Utility Bar */}
        <div className="bg-foreground text-background">
          <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between gap-4 text-xs sm:text-sm">
            <Link href="tel:9405007787" className="flex items-center gap-2 font-medium hover:opacity-80 transition-opacity shrink-0">
              <Phone className="h-3.5 w-3.5" />
              (940) 500-7787
            </Link>
            <p className="flex items-center gap-1.5 text-background/90 text-right">
              <AlertTriangle className="h-3.5 w-3.5 text-red-400 shrink-0" />
              <span>Medical emergency? Call <strong className="font-semibold">911</strong> immediately.</span>
            </p>
          </div>
        </div>
        {/* Navigation */}
        <nav className="bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/Logo.svg" alt="Gray Stone Transport" width={90} height={42} className="object-contain" />
              <span className="text-lg font-semibold text-foreground hidden sm:block">Gray Stone Transport</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hidden md:block">Services</Link>
              <Link href="#coverage" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hidden md:block">Coverage</Link>
              <Link href="#booking" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hidden md:block">Contact</Link>
              <Link href="tel:9405007787" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">(940) 500-7787</span>
                <span className="sm:hidden">Call</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-36 sm:pt-32 pb-20 relative overflow-hidden">
        <Image
          src="/assisted_arrival_at_graystone_transport.png"
          alt=""
          fill
          priority
          className="object-cover object-[85%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041e41] via-[#041e41]/85 to-[#041e41]/50" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Serving DFW Since 2010
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance text-white">
                Your Health Moves
                <span className="text-accent block">With Us</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                Professional non-emergency medical transportation throughout Dallas-Fort Worth. Safe, comfortable, and always on time.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="#booking" className="bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                  <Calendar className="h-5 w-5" />
                  Book a Ride
                </Link>
                <Link href="#services" className="border border-white/30 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all inline-flex items-center gap-2">
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6">
                {["Wheelchair Accessible", "Certified Drivers", "24/7 Available"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
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
                    <Image src="/Logo.svg" alt="Gray Stone Transport" width={120} height={56} className="object-contain" />
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
              { icon: Truck, title: "Wheelchair Transport", desc: "ADA-compliant vehicles with secure wheelchair systems for safe travel.", color: "primary", image: "/accessible_transport_van_at_modern_entrance.png" },
              { icon: Shield, title: "Stretcher Services", desc: "Medical-grade stretcher transport for patients who need to remain lying down.", color: "accent", image: "/accessible_transport_van_assistance.png" },
              { icon: Users, title: "Ambulatory Services", desc: "Door-to-door assistance for patients who can walk with minimal support.", color: "primary", image: "/assisted_arrival_at_graystone_transport.png" },
            ].map((service) => (
              <div key={service.title} className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="relative h-40">
                  <Image src={service.image} alt="" fill className="object-cover object-[70%_center]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#041e41]/10 via-card/60 to-card" />
                </div>
                <div className="p-8 pt-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 -mt-7 relative ring-4 ring-card ${service.color === "accent" ? "bg-accent/20" : "bg-primary/20"}`}>
                    <service.icon className={`h-7 w-7 ${service.color === "accent" ? "text-accent" : "text-primary"}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-24 border-y border-border relative overflow-hidden">
        <Image
          src="/accessible_transport_assistance.png"
          alt=""
          fill
          className="object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041e41] via-[#041e41]/80 to-[#041e41]/30" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-2xl text-center mx-auto lg:mx-0 lg:text-left">
            <p className="text-accent font-medium mb-3 uppercase tracking-wider text-sm">Service Area</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Dallas-Fort Worth Coverage</h2>
            <p className="text-white/80">
              Serving the entire DFW metroplex with reliable, on-time medical transportation.
            </p>
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
                    <p className="text-muted-foreground">Monday - Saturday, 6 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="booking" className="bg-card border border-border p-8 rounded-2xl scroll-mt-36">
              <h3 className="text-xl font-semibold mb-1">Book Your Ride</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill out the details below and our team will confirm your booking.</p>

              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <p className="font-semibold text-lg mb-2">Booking request sent!</p>
                  <p className="text-muted-foreground mb-6">We&apos;ll call you shortly to confirm your ride details.</p>
                  <button onClick={() => setStatus("idle")} className="text-primary font-medium hover:underline">
                    Book another ride
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                      <input name="name" type="text" required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Phone</label>
                      <input name="phone" type="tel" required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="(XXX) XXX-XXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Pickup Address</label>
                    <input name="pickup" type="text" required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="Street, City, ZIP" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Drop-off Address</label>
                    <input name="dropoff" type="text" required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="Street, City, ZIP" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Pickup Date</label>
                      <input name="date" type="date" required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Pickup Time</label>
                      <input name="time" type="time" required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Service Type</label>
                    <select name="service" required defaultValue="" className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground">
                      <option value="" disabled>Select a service</option>
                      <option>Wheelchair Transport</option>
                      <option>Stretcher Service</option>
                      <option>Ambulatory Service</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Additional Notes <span className="text-muted-foreground/70">(optional)</span></label>
                    <textarea name="notes" rows={3} className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground resize-none" placeholder="Mobility equipment, special instructions, etc." />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-destructive">Something went wrong sending your request. Please call us at (940) 500-7787 instead.</p>
                  )}

                  <button type="submit" disabled={status === "submitting"} className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/25 disabled:opacity-60 disabled:hover:scale-100">
                    {status === "submitting" ? "Sending..." : "Book This Ride"}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Prefer to book by phone? Call <Link href="tel:9405007787" className="text-primary hover:underline">(940) 500-7787</Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/Logo.svg" alt="Gray Stone Transport" width={76} height={36} className="object-contain" />
              <p className="font-semibold">Gray Stone Transport</p>
            </div>
            <p className="text-sm text-muted-foreground">Professional NEMT Services in Dallas-Fort Worth, Texas</p>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Powered by{" "}
              <Link href="https://fixvise.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                FixVise.com
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
