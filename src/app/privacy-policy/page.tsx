import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Discover Your Journey of Lifelong Learning",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const TermsConditionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy "
        description=""
      />

     <PrivacyPolicy/>
    </>
  );
};

export default TermsConditionsPage;
