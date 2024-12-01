export interface JobType {
  id: number;
  company: string;
  role: string;
  submittedAt: String | null;
  oaDeadline: String | null;
  link: string | null;
  stage: string;
}
