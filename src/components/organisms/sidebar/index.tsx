import { cn } from "@/lib/cn";
import { Box } from "@components/atoms/Box";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@components/atoms/Collapsible";
import { HStack } from "@components/atoms/HStack";
import { ChevronDown } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { CreateNewFolder } from "@components/molecules/create-new-folder";
import { Logo } from "@components/molecules/logo";
import { NewChat } from "@components/molecules/new-chat";
import { SearchBar } from "@components/molecules/search-bar";
import { SidebarChatItem } from "@components/molecules/sidebar-chat-item";
import { UserCard } from "@components/molecules/user-card";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside className="w-80 h-full flex flex-col justify-between py-6 bg-[#141718]">
      <Box>
        <Box className="px-4">
          <Logo />

          <Stack className="gap-4">
            <CreateNewFolder />
            <SearchBar />
          </Stack>
        </Box>
        <hr className="my-4 border-[#232627]" />
        <Box className="px-4">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full"
          >
            <CollapsibleTrigger className="w-full">
              <HStack className="pl-3 items-center">
                <ChevronDown
                  className={cn("transition-all", isOpen && " rotate-180")}
                />
                <Text size={"sm"} className="font-medium text-[#6C7275BF]/75">
                  Список чатов
                </Text>
              </HStack>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarChatItem
                pageLink="/123"
                text="Тут какой-то текст"
                count={48}
              />
              <SidebarChatItem
                pageLink="/3123"
                text="Тут какой-то текст"
                count={48}
              />
            </CollapsibleContent>
          </Collapsible>
          <NewChat />
        </Box>
      </Box>

      <Box className="px-4">
        <UserCard />
      </Box>
    </aside>
  );
};
