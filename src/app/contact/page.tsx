import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Discover Your Journey of Lifelong Learning",
  description: "This is Contact Page for scholar streams",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We are here to assist you with any inquiries or support you may need. Please fill out the form below, and our team will get back to you as soon as possible."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
