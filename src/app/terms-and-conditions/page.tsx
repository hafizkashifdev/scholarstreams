import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import TermsAndConditions from "@/components/TermConditions";

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
        pageName="Term & Conditions "
        description=""
      />

     <TermsAndConditions/>
    </>
  );
};

export default TermsConditionsPage;
