import { Answer } from "@/objects/answer";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { LikeDislikeButtons, UserProfile } from "..";
import { DislikeIcon, LikeIcon } from "@/icons";


type Props = {
  answer?: Answer;
}

const AnswerCard: React.FC<Props> = ({ answer }) => {
  return (
    <div className="w-full">
      <MuiAccordion disableGutters elevation={0} square className="rounded-lg card-shadow" defaultExpanded={true}>
        <MuiAccordionSummary className="flex rounded-lg card-shadow bg-white items-center h-12">
          <div className="ml-auto">
            {answer && <UserProfile userId={answer.author} type="answer" />}
          </div>
          <div className="text-xs pl-3 flex gap-1 items-center">
            <span className="text-[#777]">
              ساعت:
            </span>
            <span className="font-bold">
              {answer?.time}
            </span>
          </div>
          <div className="mt-1 h-6 w-[1px] bg-[black] bg-opacity-10" />
          <div className="text-xs pr-3 flex gap-1 items-center ml-7">
            <span className="text-[#777]">
              تاریخ:
            </span>
            <span className="font-bold">{answer?.date}</span>
          </div>


          <div className="flex items-center gap-1">
            <LikeIcon />
            <span className="text-xs text-[#777] flex items-center ml-6">
              {answer?.likes?.length}
            </span>
            <DislikeIcon />
            <span className="text-xs text-[#777] flex items-center">
              {answer?.dislikes?.length}
            </span>
          </div>
        </MuiAccordionSummary>
        <MuiAccordionDetails className="bg-[#F9F9F9] rounded-b-lg h-[107px] flex flex-col">
          {answer?.body}
          <div className="mt-auto flex justify-end">
            {answer && <LikeDislikeButtons answer={answer} />}
          </div>
        </MuiAccordionDetails>
      </MuiAccordion>
    </div>
  );
}

export default AnswerCard;