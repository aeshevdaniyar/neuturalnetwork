import { EditProfileCard } from "@components/organisms/edit-profile-card";
import { LoginCard } from "@components/organisms/reset-password-card";
const SettingPage = () => {
  return (
    <div className="w-full grid grid-cols-2 divide-x-2">
      <LoginCard />
      <EditProfileCard />
    </div>
  );
};

export default SettingPage;
