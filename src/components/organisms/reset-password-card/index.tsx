import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/atoms/Form";
import { Heading } from "@components/atoms/Heading";
import { Stack } from "@components/atoms/Stack";

import { Button } from "@components/atoms/Button";
import { PasswordInput } from "@components/molecules/password-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ResetPasswordType, resetPasswordSchema } from "./schema";

export const LoginCard = () => {
  const form = useForm<ResetPasswordType>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordType) => {
    console.log(data);
  };

  return (
    <Stack className="gap-8 pr-12">
      <Heading level="h4" className="text-[#141718]">
        Ваш пароль
      </Heading>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Stack className="gap-6">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Старый пароль</FormLabel>
                  <FormControl>
                    <PasswordInput
                      type="password"
                      placeholder="Пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Новый пароль</FormLabel>
                  <FormControl>
                    <PasswordInput
                      type="password"
                      placeholder="Новый пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Минимум 8 символов</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Подтвердите новый пароль</FormLabel>
                  <FormControl>
                    <PasswordInput
                      type="password"
                      placeholder="Подтвердите новый пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Минимум 8 символов</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Изменить пароль</Button>
          </Stack>
        </form>
      </Form>
    </Stack>
  );
};
