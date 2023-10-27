'use client';

import { useLikeDislikeAnswer } from "@/api-hooks/useLikeDislikeAnswer";
import { DislikeIcon, LikeIcon } from "@/icons";
import { Answer } from "@/objects/answer";
import { Button } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = {
  answer: Answer;
}


const LikeDislikeButtons: React.FC<Props> = ({ answer }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);

  const { likeDislikeAnswer } = useLikeDislikeAnswer({
    onSuccess: () => { }, onError: () => { },
    questionId: answer.questionId
  });

  const onLikeToggle = () => {
    if (isLiked) {
      likeDislikeAnswer({
        data: {
          likes: [...(answer?.likes?.filter((item) => item !== '1') || [])],
          dislikes: [...(answer?.dislikes || [])]
        },
        answerId: answer.id
      })
      setIsLiked(false);
    } else {
      likeDislikeAnswer({
        data: {
          likes: [...(answer?.likes || []), '1'],
          dislikes: [...(answer?.dislikes?.filter((item) => item !== '1') || [])]
        },
        answerId: answer.id
      })
      setIsLiked(true);
      setIsDisliked(false);
    }
  }

  const onDislikeToggle = () => {
    if (isDisliked) {
      likeDislikeAnswer({
        data: {
          likes: [...(answer?.likes || [])],
          dislikes: [...(answer?.dislikes?.filter((item) => item !== '1') || [])]
        },
        answerId: answer.id
      })
      setIsDisliked(false);
    } else {
      likeDislikeAnswer({
        data: {
          likes: [...(answer?.likes?.filter((item) => item !== '1') || [])],
          dislikes: [...(answer?.dislikes || []), '1']
        },
        answerId: answer.id
      })
      setIsLiked(false);
      setIsDisliked(true);
    }
  }


  useEffect(() => {
    setIsLiked(answer?.likes?.includes('1') || false);
    setIsDisliked(answer?.dislikes?.includes('1') || false);
  }, [answer])

  return (
    <div className="flex gap-2 ">
      <Button variant="outlined" className={clsx("rounded-md border-[#E4E9EC] h-9 text-karnameh font-yekan text-xs", {
        '!border-karnameh': isLiked,
      })}
        type="button" color="success"
        startIcon={<LikeIcon className="ml-2" />}
        onClick={onLikeToggle}>
        پاسخ خوب بود
      </Button>
      <Button variant="outlined" className={clsx("rounded-md border-[#E4E9EC] text-red h-9 font-yekan text-xs", {
        '!border-red-700': isDisliked,
      })}
        type="button" color="error"
        startIcon={<DislikeIcon className="ml-2" color="red" />}
        onClick={onDislikeToggle}
      >
        پاسخ خوب نبود
      </Button>
    </div>
  );
}

export default LikeDislikeButtons;