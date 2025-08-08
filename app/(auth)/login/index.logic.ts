import { login } from "@/app/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import * as yup from "yup";

type Props = {};
type ReturnType = {
  handleSubmit: (values: { userName: string; password: string }) => void;
  isLoading: boolean;
  error: Error | null;
  router : any
};

export const LoginSchema = yup.object().shape({
  userName: yup
    .string()
    .trim()
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password too short")
    .max(24, "Password too long"),
});

function useLogic({}: Props = {}): ReturnType {
    const router = useRouter(); 
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful", data);
      router.push('/(dashboard)/index'); 
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const handleSubmit = (values: { userName: string; password: string }) => {
    mutation.mutate(values);
  };

  return {
    handleSubmit,
    isLoading: mutation.isPending,
    error: mutation.error as Error | null,
    router
  };
}

export default useLogic;
