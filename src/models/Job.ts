export type JobDTO = {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
};