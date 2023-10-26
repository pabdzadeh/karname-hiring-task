import { AddIcon } from "@/icons";
import { Button } from "@mui/material";
import { UserProfile } from "..";
import AddQuestion from "../add-question/add-question";

interface Props {
  title: string;
}

const TopBar: React.FC<Props> = ({ title }: Props) => {

  return (
    <div className="flex flex-row w-full h-[68px] bg-white shadow py-4 px-[56px]" >
      <div className="font-[800] text-2xl  ml-auto">
        {title}
      </div>

      <AddQuestion />

      <UserProfile userId="1" />
    </div>
  );
}

export default TopBar;