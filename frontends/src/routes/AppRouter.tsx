import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "../pages/MainHome";
import { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "../components/Loader";

const ViewAllProject = lazy(() => import(("../pages/ViewAllProject")))

// resetErrorBoundry 
function ErrorFallback({ error , resetErrorBoundary } : { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="pt-16">
      <div className="max-w-md mx-auto  p-6 border-2 border-red-500 rounded-lg bg-red-100 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-xl font-bold text-red-700 mb-4">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

const AppRouter = () => {
  const [retryKey, setRetryKey] = useState(0);
  console.log("retryKey:", retryKey)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      errorElement: <p>Error</p>,
    },
    {
      path: "/projects",
      element: <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setRetryKey((prev) => prev + 1)}
        >
          <Suspense fallback={<Loader />}>
            <ViewAllProject />
          </Suspense>
        </ErrorBoundary>,
      errorElement: <p>Error</p>,
    },

  ]);

  return ((<>
  <RouterProvider router={router} />
  </>));
};

export default AppRouter;
