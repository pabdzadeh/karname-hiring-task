'use client';

import { Answer } from "@/objects/answer";
import { baseUrl } from "@/objects/apiEndpoints";
import { useQuery } from "react-query";

type Props = {
  questionId: string;
}

const TotalAnswersNumber: React.FC<Props> = ({ questionId }) => {
  const { data } = useQuery<Answer[]>(`answers-${questionId}`, () =>
    fetch(`${baseUrl}answers?questionId=${questionId}`).then(res =>
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