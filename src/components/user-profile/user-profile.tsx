'use client';

import { baseUrl } from "@/objects/apiEndpoints";
import clsx from "clsx";
import Image from "next/image";
import { useQuery } from "react-query";

type Props = {
  userId: string;
  type?: 'mini' | 'normal' | 'answer';
}

const UserProfile: React.FC<Props> = ({ userId, type = 'normal' }: Props) => {
  const { isLoading, data } = useQuery(`profileData-${userId}`, () =>
    fetch(`${baseUrl}profiles/${userId}/`).then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return <div></div>
  }

  return (
    <div className="flex flex-row items-center gap-3 font-bold">
      <Image alt={data?.name} src={data?.image}
        objectFit="contain"
        width={type !== 'normal' ? 32 : 44}
        height={type !== 'normal' ? 32 : 44}
        className={clsx("rounded-full", {
          '!rounded-md': type !== 'normal'
        })}>

      </Image>
      {type !== 'mini' &&
        <div className="">
          {data?.name}
        </div>
      }
    </div >
  );
}

export default UserProfile;