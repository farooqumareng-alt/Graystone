import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Truck, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock,
  MapPin,
  Phone,
  CheckCircle2
} from "lucide-react"

export default function StrategicPlan() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src="/logo.png" 
              alt="Gray Stone Transport" 
              width={80} 
              height={80}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">Gray Stone Transport</h1>
              <p className="text-sm text-muted-foreground">Strategic Plan Overview</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>DFW, Texas</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>(469) 864-9498</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 space-y-10">
        {/* Mission Statement */}
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-foreground leading-relaxed">
            Providing safe, reliable non-emergency medical transportation across the Dallas-Fort Worth metroplex since 2010.
          </p>
        </section>

        {/* Core Services */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-6">Core Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Truck, title: "Wheelchair Transport", desc: "ADA-compliant vehicles with secure wheelchair systems" },
              { icon: Shield, title: "Stretcher Services", desc: "Medical-grade stretcher transport for bed-bound patients" },
              { icon: Users, title: "Ambulatory Services", desc: "Door-to-door assistance for mobile patients" },
            ].map((service) => (
              <Card key={service.title} className="bg-card border-border">
                <CardContent className="pt-6">
                  <service.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Target Markets */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-6">Target Markets</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-foreground">Primary Markets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Dialysis Centers", "Hospitals & Health Systems", "Insurance & Managed Care"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-foreground">Growth Markets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Medicaid/Medicare Programs", "Long-Term Care Facilities", "Specialty Care Clinics"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Priorities */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-6">Strategic Priorities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                icon: Target, 
                title: "Expand Market Reach", 
                items: ["Secure Medicaid/Medicare contracts", "Partner with major health systems", "Expand service coverage area"]
              },
              { 
                icon: TrendingUp, 
                title: "Operational Excellence", 
                items: ["Implement GPS fleet tracking", "Optimize scheduling efficiency", "Maintain 95%+ on-time rate"]
              },
              { 
                icon: Users, 
                title: "Team Development", 
                items: ["Competitive driver compensation", "Ongoing safety training", "Reduce turnover below 20%"]
              },
              { 
                icon: Clock, 
                title: "Technology Upgrade", 
                items: ["Mobile dispatch system", "Patient booking portal", "Real-time tracking for facilities"]
              },
            ].map((priority) => (
              <Card key={priority.title} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <priority.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-foreground">{priority.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {priority.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Actions */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-6">Recommended Actions</h2>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Immediate (30 Days)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">1.</span> Complete TxDOT compliance audit</li>
                    <li className="flex gap-2"><span className="text-primary">2.</span> Launch driver recruitment campaign</li>
                    <li className="flex gap-2"><span className="text-primary">3.</span> Deploy GPS tracking system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Short-Term (90 Days)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">1.</span> Submit Medicaid provider application</li>
                    <li className="flex gap-2"><span className="text-primary">2.</span> Implement scheduling software</li>
                    <li className="flex gap-2"><span className="text-primary">3.</span> Establish hospital partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Medium-Term (6-12 Months)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">1.</span> Expand fleet to 15+ vehicles</li>
                    <li className="flex gap-2"><span className="text-primary">2.</span> Launch patient booking portal</li>
                    <li className="flex gap-2"><span className="text-primary">3.</span> Achieve NEMT accreditation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Gray Stone Transport - Since 2010</p>
          <p>Confidential - Executive Review Document</p>
        </div>
      </footer>
    </div>
  )
}
