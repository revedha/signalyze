import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

export function Terms() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4" data-testid="text-terms-title">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600" data-testid="text-terms-subtitle">
              Apex Meridian Private Limited (d.b.a. Signalyze)
            </p>
            <p className="text-sm text-slate-500 mt-2" data-testid="text-terms-last-updated">
              Last Updated: September 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction & Agreement</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Welcome to Signalyze. These Terms of Service ("Terms") govern the use of the consulting services, custom AI workflows, and insights reports ("Services"). The Services are provided by Apex Meridian Private Limited, a company incorporated under the laws of India, doing business as Signalyze ("we," "us," "our"). By signing a Statement of Work (SOW) or other service agreement with us, you ("you," "your," "Client") agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Scope of Services</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The specific Services, deliverables, project timelines, and fees will be detailed in a separate, mutually signed Statement of Work (SOW). Each SOW will form a part of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">3. Client Obligations</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To ensure the success of our engagement, you agree to provide timely and secure access to necessary data sources, appoint a primary point of contact, ensure you have all necessary rights to provide us with the data, and provide timely feedback.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Fees and Payment</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Service fees will be outlined in the applicable SOW. Unless otherwise specified, all payments are due within 30 days of the invoice date. All fees are exclusive of applicable taxes, including GST, which will be added to your invoice as required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Intellectual Property (IP)</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We retain all rights to our proprietary technology (Signalyze IP). You retain all rights to your data (Client Data). Upon full payment, you will own the final reports and insights (Deliverables) we create specifically for you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Confidentiality</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Both parties agree to maintain the confidentiality of all proprietary information shared during the engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Term and Termination</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The agreement begins when the first SOW is signed. A retainer-based SOW can be terminated by either party with 30 days' written notice. Upon termination, you are obligated to pay for all Services performed up to the effective date of termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, our total liability shall not exceed the total fees paid by you to us in the six (6) months immediately preceding the event giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">9. Governing Law and Jurisdiction</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This agreement shall be governed by the laws of India. Any legal proceedings shall be instituted exclusively in the courts of Chennai, Tamil Nadu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">10. Official Company Details</h2>
              <ul className="text-slate-700 leading-relaxed space-y-2">
                <li><strong>Legal Name:</strong> Apex Meridian Private Limited</li>
                <li><strong>Corporate Identity Number (CIN):</strong> U62099TN2025PTC182588</li>
                <li><strong>Permanent Account Number (PAN):</strong> ABDCA3624M</li>
                <li><strong>Tax Deduction and Collection Account Number (TAN):</strong> CHEA41874A</li>
                <li><strong>GST Identification Number (GSTIN):</strong> 33ABDCA3624M1ZR</li>
                <li><strong>Registered Office:</strong> A4, Chandrasekaran avenue, 1st Main Rd, Thoraipakkam, Tamil Nadu 600097</li>
                <li><strong>Contact Email:</strong> <a href="mailto:revedha@signalyze.ai" className="text-primary hover:underline">revedha@signalyze.ai</a></li>
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Button 
              onClick={() => window.history.back()} 
              variant="outline"
              className="mr-4"
              data-testid="button-terms-back"
            >
              ← Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'} 
              data-testid="button-terms-home"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}