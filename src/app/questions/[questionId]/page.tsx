import { AddAnswer, AnswersList, QuestionOverview, TopBar } from "@/components";
import { Base64 } from "js-base64";

export default function QuestionDetails({ params, searchParams }: { params: { questionId: string }, searchParams: { question: string } }) {
  const questionId = params.questionId;

  const question = JSON.parse(Base64.decode((searchParams.question)));


  return (
    <main className="flex min-h-screen flex-col items-start">
      <TopBar title="جزییات سوال" />
      <div className="mt-8 w-full px-14">
        <QuestionOverview question={question} type="large" />
      </div>

      <AnswersList questionId={questionId} />
      <div className="px-14 mt-6 text-2xl font-extrabold">
        پاسخ خود را ثبت کنید
      </div>
      <AddAnswer questionId={questionId} />
    </main>
  )
}