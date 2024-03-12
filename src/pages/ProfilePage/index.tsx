import { ProfileSidebar } from "@components/organisms/profile-sidebar";
import {
  ProfilePageContent,
  ProfilePageContentContainer,
  ProfilePageHeader,
  ProfilePageSubtitle,
  ProfilePageTitle,
  ProfilePage as ProfileSettingPage,
} from "@components/templates/profile-page";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const SettingPage = lazy(() => import("../SettingPage"));
const ProfilePage = () => {
  return (
    <ProfileSettingPage>
      <ProfilePageHeader>
        <ProfilePageTitle>Настройки</ProfilePageTitle>
        <ProfilePageSubtitle>
          Тарифные планы на любой бюджет
        </ProfilePageSubtitle>
      </ProfilePageHeader>
      <ProfilePageContent>
        <ProfileSidebar />

        <ProfilePageContentContainer>
          <Routes>
            <Route index element={<SettingPage />} />
          </Routes>
        </ProfilePageContentContainer>
      </ProfilePageContent>
    </ProfileSettingPage>
  );
};

export default ProfilePage;
