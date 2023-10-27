import { Button, styled } from "@mui/material";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Question } from "@/objects/question";
import ReplyIcon from "@/icons/reply-icon";
import { UserProfile } from "..";


type Props = {
  question?: Question;
}

const QuestionOverview: React.FC<Props> = ({ question }: Props) => {

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
          <div className="text-xs pr-3 flex gap-1 items-center ml-7">
            <span className="text-[#777]">
              تاریخ:
            </span>
            <span className="font-bold">{question?.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <ReplyIcon className="mb-1" />
            <span className="text-xs text-[#777] flex items-center">
              {question?.totalAnswers}
            </span>
          </div>
        </MuiAccordionSummary>
        <MuiAccordionDetails className="bg-[#F9F9F9] rounded-b-lg h-[107px]" >
          {question?.body}
          <div className="mt-4 flex justify-end">
            <Button
              className="font-yekan rounded-md border-karnameh text-karnameh hover:text-main hover:border-main"
              type="button"
              variant="outlined"
              color="success"
            >
              جزییات
            </Button>
          </div>
        </MuiAccordionDetails>
      </MuiAccordion>

    </div>
  )
}

export default QuestionOverview;

