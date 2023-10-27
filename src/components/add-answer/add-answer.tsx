'use client';

import { useAddAnswer } from "@/api-hooks/useAddAnswer";
import { Button, Snackbar } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  questionId: string;
}

type Inputs = {
  body: string
}

const AddAnswer: React.FC<Props> = ({ questionId }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();


  const [success, setSuccess] = useState<boolean>(false);

  const onAddSuccess = () => {
    setSuccess(true);
    reset({ body: '' });
  }

  const onNotificationClose = () => {
    setSuccess(false);
  }

  const { addAnswer } = useAddAnswer({ onSuccess: onAddSuccess, onError: () => { }, questionId });

  const onSubmit: SubmitHandler<Inputs> = (data) => addAnswer({
    body: data?.body,
    author: '1',
    id: Math.random().toString(16).slice(2),
    date: new Intl.DateTimeFormat('fa-IR').format(new Date()),
    time: new Intl.DateTimeFormat('fa-IR', { timeStyle: 'short' }).format(new Date()),
    questionId,
    likes: [],
    dislikes: []
  });



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="px-14 w-full mt-4 mb-10 flex flex-col">
        <span className="text-xs mb-2">پاسخ خود را بنویسید</span>
        <div>
          <textarea {...register("body", { required: 'متن پاسخ نمی تواند خالی باشد' })}
            className="w-full h-[164px] border-[#EEEEEE] border rounded-md px-4 text-sm py-3 resize-none" />
          <span className="text-xs text-red-600 mt-2">
            {errors?.body?.message}
          </span>
        </div>
        <Button
          type="submit"
          className="font-yekan bg-karnameh text-white py-2 px-[20px] mt-6 rounded-md text-xs hover:bg-main h-9 font-bold w-[200px]"
        >
          ارسال پاسخ
        </Button>
      </form>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={onNotificationClose}
        message="پاسخ اضافه شد."
      />
    </>

  );
}

export default AddAnswer;