export interface Students {
  totalRows: number;
  data:      Datum[];
}

export interface Datum {
  id:        number;
  accountId: number;
  groupId:   number | null;
  group:     Group | null;
  account:   Account;
}

export interface Account {
  id:        number;
  email:     string;
  password:  string;
  name:      null | string;
  surname:   null | string;
  role:      string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Group {
  id:        number;
  name:      string;
  EPId:      number;
  teacherId: number;
}

export interface List {
  label: string;
  value: number;
}
