import { Answer } from "@/objects/answer";
import { useMutation, useQueryClient } from "react-query";

const postAnswer = async (data: Answer): Promise<any> => {
  const response = await fetch('https://json-server-karname.vercel.app/answers/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

type Props = {
  onSuccess?: () => void;
  onError?: () => void;
  questionId: string;
}


export const useAddAnswer = ({ onSuccess, onError, questionId }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: addAnswer, isLoading, error } = useMutation(postAnswer, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: `answers-${questionId}` });
      onSuccess?.();
    },
    onError: (error) => {
      onError?.();
    },
  });

  return {
    addAnswer,
  };
};