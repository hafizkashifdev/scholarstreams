"use client";
import { useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blog Page | Discover Your Journey of Lifelong Learning",
//   description: "This is Blog Page for Startup Nextjs Template",
//   // other metadata
// };

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate the index range for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {/* Prev Button */}
                {currentPage > 1 && (
                  <li className="mx-1">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Prev
                    </button>
                  </li>
                )}

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className="mx-1">
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md ${
                        currentPage === index + 1
                          ? "bg-primary text-white"
                          : "bg-body-color bg-opacity-[15%] text-body-color"
                      } px-4 text-sm transition hover:bg-opacity-100`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                {/* Next Button */}
                {currentPage < totalPages && (
                  <li className="mx-1">
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Next
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
