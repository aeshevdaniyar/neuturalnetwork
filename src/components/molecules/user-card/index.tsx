import { Avatar, AvatarFallback, AvatarImage } from "@components/atoms/Avatar";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { LogoutIcon } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";

export const UserCard = () => {
  return (
    <div className="bg-[#232627] rounded-xl py-5 px-5">
      <Stack>
        <HStack className="items-center py-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>MQ</AvatarFallback>
          </Avatar>
          <Stack className="gap-1">
            <Text size={"sm"}>Muhammad Qodir</Text>
            <Text size={"xs"}>mukhammadqodir4047@gmail.com</Text>
          </Stack>
        </HStack>
        <Button variant={"outline"}>Купить премиум</Button>
        <Button variant={"ghost"} leftIcon={<LogoutIcon />}>
          Выйти
        </Button>
      </Stack>
    </div>
  );
};
