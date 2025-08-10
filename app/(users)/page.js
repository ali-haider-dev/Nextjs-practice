import React from "react";

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default async function Home() {
  try {
    const posts = await getData();

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-arvo font-bold text-4xl text-gray-900 mb-4">
              Welcome to Our Blog
            </h1>
            <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest posts and stay updated with the newest content
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Post Content */}
                <div className="p-6">
                  <h2 className="font-arvo font-bold text-xl text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-poppins text-gray-600 mb-4 line-clamp-2">
                    {post.body}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button 
                      className="inline-flex items-center font-poppins font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Read more
                      <svg 
                        className="ml-2 w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-arvo font-bold text-2xl text-red-600 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="font-poppins text-gray-600 mb-8">
            We couldn't load the posts. Please try again later.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
}
