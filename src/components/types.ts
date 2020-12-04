export type Users = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
};

export type Match = {
  type: string;
  results: Array<Users>;
};
