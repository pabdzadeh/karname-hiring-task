'use client';

import clsx from "clsx";
import Image from "next/image";
import { useQuery } from "react-query";

type Props = {
  userId: string;
  type?: 'mini' | 'normal'
}

const UserProfile: React.FC<Props> = ({ userId, type = 'normal' }: Props) => {
  const { isLoading, error, data } = useQuery('profileData', () =>
    fetch(`https://json-server-karname.vercel.app/profiles/${userId}/`).then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return <div></div>
  }

  return (
    <div className="flex flex-row items-center gap-3 font-bold ">
      <Image alt={data?.name} src={data?.image}
        width={type === 'mini' ? 32 : 44}
        height={type === 'mini' ? 32 : 44}
        className={clsx("rounded-full", {
          '!rounded-md': type === 'mini'
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