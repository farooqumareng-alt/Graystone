import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Smartphone, 
  MapPin, 
  Brain, 
  Shield, 
  BarChart3, 
  Wifi,
  CheckCircle2
} from "lucide-react"

export function TechnologyInnovations() {
  const technologies = [
    {
      icon: Smartphone,
      title: "Mobile Dispatch Platform",
      category: "Operations",
      status: "Priority",
      description: "Cloud-based dispatch system with mobile apps for drivers and real-time trip management capabilities.",
      benefits: [
        "Real-time trip assignment and updates",
        "Digital signature capture for trip verification",
        "In-app navigation and ETA calculations",
        "Instant communication between dispatch and drivers",
      ],
      roi: "40% reduction in dispatch errors",
    },
    {
      icon: MapPin,
      title: "GPS Fleet Tracking",
      category: "Operations",
      status: "Priority",
      description: "Advanced GPS tracking system with geofencing, route optimization, and real-time vehicle location monitoring.",
      benefits: [
        "Live vehicle location for customers and facilities",
        "Accurate ETA predictions",
        "Route optimization to reduce fuel costs",
        "Geofencing for automated arrival/departure logging",
      ],
      roi: "25% improvement in route efficiency",
    },
    {
      icon: Brain,
      title: "AI-Powered Scheduling",
      category: "Efficiency",
      status: "Future",
      description: "Machine learning algorithms to optimize trip scheduling, predict demand patterns, and balance driver workloads.",
      benefits: [
        "Predictive demand forecasting",
        "Automated multi-stop route optimization",
        "Smart driver assignment based on location and skills",
        "Reduced empty miles and wait times",
      ],
      roi: "35% increase in trips per driver",
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Portal",
      category: "Compliance",
      status: "Priority",
      description: "Secure web portal for healthcare facilities to book trips, track patients, and access transportation records.",
      benefits: [
        "Self-service booking for healthcare partners",
        "Real-time trip status visibility",
        "Secure document exchange",
        "Automated reporting and analytics",
      ],
      roi: "50% reduction in phone bookings",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Dashboard",
      category: "Management",
      status: "Recommended",
      description: "Comprehensive analytics platform providing insights into operations, finances, and customer satisfaction metrics.",
      benefits: [
        "Real-time KPI monitoring",
        "Financial performance tracking",
        "Customer satisfaction trends",
        "Driver performance analytics",
      ],
      roi: "Data-driven decision making",
    },
    {
      icon: Wifi,
      title: "IoT Vehicle Monitoring",
      category: "Fleet",
      status: "Future",
      description: "Connected sensors for preventive maintenance, driver behavior monitoring, and vehicle health diagnostics.",
      benefits: [
        "Predictive maintenance alerts",
        "Driver safety scoring",
        "Fuel efficiency monitoring",
        "Remote vehicle diagnostics",
      ],
      roi: "30% reduction in breakdown incidents",
    },
  ]

  const statusColors: Record<string, string> = {
    Priority: "bg-chart-4 text-white",
    Recommended: "bg-accent text-accent-foreground",
    Future: "bg-primary text-primary-foreground",
  }

  const categoryColors: Record<string, string> = {
    Operations: "bg-chart-1/10 text-chart-1 border-chart-1/30",
    Efficiency: "bg-chart-2/10 text-chart-2 border-chart-2/30",
    Compliance: "bg-chart-3/10 text-chart-3 border-chart-3/30",
    Management: "bg-chart-4/10 text-chart-4 border-chart-4/30",
    Fleet: "bg-chart-5/10 text-chart-5 border-chart-5/30",
  }

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Technology Roadmap
          </span>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Technology Innovations & Digital Transformation
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Strategic technology investments to enhance operational efficiency, 
            improve customer experience, and enable data-driven decision making.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <Badge className={statusColors[tech.status]}>
                    {tech.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={categoryColors[tech.category]}>
                    {tech.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-serif">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Key Benefits</p>
                  <ul className="space-y-1.5">
                    {tech.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Expected ROI: </span>
                    <span className="font-semibold text-accent-foreground">{tech.roi}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
