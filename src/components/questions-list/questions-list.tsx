'use client';

import { Question } from "@/objects/question";
import { useQuery } from "react-query";
import QuestionOverview from "../question-overview/question-overview";
import { CircularProgress } from "@mui/material";

const QuestionsList: React.FC<{}> = () => {
  const { isLoading, error, data } = useQuery<Question[]>('questions', () =>
    fetch(`https://json-server-karname.vercel.app/questions/`).then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return <CircularProgress className="mt-5" color="success" />
  }

  return (
    <div className="w-full px-14 py-6 flex-col flex gap-5">
      {data?.map((item, index) => (
        <QuestionOverview key={item.id} question={item} />
      ))}
    </div>
  )
}

export default QuestionsList;