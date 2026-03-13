import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DoubleDDairy Digital',
  description: 'Privacy Policy for applications developed by DoubleDDairy Digital.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-20 sm:py-24">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Privacy Policy for Event Tracker
        </h1>
        <p className="mt-4 text-muted-foreground">Last updated: March 2026</p>

        <div className="mt-12 space-y-6 text-lg text-foreground/90">
          <h2 className="font-headline text-3xl font-bold tracking-tighter pt-6 border-b border-border/50 pb-2">1. Information We Collect</h2>
          <p>
            Event Tracker may collect limited information necessary to operate the app, including:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Basic device information such as device type and operating system</li>
            <li>App usage information to improve performance and user experience</li>
          </ul>
          <p>
            We do not collect personal information such as names, phone numbers, or exact location unless explicitly provided by the user.
          </p>

          <h2 className="font-headline text-3xl font-bold tracking-tighter pt-6 border-b border-border/50 pb-2">2. How We Use Information</h2>
          <p>
            The information collected is used to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Provide and maintain the functionality of the application</li>
            <li>Improve app performance and user experience</li>
            <li>Diagnose technical issues and fix bugs</li>
          </ul>

          <h2 className="font-headline text-3xl font-bold tracking-tighter pt-6 border-b border-border/50 pb-2">3. Third-Party Services</h2>
          <p>
            Our app may use trusted third-party services that may collect information in accordance with their own privacy policies. These services may include analytics or crash reporting tools.
          </p>

          <h2 className="font-headline text-3xl font-bold tracking-tighter pt-6 border-b border-border/50 pb-2">4. Data Security</h2>
          <p>
            We take reasonable measures to protect your information and ensure that it is handled securely.
          </p>

          <h2 className="font-headline text-3xl font-bold tracking-tighter pt-6 border-b border-border/50 pb-2">5. Children's Privacy</h2>
          <p>
            Event Tracker is not directed toward children under the age of 13. We do not knowingly collect personal information from children.
          </p>

          <h2 className="font-headline text-3xl font-bold tracking-tighter pt-6 border-b border-border/50 pb-2">6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any updates will be reflected on this page with a revised "Last updated" date.
          </p>

          <h2 className="font-headline text-3xl font-bold tracking-tighter pt-6 border-b border-border/50 pb-2">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us at:
          </p>
          <p>
            Email: <a href="mailto:doubleddairy854@gmail.com" className="text-primary hover:underline">doubleddairy854@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
