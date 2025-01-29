import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Join Us</h2>
            <p className="mb-4 text-lg font-medium text-body-color">
              Become Part of a Global Learning Movement
            </p>
            <p className="mb-4 text-body-color">
              At ScholarStreams, we believe in the power of community. By joining our platform, you become part of a global movement dedicated to lifelong learning and growth. Whether you’re a student just beginning your academic journey, a professional looking to expand your knowledge, or an entrepreneur seeking innovative ideas, ScholarStreams offers the resources, support, and community to help you succeed.
            </p>
            <ul className="mb-4 text-body-color list-disc list-inside">
              <li><span className="font-bold">Connect with Like-minded Learners:</span> Engage with a diverse community of learners, educators, and professionals who share your passion for knowledge.</li>
              <li><span className="font-bold">Collaborate on Exciting Projects:</span> Work with others to explore new ideas, solve problems, and drive meaningful change in your areas of interest.</li>
              <li><span className="font-bold">Share Your Expertise:</span> If you have knowledge to share, ScholarStreams is the perfect platform for you to contribute. Become a guest writer, speaker, or mentor to inspire others.</li>
              <li><span className="font-bold">Stay Informed and Inspired:</span> Access fresh insights, expert advice, and the latest trends in various industries to stay ahead of the curve and continuously evolve.</li>
            </ul>
            <p className="text-body-color">
              Together, we can make education more inclusive, dynamic, and impactful for everyone. Join us at ScholarStreams and continue your journey of learning, growth, and collaboration!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;