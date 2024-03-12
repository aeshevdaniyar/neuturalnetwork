import { Button } from "@components/atoms/Button";
import { SearchIcon } from "@components/atoms/Icon";
import { Text } from "@components/atoms/Text";

export const SearchBar = () => {
  return (
    <Button
      leftIcon={<SearchIcon />}
      className="w-full justify-start gap-5 px-5 py-3 bg-gradient-to-r from-[#466F6D]  to-[#323735] to-50%"
    >
      <Text>Поиск</Text>
    </Button>
  );
};
