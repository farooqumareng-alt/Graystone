import { Building2, Phone, Mail, MapPin, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-serif font-bold">Gray Stone Transport</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional non-emergency medical transportation services 
              throughout the Dallas-Fort Worth metropolitan area.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/80">
                <Phone className="w-4 h-4 text-accent" />
                <span>940-500-7787</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/80">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@graystonetransport.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/80">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Dallas-Fort Worth, Texas</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Document Details</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/80">
                <FileText className="w-4 h-4 text-accent" />
                <span>Strategic Business Plan</span>
              </li>
              <li className="text-sm text-background/60">
                Prepared for Executive Review
              </li>
              <li className="text-sm text-background/60">
                Classification: Internal Use
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Gray Stone Transport. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Confidential Business Document
          </p>
        </div>
      </div>
    </footer>
  )
}
