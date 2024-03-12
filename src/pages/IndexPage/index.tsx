import { Page } from "@components/molecules/page";
import { Layout } from "@components/templates/layout";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("../MainPage"));
const ProfilePage = lazy(() => import("../ProfilePage"));
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
        <Route
          path="profile/*"
          element={
            <Page>
              <ProfilePage />
            </Page>
          }
        />
      </Routes>
    </Layout>
  );
};

export default IndexPage;
