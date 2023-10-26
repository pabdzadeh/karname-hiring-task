'use client';

import Image from "next/image";
import { useQuery } from "react-query";

type Props = {
  userId: string;
  type?: 'mini' | 'normal'
}

const UserProfile: React.FC<Props> = ({ userId }: Props) => {
  const { isLoading, error, data } = useQuery('profileData', () =>
    fetch('https://json-server-karname.vercel.app/profile').then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return <div></div>
  }

  return (
    <div className="flex flex-row-reverse items-center gap-3 font-bold ">
      <Image alt={data?.name} src={data?.image} width={44} height={44} className="rounded-full">

      </Image>
      <div className="">
        {data?.name}
      </div>
    </div>
  );
}

export default UserProfile;