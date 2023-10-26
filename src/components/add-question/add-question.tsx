'use client';

import AddIcon from "@/icons/add-icon";
import { Button, Modal } from "@mui/material";
import AddQuestionModal from "./add-question-modal/add-question-modal";
import { useState } from "react";

const AddQuestion: React.FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = (event: {}, message: string) => {
    if (message !== 'backdropModal') {
      setIsModalOpen(false);
    }
  }

  return (
    <>
      <Button
        type="button"
        onClick={handleOpenModal}
        className="font-yekan bg-karnameh text-white py-2 gap-2 px-[21px] rounded-md text-xs hover:bg-main ml-10"
        startIcon={<AddIcon />}
      >
        سوال جدید
      </Button>
      <AddQuestionModal open={isModalOpen} handleClose={handleCloseModal} />
    </>

  )
}

export default AddQuestion;