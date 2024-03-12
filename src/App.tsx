import { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const IndexPage = lazy(() => import("./pages/IndexPage"));

const Loading = () => (
  <div className="bg-grey-5 text-grey-90 flex h-screen w-full items-center justify-center">
    Loading
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/*" element={<IndexPage />} />
    </>
  )
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
