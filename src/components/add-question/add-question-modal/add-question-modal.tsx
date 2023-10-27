import { useAddQuestion } from "@/api-hooks/useAddQuestion";
import { CloseIcon } from "@/icons";
import { Box, Button, Input, Modal, Snackbar, TextField } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MutationKey, useMutation, useQueryClient } from "react-query";

type Props = {
  open: boolean;
  handleClose: ((event: {}, reason: string) => void);
}

type Inputs = {
  body: string
  title: string
}


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: '#F7F8F9',
  boxShadow: 24,
  borderRadius: '6px',
  minHeight: 440
};



const AddQuestionModal: React.FC<Props> = ({ open, handleClose }: Props) => {
  const onClose: MouseEventHandler<HTMLButtonElement> = (event) => {
    handleClose?.(event, 'backdropClick');
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [success, setSuccess] = useState<boolean>(false);

  const onAddSuccess = () => {
    handleClose?.({}, 'backdropClick');
    setSuccess(true);
  }

  const onNotificationClose = () => {
    setSuccess(false);
  }

  const onAddError = () => {
    console.log('error');
  }

  const { addQuestion } = useAddQuestion({ onSuccess: onAddSuccess, onError: onAddError });

  const onSubmit: SubmitHandler<Inputs> = (data) => addQuestion({
    title: data?.title,
    body: data?.body,
    author: '1',
    id: Math.random().toString(16).slice(2),
    totalAnswers: 0,
    date: new Intl.DateTimeFormat('fa-IR').format(new Date()),
    time: new Intl.DateTimeFormat('fa-IR', { timeStyle: 'short' }).format(new Date()),
  });



  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row h-12 justify-between bg-white w-full text-base font-extrabold items-center shadow rounded-md px-6">
              <span>
                ایجاد سوال جدید
              </span>
              <span onClick={onClose} className="cursor-pointer">
                <CloseIcon />
              </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="h-auto w-full flex flex-col gap-[10px] px-5 ">
                <div className="text-xs text-right">
                  موضوع
                </div>
                <div className="flex flex-col">
                  <input {...register("title", { required: 'موضوع نمی تواند خالی باشد' })} className="w-full h-11 border-[#EEEEEE] border rounded-md px-4 text-sm" />
                  <span className="text-xs text-red-600">
                    {errors?.title?.message}
                  </span>
                </div>
              </div>
              <div className="h-auto w-full flex flex-col gap-[10px] px-5 mt-4 ">
                <div className="text-xs text-right">
                  متن سوال
                </div>
                <div className="flex flex-col">
                  <textarea {...register("body", { required: 'متن سوال نمی تواند خالی باشد' })}
                    className="w-full h-[164px] border-[#EEEEEE] border rounded-md px-4 text-sm py-3 resize-none" />
                  <span className="text-xs text-red-600">
                    {errors?.body?.message}
                  </span>
                </div>
              </div>
              <div className="h-auto w-full flex  px-5 mt-6 justify-end gap-4 mb-5">
                <Button
                  type="button"
                  variant="text"
                  onClick={onClose}
                  className="font-yekan  text-karnameh py-2 px-[21px] rounded-md text-xs h-9 font-bold w-[100px]"
                >
                  انصراف
                </Button>
                <Button
                  type="submit"
                  className="font-yekan bg-karnameh text-white py-2 px-[20px] rounded-md text-xs hover:bg-main h-9 font-bold w-[100px]"
                >
                  ایجاد سوال
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={onNotificationClose}
        message="سوال جدید اضافه شد."
      />
    </>
  );
}

export default AddQuestionModal;