import { cn } from "@/lib/cn";
import { HStack } from "@components/atoms/HStack";
import { Heading } from "@components/atoms/Heading";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { FC, HTMLAttributes } from "react";

interface ProfilePageProps extends HTMLAttributes<HTMLDivElement> {}

export const ProfilePage: FC<ProfilePageProps> = ({ className, ...props }) => {
  return <div className={cn("flex flex-col gap-12", className)} {...props} />;
};

interface ProfilePageHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
  ...props
}) => {
  return (
    <Stack
      className={cn("justify-center gap-4 text-center", className)}
      {...props}
    />
  );
};

interface ProfilePageHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}
export const ProfilePageTitle: FC<ProfilePageHeaderProps> = ({
  className,
  ...props
}) => {
  return (
    <Heading
      className={cn("text-[#141718]", className)}
      level={"h2"}
      {...props}
    />
  );
};

interface ProfilePageSubtitleProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export const ProfilePageSubtitle: FC<ProfilePageSubtitleProps> = ({
  className,
  ...props
}) => {
  return (
    <Text
      className={cn("inter-2xl-regular text-[#6C7275]", className)}
      {...props}
    />
  );
};

interface ProfilePageContentProps extends HTMLAttributes<HTMLDivElement> {}
export const ProfilePageContent: FC<ProfilePageContentProps> = ({
  className,
  ...props
}) => {
  return <HStack className={cn("w-full gap-24", className)} {...props} />;
};

interface ProfilePageContentContainerProps
  extends HTMLAttributes<HTMLDivElement> {}
export const ProfilePageContentContainer: FC<
  ProfilePageContentContainerProps
> = ({ className, ...props }) => {
  return (
    <div className={cn(className, "w-full bg-white rounded-3xl p-8")} {...props} />
  );
};
