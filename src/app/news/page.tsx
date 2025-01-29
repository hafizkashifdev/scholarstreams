"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY;
  const postsPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=us,au&categories=business,sports&languages=en&sort=published_desc&limit=${postsPerPage}&offset=${(currentPage - 1) * postsPerPage}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! status: ${response.status} - ${errorData?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        console.log("Fetched news data:", data); // Log the fetched data to the console
        setNews(data.data);
        setTotalPages(Math.ceil(data.pagination.total / postsPerPage));
      } catch (error) {
        console.error("Error fetching news:", error);
        // Handle error, e.g., display an error message to the user
        setNews([{ title: "Error fetching news. Please check your internet connection and API key." }]);
      } finally {
        setLoading(false);
      }
    };

    if (apiKey) { // Only fetch if API key is available
      fetchNews();
    } else {
      console.error("News API key is missing. Please set NEXT_PUBLIC_MEDIASTACK_API_KEY environment variable.");
      setNews([{ title: "News API key is missing. Please contact the administrator." }]);
    }

  }, [apiKey, currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 3;

    if (currentPage > 1) {
      pages.push(
        <li key="prev" className="mx-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
          >
            Prev
          </button>
        </li>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(
          <li key={i} className="mx-1">
            <button
              onClick={() => handlePageChange(i)}
              className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${currentPage === i ? 'bg-primary text-white' : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'}`}
            >
              {i}
            </button>
          </li>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(
          <li key={`ellipsis-${i}`} className="mx-1">
            <span className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
              ...
            </span>
          </li>
        );
      }
    }

    if (currentPage < totalPages) {
      pages.push(
        <li key="next" className="mx-1">
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
          >
            Next
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <>
      <Breadcrumb
        pageName="Latest News"
        description=""
      />
      <div className="container mx-auto p-4">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {article.image && (
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p className="text-gray-700 mb-4">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>By {article.author || "Unknown"}</p>
                    <p>{new Date(article.published_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              {renderPagination()}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;