'use client';

import { Question } from "@/objects/question";
import { Button } from "@mui/material";
import { Base64 } from "js-base64";
import { useRouter, useSearchParams } from "next/navigation";



type Props = {
  questionId: string;
  question: Question;
}
const QuestionDetailsButton: React.FC<Props> = ({ questionId, question }) => {
  const router = useRouter();


  const onDetailsClick = () => {
    router.push(`/questions/${questionId}?question=${Base64.encode(JSON.stringify(question))}`)
  }

  return (
    <Button
      className="font-yekan rounded-md border-karnameh text-karnameh hover:text-main hover:border-main"
      type="button"
      variant="outlined"
      color="success"
      onClick={onDetailsClick}
    >
      جزییات
    </Button>
  );
}

export default QuestionDetailsButton;