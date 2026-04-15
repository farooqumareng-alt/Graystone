import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Users, TrendingUp } from "lucide-react"

export function ExecutiveSummary() {
  const keyMetrics = [
    {
      icon: MapPin,
      label: "Service Area",
      value: "Dallas-Fort Worth",
      sublabel: "Metropolitan Region",
    },
    {
      icon: Phone,
      label: "Contact",
      value: "940-500-7787",
      sublabel: "24/7 Availability",
    },
    {
      icon: Users,
      label: "Target Clients",
      value: "Medical Facilities",
      sublabel: "& Individual Patients",
    },
    {
      icon: TrendingUp,
      label: "Industry Growth",
      value: "7.5% CAGR",
      sublabel: "Through 2030",
    },
  ]

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Executive Summary
          </span>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            Non-Emergency Medical Transportation Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Gray Stone Transport is a professional NEMT provider delivering reliable, 
            safe, and compassionate medical transportation services throughout the 
            Dallas-Fort Worth metropolitan area. Our mission is to bridge the gap 
            between patients and healthcare facilities with dignity and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {metric.label}
                    </p>
                    <p className="text-xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {metric.sublabel}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-10 bg-primary text-primary-foreground border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">Vision Statement</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  To be the most trusted and preferred NEMT provider in Texas, 
                  recognized for exceptional service quality, patient safety, 
                  and innovative healthcare transportation solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">Mission Statement</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Providing reliable, safe, and dignified transportation services 
                  that enable patients to access essential healthcare, improving 
                  health outcomes and quality of life throughout our community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
