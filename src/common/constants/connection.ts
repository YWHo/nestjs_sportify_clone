export type Connection = {
  CONNECTION_STRING: string;
  DB: string;
  DBNAME: string;
};

export const connection: Connection = {
  CONNECTION_STRING: 'MYSQL://12324/dummy',
  DB: 'MYSQL',
  DBNAME: 'TEST',
};
