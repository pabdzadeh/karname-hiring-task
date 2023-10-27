'use client';

import { ArrowIcon } from "@/icons";
import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

const TopMenu: React.FC<{}> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  }

  const onHomeClick = () => {
    router.push('/');
    setOpen(false);
  }

  const onClose = () => {
    setOpen(false);
  }


  return (
    <div>
      <Button className="mr-1 !w-0 px-0 flex items-center" onClick={onClick} type="button" variant="text"
      >
        <ArrowIcon />
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
        <MenuItem onClick={onHomeClick}>خانه</MenuItem>
      </Menu>
    </div>
  );
}

export default TopMenu;
