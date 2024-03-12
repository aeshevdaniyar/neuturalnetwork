import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/atoms/Form";
import { Heading } from "@components/atoms/Heading";
import { Label } from "@components/atoms/Label";
import { Stack } from "@components/atoms/Stack";
import { EmailInput } from "@components/molecules/email-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EditProfileType, editProfileSchema } from "./schema";
import { HStack } from "@components/atoms/HStack";
import GoolgeIcon from "@assets/goolge.svg";
import TelegramIcon from "@assets/telegram.svg";
import VKIcon from "@assets/vk.svg";
import { Badge } from "@components/atoms/Badge";
import { Text } from "@components/atoms/Text";

export const EditProfileCard = () => {
  const form = useForm<EditProfileType>({
    resolver: yupResolver(editProfileSchema),
  });

  const onSubmit = (data: EditProfileType) => {
    console.log(data);
  };

  return (
    <Stack className="gap-8 pl-12">
      <Heading level="h4" className="text-[#141718]">
        Ваш пароль
      </Heading>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Stack className="gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваша эл. почта:</FormLabel>
                  <FormControl>
                    <EmailInput
                      type="email"
                      placeholder="Ваша эл. почта:"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Box className="space-y-2">
              <Label>Подключённые соц сети:</Label>
              <HStack className="gap-5">
                <img src={VKIcon} />
                <img src={TelegramIcon} />
                <img src={GoolgeIcon} />
              </HStack>
            </Box>
            <Box>
              <Box className="space-y-2">
                <Label>Уровень подписки:</Label>
                <Box>
                  <Badge>B91C1C</Badge>
                </Box>
              </Box>
              <Text className="text-[#232627]">
                - 5 запросов ChatGPT в сутки
              </Text>
              <Text className="text-[#232627]">
                - 2 запроса к midjourney в сутки
              </Text>
            </Box>

            <Button type="submit">Улучшить тариф</Button>
          </Stack>
        </form>
      </Form>
    </Stack>
  );
};
