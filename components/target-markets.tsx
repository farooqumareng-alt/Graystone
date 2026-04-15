import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building, 
  Users, 
  Landmark, 
  Shield, 
  Home, 
  Stethoscope 
} from "lucide-react"

export function TargetMarkets() {
  const markets = [
    {
      icon: Building,
      segment: "Healthcare Facilities",
      priority: "Primary",
      clients: ["Hospitals", "Dialysis centers", "Outpatient clinics", "Rehabilitation centers"],
      opportunity: "High volume, recurring contracts with stable revenue streams",
      marketSize: "$2.5B",
    },
    {
      icon: Shield,
      segment: "Insurance & Managed Care",
      priority: "Primary",
      clients: ["Medicaid/Medicare", "Private insurers", "MCOs", "TPAs"],
      opportunity: "Government-backed reimbursements with growth potential",
      marketSize: "$4.2B",
    },
    {
      icon: Home,
      segment: "Long-Term Care",
      priority: "Secondary",
      clients: ["Nursing homes", "Assisted living", "Home health agencies", "Hospice providers"],
      opportunity: "Growing elderly population driving consistent demand",
      marketSize: "$1.8B",
    },
    {
      icon: Users,
      segment: "Individual Patients",
      priority: "Secondary",
      clients: ["Elderly individuals", "Disabled patients", "Post-surgery patients", "Chronic care patients"],
      opportunity: "Direct relationships building brand loyalty",
      marketSize: "$890M",
    },
    {
      icon: Landmark,
      segment: "Government Programs",
      priority: "Growth",
      clients: ["VA medical centers", "County health programs", "State agencies", "PACE programs"],
      opportunity: "Long-term contracts with reliable payment terms",
      marketSize: "$1.2B",
    },
    {
      icon: Stethoscope,
      segment: "Specialty Care",
      priority: "Growth",
      clients: ["Cancer treatment centers", "Physical therapy", "Mental health facilities", "Pediatric specialists"],
      opportunity: "Specialized services commanding premium rates",
      marketSize: "$650M",
    },
  ]

  const priorityColors: Record<string, string> = {
    Primary: "bg-accent text-accent-foreground",
    Secondary: "bg-primary text-primary-foreground",
    Growth: "bg-chart-3 text-white",
  }

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Target Markets
          </span>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Market Segmentation & Opportunities
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Strategic focus on high-value market segments within the DFW healthcare 
            ecosystem, with clear prioritization for resource allocation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <market.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={priorityColors[market.priority]}>
                    {market.priority}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-serif mt-4">{market.segment}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Key Clients</p>
                  <div className="flex flex-wrap gap-1.5">
                    {market.clients.map((client, clientIndex) => (
                      <span 
                        key={clientIndex} 
                        className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Market Opportunity</p>
                  <p className="text-sm text-foreground">{market.opportunity}</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">Texas Market Size</p>
                  <p className="text-2xl font-bold text-accent-foreground">{market.marketSize}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
