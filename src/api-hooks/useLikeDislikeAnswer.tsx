import { useMutation, useQueryClient } from "react-query";

const patchLikeDislike = async ({ data, answerId }: { data: { likes: string[], dislikes: string[] }, answerId: string })
  : Promise<any> => {
  const response = await fetch(`https://json-server-karname.vercel.app/answers/${answerId}`, {
    method: 'PATCH',
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


export const useLikeDislikeAnswer = ({ onSuccess, onError, questionId }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: likeDislikeAnswer, isLoading, error } = useMutation(patchLikeDislike, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: `answers-${questionId}` });
      onSuccess?.();
    },
    onError: (error) => {
      onError?.();
    },
  });

  return {
    likeDislikeAnswer,
  };
}; 