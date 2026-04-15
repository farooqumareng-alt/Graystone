import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  AlertTriangle, 
  Users, 
  DollarSign, 
  FileText, 
  Clock, 
  Truck,
  ArrowRight
} from "lucide-react"

export function OperationalChallenges() {
  const challenges = [
    {
      icon: Users,
      title: "Driver Recruitment & Retention",
      severity: "Critical",
      description: "High driver turnover and difficulty recruiting qualified drivers with CDL and patient care skills in a competitive labor market.",
      impacts: [
        "Service capacity limitations",
        "Increased training costs",
        "Potential service disruptions",
        "Customer satisfaction risk",
      ],
      mitigations: [
        "Implement competitive compensation packages",
        "Create career advancement pathways",
        "Offer comprehensive benefits including health insurance",
        "Develop driver recognition and incentive programs",
      ],
    },
    {
      icon: DollarSign,
      title: "Reimbursement Delays",
      severity: "High",
      description: "Delayed payments from Medicaid, Medicare, and insurance companies creating cash flow challenges and administrative burden.",
      impacts: [
        "Cash flow constraints",
        "Increased administrative workload",
        "Write-offs for denied claims",
        "Working capital requirements",
      ],
      mitigations: [
        "Implement robust billing and claims management software",
        "Hire experienced billing specialists",
        "Establish clear documentation protocols",
        "Diversify revenue mix with private-pay services",
      ],
    },
    {
      icon: FileText,
      title: "Regulatory Compliance",
      severity: "High",
      description: "Navigating complex federal, state, and local regulations including DOT, HIPAA, Medicaid, and ADA requirements.",
      impacts: [
        "Compliance violation risks",
        "Potential penalties and fines",
        "Operational complexity",
        "Administrative overhead",
      ],
      mitigations: [
        "Designate compliance officer role",
        "Implement compliance tracking systems",
        "Conduct regular internal audits",
        "Maintain relationship with healthcare attorneys",
      ],
    },
    {
      icon: Clock,
      title: "Scheduling Efficiency",
      severity: "Medium",
      description: "Optimizing routes and schedules to minimize empty miles while meeting patient appointment times and medical facility requirements.",
      impacts: [
        "Increased fuel and labor costs",
        "Reduced trip capacity",
        "Customer wait time complaints",
        "Driver overtime expenses",
      ],
      mitigations: [
        "Deploy advanced scheduling and routing software",
        "Implement real-time dispatch optimization",
        "Train dispatchers in route planning",
        "Analyze trip data for efficiency patterns",
      ],
    },
    {
      icon: Truck,
      title: "Fleet Management",
      severity: "Medium",
      description: "Maintaining a diverse fleet of wheelchair-accessible and stretcher vehicles while managing maintenance costs and vehicle downtime.",
      impacts: [
        "Unexpected repair expenses",
        "Vehicle availability issues",
        "Safety concerns",
        "Capital investment requirements",
      ],
      mitigations: [
        "Implement preventive maintenance schedules",
        "Utilize fleet management software",
        "Establish relationships with reliable repair shops",
        "Plan systematic vehicle replacement cycles",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Service Quality Consistency",
      severity: "Medium",
      description: "Ensuring consistent, high-quality patient experiences across all drivers and trips while maintaining safety standards.",
      impacts: [
        "Customer complaints and churn",
        "Contract compliance issues",
        "Reputation damage",
        "Liability exposure",
      ],
      mitigations: [
        "Develop comprehensive driver training programs",
        "Implement customer feedback systems",
        "Conduct regular quality audits",
        "Establish clear service standards and metrics",
      ],
    },
  ]

  const severityColors: Record<string, string> = {
    Critical: "bg-chart-4 text-white",
    High: "bg-accent text-accent-foreground",
    Medium: "bg-primary text-primary-foreground",
    Low: "bg-muted text-muted-foreground",
  }

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-chart-4/20 text-chart-4 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Risk Assessment
          </span>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Operational Challenges & Mitigations
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Critical operational risks identified with severity ratings and 
            recommended mitigation strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center shrink-0">
                    <challenge.icon className="w-6 h-6 text-chart-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-serif">{challenge.title}</CardTitle>
                      <Badge className={severityColors[challenge.severity]}>
                        {challenge.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-chart-4 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Business Impacts
                    </p>
                    <ul className="space-y-2">
                      {challenge.impacts.map((impact, impactIndex) => (
                        <li key={impactIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-chart-4 rounded-full mt-1.5 shrink-0" />
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-chart-3 mb-3 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Mitigation Strategies
                    </p>
                    <ul className="space-y-2">
                      {challenge.mitigations.map((mitigation, mitigationIndex) => (
                        <li key={mitigationIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-chart-3 rounded-full mt-1.5 shrink-0" />
                          {mitigation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
