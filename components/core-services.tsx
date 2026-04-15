import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Accessibility, 
  BedDouble, 
  Footprints, 
  Stethoscope, 
  Heart, 
  Clock 
} from "lucide-react"

export function CoreServices() {
  const services = [
    {
      icon: Accessibility,
      title: "Wheelchair Transportation",
      description: "ADA-compliant vehicles equipped with wheelchair lifts and secure fastening systems for safe transport of wheelchair-bound patients.",
      features: ["ADA-compliant vehicles", "Hydraulic lifts", "Secure fastening systems", "Trained attendants"],
    },
    {
      icon: BedDouble,
      title: "Stretcher Services",
      description: "Professional stretcher transport for patients requiring lying-down positions during transit, with medical-grade equipment and trained staff.",
      features: ["Medical-grade stretchers", "Climate-controlled vehicles", "Professional attendants", "Hospital-to-home transport"],
    },
    {
      icon: Footprints,
      title: "Ambulatory Services",
      description: "Door-to-door transportation for patients who can walk with minimal assistance, including elderly and mobility-challenged individuals.",
      features: ["Door-to-door service", "Assistance boarding/exiting", "Comfortable seating", "Flexible scheduling"],
    },
    {
      icon: Stethoscope,
      title: "Dialysis Transport",
      description: "Reliable recurring transportation for dialysis patients with flexible scheduling to accommodate treatment schedules.",
      features: ["Recurring appointments", "Flexible scheduling", "Punctual service", "Post-treatment care"],
    },
    {
      icon: Heart,
      title: "Medical Appointments",
      description: "Transportation to routine medical appointments, specialist visits, therapy sessions, and follow-up care.",
      features: ["All medical facilities", "Wait-and-return", "Multiple stops", "Insurance coordination"],
    },
    {
      icon: Clock,
      title: "Hospital Discharge",
      description: "Safe and timely transport from hospitals to homes, rehabilitation centers, or long-term care facilities.",
      features: ["24/7 availability", "Same-day service", "Discharge coordination", "Family communication"],
    },
  ]

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Core Services
          </span>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Comprehensive NEMT Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Our service portfolio addresses the full spectrum of non-emergency 
            medical transportation needs with specialized vehicles and trained personnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <service.icon className="w-7 h-7 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
