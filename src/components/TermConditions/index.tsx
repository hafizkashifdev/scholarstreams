import SectionTitle from "../Common/SectionTitle";

const TermsAndConditions = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Terms of Service for Scholar Streams"
          paragraph="Effective Date: [DATE]"
          center
        />
        <div className="prose dark:prose-dark max-w-none">
          <h2 className="font-bold mt-8">Agreement to Terms</h2>
          <p>
            By accessing and using the website Scholar Streams (available at <a href="https://scholarstreams.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://scholarstreams.com</a>), you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using this site's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by these terms, please do not use this site.
          </p>
          <h2 className="font-bold mt-8">Intellectual Property</h2>
          <p>
            The content on Scholar Streams, including text, graphics, images, videos, software, tutorials, and other material, is the property of Scholar Streams and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our site, except as generally and ordinarily permitted through the site's functionality intended for your personal, non-commercial use.
          </p>
          <h2 className="font-bold mt-8">Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Scholar Streams' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
          </p>
          <ul className="list-disc pl-5">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on Scholar Streams' website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Scholar Streams at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>
          <h2 className="font-bold mt-8">Disclaimer</h2>
          <p>
            The materials on Scholar Streams' website are provided on an 'as is' basis. Scholar Streams makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <h2 className="font-bold mt-8">Limitation of Liability</h2>
          <p>
            In no event shall Scholar Streams or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Scholar Streams' website, even if Scholar Streams or a Scholar Streams authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          <h2 className="font-bold mt-8">Accuracy of Materials</h2>
          <p>
            The materials appearing on Scholar Streams' website could include technical, typographical, or photographic errors. Scholar Streams does not warrant that any of the materials on its website are accurate, complete, or current. Scholar Streams may make changes to the materials contained on its website at any time without notice. However, Scholar Streams does not make any commitment to update the materials.
          </p>
          <h2 className="font-bold mt-8">Links</h2>
          <p>
            Scholar Streams has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Scholar Streams of the site. Use of any such linked website is at the user's own risk.
          </p>
          <h2 className="font-bold mt-8">Modifications</h2>
          <p>
            Scholar Streams may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms of service.
          </p>
          <h2 className="font-bold mt-8">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
          <h2 className="font-bold mt-8">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <p>
            Email: <a href="mailto:scholarstreams@gmail.com" className="text-blue-500 hover:underline">scholarstreams@gmail.com</a><br />
            Phone: <a href="tel:+923056619799" className="text-blue-500 hover:underline">+92 305 661 9799</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;