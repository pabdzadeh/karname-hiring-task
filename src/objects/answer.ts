export type Answer = {
  id: string;
  author: string;
  body: string;
  questionId: string;
  likes?: string[];
  dislikes?: string[];
  time?: string;
  date?: string;
}