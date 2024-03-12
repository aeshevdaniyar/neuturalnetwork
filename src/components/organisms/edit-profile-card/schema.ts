import { InferType, object, string } from "yup";

export const editProfileSchema = object({
  email: string().email().required(),
});

export type EditProfileType = InferType<typeof editProfileSchema>;
