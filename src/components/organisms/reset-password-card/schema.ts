import { InferType, object, ref, string } from "yup";

export const resetPasswordSchema = object({
  oldPassword: string().min(8).required(),
  newPassword: string().min(8).required(),
  confirmNewPassword: string()
    .required()
    .oneOf([ref("newPassword")], "Passwords must match"),
});

export type ResetPasswordType = InferType<typeof resetPasswordSchema>;
