import { baseUrl } from "@/objects/apiEndpoints";
import { Question } from "@/objects/question";
import { useMutation, useQueryClient } from "react-query";

const postQuestion = async (data: Question): Promise<any> => {
  const response = await fetch(`${baseUrl}questions/`, {
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
}


export const useAddQuestion = ({ onSuccess, onError }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: addQuestion, isLoading, error } = useMutation(postQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: 'questions' });
      onSuccess?.();
    },
    onError: (error) => {
      onError?.();
    },
  });

  return {
    addQuestion,
  };
};