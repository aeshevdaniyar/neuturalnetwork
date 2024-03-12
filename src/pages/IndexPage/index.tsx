import { Layout } from "@components/templates/layout";
import { FC, PropsWithChildren, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("../MainPage"));

const IndexPage = () => {
  return (
    <Layout>
      <Routes>
        <Route
          index
          element={
            <Page>
              <MainPage />
            </Page>
          }
        />
      </Routes>
    </Layout>
  );
};
const Page: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={"red"}>{children}</Suspense>;
};
export default IndexPage;
