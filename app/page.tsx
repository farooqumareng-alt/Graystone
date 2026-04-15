import { Header } from "@/components/header"
import { ExecutiveSummary } from "@/components/executive-summary"
import { CoreServices } from "@/components/core-services"
import { TargetMarkets } from "@/components/target-markets"
import { CompetitorAnalysis } from "@/components/competitor-analysis"
import { GrowthOpportunities } from "@/components/growth-opportunities"
import { OperationalChallenges } from "@/components/operational-challenges"
import { TechnologyInnovations } from "@/components/technology-innovations"
import { StrategicPriorities } from "@/components/strategic-priorities"
import { ActionableRecommendations } from "@/components/actionable-recommendations"
import { Footer } from "@/components/footer"

export default function StrategicPlanPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExecutiveSummary />
      <CoreServices />
      <TargetMarkets />
      <CompetitorAnalysis />
      <GrowthOpportunities />
      <OperationalChallenges />
      <TechnologyInnovations />
      <StrategicPriorities />
      <ActionableRecommendations />
      <Footer />
    </main>
  )
}
