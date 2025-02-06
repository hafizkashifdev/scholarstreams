import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Building modern websites requires carefully chosen UI components.  This blog post explores some of the top UI component libraries available today, covering their strengths, weaknesses, and ideal use cases. We'll look at options like React components, Angular Material, and Vue.js component libraries, helping you make informed decisions for your next project.  Consider factors like customization, performance, and community support when selecting the right components.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative", "web development", "UI"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Want to level up your design game?  This article outlines nine practical tips to boost your design skills. From mastering typography and color theory to understanding user experience and practicing regularly, we'll cover actionable steps you can take immediately.  Consistency and seeking feedback are also key to growth.  Whether you're a beginner or a seasoned designer, these tips will help you refine your craft.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["design", "graphic design", "UI/UX"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Coding speed is crucial for productivity. This blog post shares effective strategies to enhance your coding efficiency.  We'll discuss techniques like mastering keyboard shortcuts, using code snippets, and leveraging debugging tools.  Understanding data structures and algorithms is also essential for writing optimized code.  Regular practice and focusing on code clarity are also vital for long-term speed improvements.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Software Engineer",
    },
    tags: ["coding", "programming", "software development"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "The Benefits of Extracurricular Activities",
    paragraph:
      "Extracurricular activities are an important part of a well-rounded education. They help students develop crucial skills like leadership, teamwork, and communication.  Participating in sports, clubs, or volunteer organizations allows students to explore their interests and passions outside the classroom. These activities can also boost academic performance, build self-confidence, and enhance social skills.  ScholarStreams encourages all students to engage in extracurriculars for a more enriching educational experience.",
    image: "/images/blog/blog-04.jpg",
    author: {
      name: "ScholarStreams",
      image: "/images/blog/author-04.png",
      designation: "Educational Website",
    },
    tags: ["education", "students", "extracurricular"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "How to Choose a College Major",
    paragraph:
      "Choosing a college major is a significant decision.  This guide provides helpful tips to navigate this process. Start by reflecting on your interests and passions. What subjects do you enjoy learning about?  Research different majors and explore potential career paths.  Talk to professionals in fields that interest you and consider internships or shadowing opportunities to gain real-world experience.  Don't be afraid to explore different options before making a final decision.",
    image: "/images/blog/blog-05.jpg",
    author: {
      name: "ScholarStreams",
      image: "/images/blog/author-05.png",
      designation: "Educational Website",
    },
    tags: ["education", "college", "major"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "The Importance of Financial Aid",
    paragraph:
      "Financial aid plays a crucial role in making college accessible. This article outlines the different types of financial aid available, including scholarships, grants, and loans. Scholarships are merit-based awards that don't need to be repaid. Grants are typically need-based and also don't require repayment. Loans are borrowed funds that must be repaid with interest.  ScholarStreams advises students to explore all financial aid options and apply early, as deadlines can vary.  Making college affordable is a priority, and financial aid can be a significant help.",
    image: "/images/blog/blog-06.jpg",
    author: {
      name: "ScholarStreams",
      image: "/images/blog/author-06.png",
      designation: "Educational Website",
    },
    tags: ["education", "college", "financial aid"],
    publishDate: "2025",
  },
];

export default blogData;