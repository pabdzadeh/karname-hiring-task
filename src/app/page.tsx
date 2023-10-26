import { QuestionsList, TopBar } from "@/components";
import { useQuery } from "react-query";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopBar title="لیست سوالات" />
      <QuestionsList />
    </main>
  )
}
