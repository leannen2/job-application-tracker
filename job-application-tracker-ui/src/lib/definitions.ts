export interface Job {
  id: number;
  company: string;
  role: string;
  submittedAt: String | undefined;
  oaDeadline: String | undefined;
  link: string | undefined;
  stage: string;
}
