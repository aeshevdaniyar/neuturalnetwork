import { Button } from "@components/atoms/Button";
import { ChatTextIcon } from "@components/atoms/Icon";
import { Text } from "@components/atoms/Text";

export const CreateNewFolder = () => {
  return (
    <Button
      leftIcon={<ChatTextIcon />}
      className="w-full justify-start gap-5 px-5 py-3 bg-gradient-to-r from-[#464F6F] to-[#323337]"
    >
      <Text>Создать новую папку</Text>
    </Button>
  );
};
