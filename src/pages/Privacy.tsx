
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>
      
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p>This Privacy Policy describes how CrowdFund ("we", "our", or "us") collects, uses, and shares your personal information when you use our platform.</p>
        
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as:</p>
        <ul>
          <li>Account information (name, email address, password)</li>
          <li>Profile information (bio, photo, location)</li>
          <li>Payment information (processed by our payment partners)</li>
          <li>Communication (messages, feedback, support requests)</li>
          <li>Campaign information (if you're a Creator)</li>
        </ul>
        
        <p>We also automatically collect certain information when you use our platform, including:</p>
        <ul>
          <li>Log information (IP address, browser type, pages viewed)</li>
          <li>Device information (operating system, unique device identifiers)</li>
          <li>Location information (derived from IP address)</li>
          <li>Cookies and similar technologies</li>
        </ul>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our platform</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative messages, updates, and security alerts</li>
          <li>Respond to your comments, questions, and customer service requests</li>
          <li>Personalize your experience and deliver content relevant to your interests</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, prevent, and address fraud, violations of our policies, and other harmful activities</li>
          <li>Comply with legal obligations</li>
        </ul>
        
        <h2>3. Sharing of Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Other users of the platform, as necessary for the functioning of our services</li>
          <li>Vendors, service providers, and consultants that perform services for us</li>
          <li>Law enforcement or other third parties in response to legal processes or to comply with legal requirements</li>
        </ul>
        
        <h2>4. Your Choices</h2>
        <p>You can access, update, or delete your account information by logging into your account settings. You may also have certain rights regarding your personal information, depending on applicable law.</p>
        
        <h2>5. Data Security</h2>
        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
        
        <h2>6. International Transfers</h2>
        <p>Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.</p>
        
        <h2>7. Children's Privacy</h2>
        <p>Our platform is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.</p>
        
        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by revising the date at the top of the policy or by providing additional notice (such as adding a statement to our website or sending you a notification).</p>
        
        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@crowdfund.com.</p>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Have questions about how we protect your privacy?</p>
        <Button>Contact Our Privacy Team</Button>
      </div>
    </div>
  );
};

export default Privacy;
