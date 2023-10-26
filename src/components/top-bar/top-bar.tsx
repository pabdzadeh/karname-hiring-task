import { AddIcon } from "@/icons";
import { Button } from "@mui/material";
import { UserProfile } from "..";

interface Props {
  title: string;
}

const TopBar: React.FC<Props> = ({ title }: Props) => {

  return (
    <div className="flex flex-row-reverse w-full h-[68px] bg-white shadow py-4 px-[56px]" >
      <div className="font-[800] text-2xl  ml-auto">
        {title}
      </div>

      <Button
        type="button"
        className="font-yekan bg-karnameh text-white py-2 px-[21px] rounded-md text-xs hover:bg-main ml-10"
        endIcon={<AddIcon />}
      >
        سوال جدید
      </Button>

      <UserProfile userId="" />
    </div>
  );
}

export default TopBar;