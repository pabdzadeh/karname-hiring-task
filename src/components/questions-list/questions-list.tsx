'use client';

import { useQuery } from "react-query";

const QuestionsList: React.FC<{}> = () => {
  const { isLoading, error, data } = useQuery('questions', () =>
    fetch(`https://json-server-karname.vercel.app/questions/`).then(res =>
      res.json()
    )
  );
  console.log(data)

  return (
    <div>

    </div>
  )
}

export default QuestionsList;