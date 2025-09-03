import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4" data-testid="text-refund-title">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-slate-600" data-testid="text-refund-subtitle">
              Apex Meridian Private Limited (d.b.a. Signalyze)
            </p>
            <p className="text-sm text-slate-500 mt-2" data-testid="text-refund-effective-date">
              Policy Effective Date: September 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Our Philosophy</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Signalyze provides a high-touch, consulting-first service that involves significant upfront and ongoing investment of expert time, resources, and custom configuration. Our policy reflects the service-based nature of our work. Unlike a product, our services cannot be "returned."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Cancellation Policy</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Your ability to cancel depends on the nature of your engagement as defined in your Statement of Work (SOW).
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">For Retainer-Based Services:</h3>
                <ul className="text-slate-700 leading-relaxed space-y-2 pl-6">
                  <li className="list-disc">You may cancel your ongoing retainer service by providing 30 days' written notice to your primary contact at Signalyze or by emailing <a href="mailto:billing@signalyze.ai" className="text-primary hover:underline">billing@signalyze.ai</a>.</li>
                  <li className="list-disc">Your service will continue, and you will be billed for the final 30-day notice period. This allows us to complete any in-progress analysis and provide a final hand-off report.</li>
                  <li className="list-disc">No new workstreams will be initiated during this notice period.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">For Project-Based Engagements:</h3>
                <ul className="text-slate-700 leading-relaxed space-y-2 pl-6">
                  <li className="list-disc">Cancellation requests must be submitted in writing.</li>
                  <li className="list-disc">If you cancel a project after the SOW has been signed, you will be liable for payment for all work completed up to the cancellation date, billed at a pro-rated amount based on project milestones or hours worked.</li>
                  <li className="list-disc">Any initial setup fees or deposits are non-refundable, as they cover our initial discovery, project planning, and resource allocation.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">3. Refund Policy</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Due to the nature of our consulting and AI analysis services, our policy is as follows:
              </p>
              
              <ul className="text-slate-700 leading-relaxed space-y-4 pl-6">
                <li className="list-disc">
                  <strong>No Refunds for Services Rendered:</strong> We do not offer refunds for consulting hours, data analysis, or work already performed. Once our team has dedicated time and resources to your project or service period, the associated fees are non-refundable.
                </li>
                <li className="list-disc">
                  <strong>Retainer Fees:</strong> Monthly or quarterly retainer fees are paid in advance and are non-refundable.
                </li>
                <li className="list-disc">
                  <strong>Satisfaction and Service Commitment:</strong> We are committed to being your partner in success. If you are unsatisfied with a deliverable, please notify us in writing within seven (7) business days of its receipt. We will work with you in good faith to address the concerns and, if deemed appropriate at our sole discretion, may offer service credits or rework the deliverable to meet the requirements outlined in the SOW. This does not constitute a right to a refund.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">4. How to Request a Cancellation</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                All cancellation requests must be sent in writing via email to your account manager and/or to <a href="mailto:billing@signalyze.ai" className="text-primary hover:underline">billing@signalyze.ai</a>. The cancellation notice period will begin on the first business day following our acknowledgment of receipt of your request.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Button 
              onClick={() => window.history.back()} 
              variant="outline"
              className="mr-4"
              data-testid="button-refund-back"
            >
              ← Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'} 
              data-testid="button-refund-home"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}