import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react"

export function CompetitorAnalysis() {
  const competitors = [
    {
      name: "ModivCare (LogistiCare)",
      type: "National",
      strengths: ["National scale", "Medicaid contracts", "Technology platform", "Brand recognition"],
      weaknesses: ["Less personalized service", "Slower response times", "Higher overhead"],
      threat: "High",
    },
    {
      name: "MTM, Inc.",
      type: "National",
      strengths: ["Managed care focus", "Data analytics", "Quality programs", "Multi-state presence"],
      weaknesses: ["Complex bureaucracy", "Limited local presence", "Generic service"],
      threat: "High",
    },
    {
      name: "Access2Care",
      type: "Regional",
      strengths: ["Texas expertise", "Medicaid relationships", "Local management"],
      weaknesses: ["Limited geographic reach", "Smaller fleet", "Less technology investment"],
      threat: "Medium",
    },
    {
      name: "Local Independents",
      type: "Local",
      strengths: ["Personal relationships", "Flexible pricing", "Quick decisions"],
      weaknesses: ["Limited capacity", "Inconsistent quality", "No technology", "Limited insurance"],
      threat: "Low",
    },
  ]

  const competitiveAdvantages = [
    {
      feature: "24/7 Availability",
      grayStone: true,
      competitors: "partial",
      description: "Round-the-clock service availability",
    },
    {
      feature: "Wheelchair Accessible Fleet",
      grayStone: true,
      competitors: true,
      description: "ADA-compliant vehicles",
    },
    {
      feature: "Stretcher Transport",
      grayStone: true,
      competitors: "partial",
      description: "Medical stretcher services",
    },
    {
      feature: "Local DFW Focus",
      grayStone: true,
      competitors: false,
      description: "Deep knowledge of local healthcare network",
    },
    {
      feature: "Personalized Service",
      grayStone: true,
      competitors: false,
      description: "Individual attention to patient needs",
    },
    {
      feature: "Real-time Tracking",
      grayStone: true,
      competitors: true,
      description: "GPS tracking and ETAs",
    },
    {
      feature: "Insurance Coordination",
      grayStone: true,
      competitors: true,
      description: "Direct billing to insurance providers",
    },
  ]

  const threatColors: Record<string, string> = {
    High: "bg-chart-4 text-white",
    Medium: "bg-accent text-accent-foreground",
    Low: "bg-chart-3 text-white",
  }

  const StatusIcon = ({ status }: { status: boolean | string }) => {
    if (status === true) return <CheckCircle2 className="w-5 h-5 text-chart-3" />
    if (status === false) return <XCircle className="w-5 h-5 text-chart-4" />
    return <MinusCircle className="w-5 h-5 text-accent" />
  }

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Competitive Landscape
          </span>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Key Competitors & Market Position
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Analysis of major competitors in the DFW NEMT market and 
            Gray Stone Transport&apos;s competitive positioning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {competitors.map((competitor, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-serif">{competitor.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{competitor.type} Provider</p>
                  </div>
                  <Badge className={threatColors[competitor.threat]}>
                    {competitor.threat} Threat
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-chart-3 mb-2">Strengths</p>
                    <ul className="space-y-1">
                      {competitor.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-chart-3 rounded-full" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-chart-4 mb-2">Weaknesses</p>
                    <ul className="space-y-1">
                      {competitor.weaknesses.map((weakness, i) => (
                        <li key={i} className="text-sm text-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-chart-4 rounded-full" />
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl font-serif">Competitive Advantage Matrix</CardTitle>
            <p className="text-sm text-muted-foreground">
              Feature comparison between Gray Stone Transport and market competitors
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Feature</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">Gray Stone</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">Competitors</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {competitiveAdvantages.map((item, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-secondary/50">
                      <td className="py-3 px-4 font-medium text-foreground">{item.feature}</td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={item.grayStone} />
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={item.competitors} />
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
