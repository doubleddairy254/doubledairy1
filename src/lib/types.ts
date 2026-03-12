export type App = {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
};

export type Technology = {
  name: string;
  icon: React.ReactNode;
};

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
