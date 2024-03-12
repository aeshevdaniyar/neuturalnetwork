import { Button } from "@components/atoms/Button";
import { PlusCircle } from "@components/atoms/Icon";

export const NewChat = () => {
  return (
    <Button
      className="px-3 justify-start"
      variant={"ghost"}
      leftIcon={<PlusCircle />}
    >
      Новый чат
    </Button>
  );
};
