import { Question } from "@/objects/question";
import { useMutation, useQueryClient } from "react-query";

const postQuestion = async (data: Question): Promise<any> => {
  const response = await fetch('https://json-server-karname.vercel.app/questions/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  // if (!response.ok) {
  //   throw new Error('Failed to insert new todo', response);
  // }
  return await response.json();
};

type Props = {
  onSuccess?: () => void;
  onError?: () => void;
}


export const useAddQuestion = ({ onSuccess, onError }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: addQuestion, isLoading, error } = useMutation(postQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questions'] });
      onSuccess?.();
    },
    onError: (error) => {
      // Error actions
      onError?.();
    },
  });

  return {
    addQuestion,
  };
};