import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Target, 
  ArrowRight,
  CircleDot
} from "lucide-react"

export function StrategicPriorities() {
  const priorities = [
    {
      number: "01",
      title: "Operational Excellence",
      timeframe: "Immediate",
      objective: "Establish Gray Stone Transport as the most reliable NEMT provider in DFW through consistent, high-quality service delivery.",
      keyResults: [
        { metric: "On-Time Performance", target: "≥95%", current: "Baseline TBD" },
        { metric: "Customer Satisfaction", target: "≥4.8/5.0", current: "Baseline TBD" },
        { metric: "Trip Completion Rate", target: "≥99%", current: "Baseline TBD" },
        { metric: "Driver Retention", target: "≥85%", current: "Baseline TBD" },
      ],
      initiatives: [
        "Implement comprehensive driver training program",
        "Deploy real-time GPS tracking and dispatch system",
        "Establish quality assurance monitoring protocols",
        "Create customer feedback and resolution process",
      ],
    },
    {
      number: "02",
      title: "Market Expansion",
      timeframe: "Year 1-2",
      objective: "Grow market share by expanding geographic coverage and securing healthcare facility partnerships.",
      keyResults: [
        { metric: "Service Area Coverage", target: "+40%", current: "Current DFW core" },
        { metric: "Facility Partnerships", target: "20+", current: "TBD" },
        { metric: "Monthly Trip Volume", target: "2x growth", current: "Baseline TBD" },
        { metric: "Revenue Growth", target: "+100%", current: "Baseline TBD" },
      ],
      initiatives: [
        "Expand to Denton, Collin, and surrounding counties",
        "Develop hospital system partnership program",
        "Build dialysis center network relationships",
        "Launch targeted marketing to healthcare facilities",
      ],
    },
    {
      number: "03",
      title: "Insurance & Contract Development",
      timeframe: "Year 1-2",
      objective: "Diversify revenue streams through Medicaid managed care contracts and insurance partnerships.",
      keyResults: [
        { metric: "MCO Contracts", target: "3+", current: "TBD" },
        { metric: "Insurance-Covered Revenue", target: "60%", current: "TBD" },
        { metric: "Claims Acceptance Rate", target: "≥95%", current: "TBD" },
        { metric: "Days to Payment", target: "≤30", current: "TBD" },
      ],
      initiatives: [
        "Complete MCO credentialing requirements",
        "Implement compliant billing systems",
        "Hire dedicated billing and compliance staff",
        "Develop relationships with MCO transportation coordinators",
      ],
    },
    {
      number: "04",
      title: "Technology & Innovation",
      timeframe: "Year 2-3",
      objective: "Leverage technology to improve operational efficiency, reduce costs, and enhance customer experience.",
      keyResults: [
        { metric: "Digital Booking Rate", target: "≥50%", current: "TBD" },
        { metric: "Route Efficiency", target: "+25%", current: "Baseline TBD" },
        { metric: "Administrative Cost", target: "-20%", current: "Baseline TBD" },
        { metric: "Real-time Visibility", target: "100%", current: "TBD" },
      ],
      initiatives: [
        "Deploy cloud-based dispatch platform",
        "Launch healthcare facility booking portal",
        "Implement AI-powered scheduling optimization",
        "Develop business intelligence dashboard",
      ],
    },
  ]

  return (
    <section className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Strategic Framework
          </span>
          <h2 className="text-4xl font-serif font-bold mb-4">
            Strategic Priorities & Key Results
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-3xl">
            Four strategic pillars with measurable objectives to guide 
            Gray Stone Transport&apos;s growth over the next three years.
          </p>
        </div>

        <div className="grid gap-8">
          {priorities.map((priority, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-primary-foreground">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl font-serif font-bold text-accent/50">
                      {priority.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl font-serif text-primary-foreground">
                          {priority.title}
                        </CardTitle>
                        <Badge className="bg-accent text-accent-foreground">
                          {priority.timeframe}
                        </Badge>
                      </div>
                      <p className="text-primary-foreground/80 max-w-2xl">
                        {priority.objective}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Key Results
                    </h4>
                    <div className="space-y-3">
                      {priority.keyResults.map((kr, krIndex) => (
                        <div key={krIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <span className="text-sm text-primary-foreground/80">{kr.metric}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-primary-foreground/60">{kr.current}</span>
                            <ArrowRight className="w-4 h-4 text-accent" />
                            <span className="font-bold text-accent">{kr.target}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                      <CircleDot className="w-4 h-4" />
                      Key Initiatives
                    </h4>
                    <ul className="space-y-2">
                      {priority.initiatives.map((initiative, initIndex) => (
                        <li key={initIndex} className="text-sm text-primary-foreground/80 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                          {initiative}
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
