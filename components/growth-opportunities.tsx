import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  MapPin, 
  Handshake, 
  Cpu, 
  Users, 
  Building2 
} from "lucide-react"

export function GrowthOpportunities() {
  const opportunities = [
    {
      icon: MapPin,
      title: "Geographic Expansion",
      timeline: "Short-term",
      impact: "High",
      description: "Expand service coverage to underserved DFW suburban areas including Denton, McKinney, Frisco, and Weatherford.",
      actions: [
        "Conduct market research on suburban healthcare facilities",
        "Establish satellite dispatch locations",
        "Hire local drivers with area knowledge",
        "Partner with suburban medical facilities",
      ],
      metrics: "Potential 40% increase in serviceable addresses",
    },
    {
      icon: Handshake,
      title: "Medicaid/Medicare Contracts",
      timeline: "Medium-term",
      impact: "High",
      description: "Pursue direct contracts with state Medicaid managed care organizations and Medicare Advantage plans.",
      actions: [
        "Obtain required state NEMT certifications",
        "Meet MCO credentialing requirements",
        "Build compliance documentation systems",
        "Develop relationships with MCO transportation coordinators",
      ],
      metrics: "Access to 3.5M+ covered lives in Texas",
    },
    {
      icon: Building2,
      title: "Healthcare Facility Partnerships",
      timeline: "Short-term",
      impact: "Medium",
      description: "Develop exclusive or preferred provider agreements with hospitals, dialysis centers, and specialty clinics.",
      actions: [
        "Create partnership proposals for major hospital systems",
        "Offer volume-based pricing incentives",
        "Implement facility-specific service protocols",
        "Provide dedicated account management",
      ],
      metrics: "Target 15-20 facility partnerships in Year 1",
    },
    {
      icon: Cpu,
      title: "Technology Integration",
      timeline: "Medium-term",
      impact: "High",
      description: "Integrate with healthcare IT systems including EHR platforms and hospital discharge systems for seamless scheduling.",
      actions: [
        "Develop API integrations with major EHR systems",
        "Implement automated trip request processing",
        "Create healthcare provider portal",
        "Enable real-time status updates to facilities",
      ],
      metrics: "Reduce scheduling time by 60%",
    },
    {
      icon: Users,
      title: "Specialized Service Lines",
      timeline: "Medium-term",
      impact: "Medium",
      description: "Develop specialized services for high-value patient populations including bariatric, pediatric, and mental health transport.",
      actions: [
        "Acquire specialized vehicles and equipment",
        "Train staff in specialized patient care",
        "Obtain additional certifications",
        "Market to specialty healthcare providers",
      ],
      metrics: "Premium pricing 25-40% above standard rates",
    },
    {
      icon: TrendingUp,
      title: "Fleet Modernization",
      timeline: "Long-term",
      impact: "Medium",
      description: "Transition to fuel-efficient and electric vehicles to reduce operating costs and appeal to environmentally-conscious partners.",
      actions: [
        "Develop phased fleet replacement plan",
        "Evaluate EV options for NEMT applications",
        "Install charging infrastructure",
        "Apply for green fleet incentives and grants",
      ],
      metrics: "30% reduction in fuel costs over 5 years",
    },
  ]

  const timelineColors: Record<string, string> = {
    "Short-term": "bg-chart-3 text-white",
    "Medium-term": "bg-accent text-accent-foreground",
    "Long-term": "bg-primary text-primary-foreground",
  }

  const impactColors: Record<string, string> = {
    High: "border-chart-3 text-chart-3",
    Medium: "border-accent text-accent-foreground",
    Low: "border-muted-foreground text-muted-foreground",
  }

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Growth Strategy
          </span>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Strategic Growth Opportunities
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Prioritized growth initiatives designed to expand market share, 
            increase revenue, and strengthen competitive position.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <opportunity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-serif">{opportunity.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge className={timelineColors[opportunity.timeline]} variant="secondary">
                          {opportunity.timeline}
                        </Badge>
                        <Badge variant="outline" className={impactColors[opportunity.impact]}>
                          {opportunity.impact} Impact
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {opportunity.description}
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Key Actions</p>
                  <ul className="space-y-1.5">
                    {opportunity.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Target Outcome: </span>
                    <span className="font-medium text-accent-foreground">{opportunity.metrics}</span>
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
