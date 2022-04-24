type Filter = {
  take: number;
  skip: number;
  cursor?: {
    id: string;
  };
};

export default Filter;
