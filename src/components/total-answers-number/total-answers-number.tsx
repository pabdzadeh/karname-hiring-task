'use client';

import { Answer } from "@/objects/answer";
import { useQuery } from "react-query";

type Props = {
  questionId: string;
}

const TotalAnswersNumber: React.FC<Props> = ({ questionId }) => {
  const { isLoading, error, data } = useQuery<Answer[]>(`answers-${questionId}`, () =>
    fetch(`https://json-server-karname.vercel.app/answers?questionId=${questionId}`).then(res =>
      res.json()
    )
  );

  return (
    <div>
      {data?.length}
    </div>
  )
}

export default TotalAnswersNumber;