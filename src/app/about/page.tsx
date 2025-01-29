import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Empowering Lifelong Learning",
  description: "At ScholarStreams, we believe that learning is a lifelong journey. Our mission is to provide a platform where curiosity is nurtured, knowledge is shared, and collaboration thrives. Whether you are a student, professional, or lifelong learner, ScholarStreams is your go-to resource for discovering new ideas, expanding your horizons, and connecting with like-minded individuals.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At ScholarStreams, we believe that learning is a lifelong journey. Our mission is to provide a platform where curiosity is nurtured, knowledge is shared, and collaboration thrives. Whether you are a student, professional, or lifelong learner, ScholarStreams is your go-to resource for discovering new ideas, expanding your horizons, and connecting with like-minded individuals."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
