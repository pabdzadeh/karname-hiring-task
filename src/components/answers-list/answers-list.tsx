'use client';

import { Answer } from "@/objects/answer";
import { Question } from "@/objects/question";
import { useQuery } from "react-query";
import AnswerCard from "../answer-card/answer-card";
import { CircularProgress } from "@mui/material";
import { baseUrl } from "@/objects/apiEndpoints";

type Props = {
  questionId: string;
}

const AnswersList: React.FC<Props> = ({ questionId }) => {
  const { isLoading, error, data } = useQuery<Answer[]>(`answers-${questionId}`, () =>
    fetch(`${baseUrl}answers?questionId=${questionId}`).then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return <CircularProgress color="success" className="px-14" />
  }

  return (
    (data && data?.length > 0) &&
    <div className="flex flex-col w-full">
      <div className="px-14 mt-6 text-2xl font-extrabold">
        پاسخ ها
      </div>
      <div className="w-full px-14 gap-5 flex flex-col mt-6 h-auto ">
        {data?.map((answer) => (
          <AnswerCard answer={answer} key={answer.id} />
        ))}
      </div>
    </div>
  );
}

export default AnswersList;