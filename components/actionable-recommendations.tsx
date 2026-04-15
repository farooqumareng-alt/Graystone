import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckSquare, 
  Clock, 
  DollarSign,
  AlertCircle,
  ArrowUpRight
} from "lucide-react"

export function ActionableRecommendations() {
  const recommendations = {
    immediate: [
      {
        title: "Implement GPS Tracking System",
        description: "Deploy real-time GPS tracking across all vehicles for improved dispatch efficiency and customer visibility.",
        investment: "$5,000-10,000",
        impact: "High",
        owner: "Operations Manager",
      },
      {
        title: "Standardize Driver Training Program",
        description: "Create comprehensive onboarding and ongoing training covering patient care, safety protocols, and customer service.",
        investment: "$3,000-5,000",
        impact: "High",
        owner: "HR/Training Lead",
      },
      {
        title: "Establish Quality Metrics Dashboard",
        description: "Define and track key performance indicators including on-time performance, completion rates, and customer satisfaction.",
        investment: "$2,000-4,000",
        impact: "Medium",
        owner: "Operations Manager",
      },
      {
        title: "Create Marketing Collateral",
        description: "Develop professional marketing materials for healthcare facility outreach including capabilities deck and service brochures.",
        investment: "$2,000-3,000",
        impact: "Medium",
        owner: "Business Development",
      },
    ],
    shortTerm: [
      {
        title: "Pursue MCO Credentialing",
        description: "Begin credentialing process with top 3 Medicaid managed care organizations in Texas to access covered populations.",
        investment: "$5,000-8,000",
        impact: "High",
        owner: "Executive/Compliance",
      },
      {
        title: "Expand Service Area",
        description: "Extend coverage to high-opportunity suburban markets including Denton, McKinney, and Frisco areas.",
        investment: "$15,000-25,000",
        impact: "High",
        owner: "Operations Manager",
      },
      {
        title: "Deploy Scheduling Software",
        description: "Implement cloud-based dispatch and scheduling platform to improve route optimization and reduce administrative burden.",
        investment: "$8,000-15,000",
        impact: "High",
        owner: "IT/Operations",
      },
      {
        title: "Build Hospital Partnerships",
        description: "Develop formal partnership agreements with 5-10 major hospital systems and discharge coordinators.",
        investment: "$3,000-5,000",
        impact: "Medium",
        owner: "Business Development",
      },
    ],
    mediumTerm: [
      {
        title: "Launch Healthcare Provider Portal",
        description: "Build HIPAA-compliant web portal enabling healthcare facilities to book, track, and manage transportation directly.",
        investment: "$20,000-35,000",
        impact: "High",
        owner: "IT/Product",
      },
      {
        title: "Implement AI Scheduling",
        description: "Deploy machine learning-powered scheduling to optimize routes, predict demand, and maximize fleet utilization.",
        investment: "$25,000-40,000",
        impact: "High",
        owner: "IT/Operations",
      },
      {
        title: "Fleet Modernization Phase 1",
        description: "Begin systematic replacement of older vehicles with fuel-efficient models and expanded wheelchair capacity.",
        investment: "$100,000-200,000",
        impact: "Medium",
        owner: "Finance/Operations",
      },
      {
        title: "Develop Specialized Services",
        description: "Launch premium service lines for bariatric transport, pediatric patients, and mental health facilities.",
        investment: "$30,000-50,000",
        impact: "Medium",
        owner: "Operations/BD",
      },
    ],
  }

  const impactColors: Record<string, string> = {
    High: "bg-chart-3 text-white",
    Medium: "bg-accent text-accent-foreground",
    Low: "bg-muted text-muted-foreground",
  }

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Action Plan
          </span>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Actionable Recommendations
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Prioritized action items organized by timeline with investment 
            requirements and expected business impact.
          </p>
        </div>

        <div className="space-y-10">
          {/* Immediate Actions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-chart-4 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground">Immediate Actions</h3>
                <p className="text-sm text-muted-foreground">Execute within 30 days</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.immediate.map((rec, index) => (
                <Card key={index} className="border-l-4 border-l-chart-4 border-border/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base font-semibold">{rec.title}</CardTitle>
                      <Badge className={impactColors[rec.impact]}>{rec.impact}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                    <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        {rec.investment}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <CheckSquare className="w-4 h-4" />
                        {rec.owner}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Short-Term Actions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground">Short-Term Actions</h3>
                <p className="text-sm text-muted-foreground">Execute within 90 days</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.shortTerm.map((rec, index) => (
                <Card key={index} className="border-l-4 border-l-accent border-border/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base font-semibold">{rec.title}</CardTitle>
                      <Badge className={impactColors[rec.impact]}>{rec.impact}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                    <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        {rec.investment}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <CheckSquare className="w-4 h-4" />
                        {rec.owner}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Medium-Term Actions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground">Medium-Term Actions</h3>
                <p className="text-sm text-muted-foreground">Execute within 6-12 months</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.mediumTerm.map((rec, index) => (
                <Card key={index} className="border-l-4 border-l-primary border-border/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base font-semibold">{rec.title}</CardTitle>
                      <Badge className={impactColors[rec.impact]}>{rec.impact}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                    <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        {rec.investment}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <CheckSquare className="w-4 h-4" />
                        {rec.owner}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <Card className="mt-12 bg-primary text-primary-foreground border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">$215K-$400K</p>
                <p className="text-primary-foreground/80">Total Investment Range</p>
                <p className="text-sm text-primary-foreground/60">Over 12 months</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">12</p>
                <p className="text-primary-foreground/80">Key Initiatives</p>
                <p className="text-sm text-primary-foreground/60">Across all phases</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">2x</p>
                <p className="text-primary-foreground/80">Target Revenue Growth</p>
                <p className="text-sm text-primary-foreground/60">By Year 2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
