const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg  p-8 max-w-sm w-full mx-4">
        <div className="flex flex-col items-center">
          {/* Loading spinner
          <div className="relative">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-indigo-600 rounded-full opacity-20"></div>
          </div> */}

          {/* Pulse dot animation */}
          <div className="flex space-x-2 mt-6">
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-pink-600 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-300"></div>
          </div>

          {/* Loading text */}
          <div className="mt-4 text-center">
            <h2 className="font-arvo font-bold text-xl text-gray-800 mb-2">
              Loading
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;