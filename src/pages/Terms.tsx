
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold relative inline-block">
          <span className="gradient-text">Terms of Service</span>
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
        </h1>
      </div>
      
      <div className="prose max-w-none">
        <p>Welcome to CrowdFund. By accessing or using our platform, you agree to be bound by these Terms of Service.</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">1. Acceptance of Terms</h2>
        <div className="highlight-box">
          <p>By registering with CrowdFund or using our services in any way, you accept these Terms of Service ("Terms") and our Privacy Policy, which is incorporated by reference into these Terms. If you do not agree to these Terms, do not use our services.</p>
        </div>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">2. Using CrowdFund</h2>
        <p>CrowdFund is a platform that allows users to create fundraising campaigns ("Creators") and contribute to campaigns ("Backers"). By using CrowdFund, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate, complete information when creating an account</li>
          <li>Maintain the security of your account and password</li>
          <li>Accept responsibility for all activities that occur under your account</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">3. Campaign Creation and Funding</h2>
        <p>When creating a campaign, Creators must provide honest, accurate information about their project. CrowdFund does not guarantee that campaigns will be successful or that project goals will be met.</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">4. Fees</h2>
        <p>CrowdFund charges fees for using the platform. Our fees are outlined in our Fee Schedule, which may be updated from time to time.</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">5. Prohibited Activities</h2>
        <p>Users may not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe upon the rights of others</li>
          <li>Submit false or misleading information</li>
          <li>Engage in fraudulent activities</li>
          <li>Interfere with the proper functioning of the platform</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">6. Termination</h2>
        <p>CrowdFund reserves the right to terminate or suspend accounts at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, CrowdFund, or third parties, or for any other reason.</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">7. Disclaimer of Warranties</h2>
        <div className="highlight-box">
          <p>CrowdFund provides the platform "as is" and "as available" without any warranties, expressed or implied.</p>
        </div>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">8. Limitation of Liability</h2>
        <p>CrowdFund shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">9. Governing Law</h2>
        <p>These Terms shall be governed by the laws of India, without regard to its conflict of law provisions.</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">10. Changes to These Terms</h2>
        <p>CrowdFund reserves the right to modify these Terms at any time. We will provide notice of significant changes by posting an announcement on our platform or sending you an email.</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at support@crowdfund.com.</p>
      </div>
      
      <div className="mt-12 text-center p-8 bg-gradient-soft rounded-lg shadow-sm">
        <p className="text-muted-foreground mb-4">Have a question about our Terms of Service?</p>
        <Button className="shadow-md">Contact Support</Button>
      </div>
    </div>
  );
};

export default Terms;
