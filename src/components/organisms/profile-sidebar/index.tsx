import { SettingActiveIcon, SettingIcon } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { ProfileSidebarLinkItem } from "@components/molecules/profile-sidebar-link-item";

export const ProfileSidebar = () => {
  return (
    <Stack className="gap-0 min-w-[262px]">
      <ProfileSidebarLinkItem
        activeIcon={<SettingActiveIcon />}
        icon={<SettingIcon />}
        pageLink="/profile"
        text="Настройки"
      />
    </Stack>
  );
};
