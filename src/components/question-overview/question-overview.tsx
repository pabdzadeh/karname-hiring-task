import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Question } from "@/objects/question";
import ReplyIcon from "@/icons/reply-icon";
import { QuestionDetailsButton, TotalAnswersNumber, UserProfile } from "..";
import clsx from "clsx";


type Props = {
  question?: Question;
  type?: 'normal' | 'large';
}

const QuestionOverview: React.FC<Props> = ({ question, type }: Props) => {
  return (
    <div className="w-full">
      <MuiAccordion disableGutters elevation={0} square className="rounded-lg card-shadow" defaultExpanded={true}>
        <MuiAccordionSummary className="flex rounded-lg card-shadow bg-white items-center h-12">
          <div className="">
            {question && <UserProfile userId={question.author} type="mini" />}
          </div>
          <div className="font-bold ml-auto flex items-center mr-4">
            {question?.title}
          </div>
          <div className="text-xs pl-3 flex gap-1 items-center">
            <span className="text-[#777]">
              ساعت:
            </span>
            <span className="font-bold">
              {question?.time}
            </span>
          </div>
          <div className=" h-6 w-[1px] bg-[black] bg-opacity-10" />
          <div className="text-xs pr-3 flex gap-1 items-center ml-7">
            <span className="text-[#777]">
              تاریخ:
            </span>
            <span className="font-bold">{question?.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <ReplyIcon className="mb-1" />
            <span className="text-xs text-[#777] flex items-center">
              {question && <TotalAnswersNumber questionId={question?.id} />}
            </span>
          </div>
        </MuiAccordionSummary>
        <MuiAccordionDetails className={clsx("bg-[#F9F9F9] rounded-b-lg h-[107px]", {
          '!h-[215px]': type === 'large'
        })} >
          {question?.body}
          <div className="mt-4 flex justify-end">
            {type !== 'large' && question && <QuestionDetailsButton questionId={question.id} question={question} />}
          </div>
        </MuiAccordionDetails>
      </MuiAccordion>

    </div>
  )
}

export default QuestionOverview;

