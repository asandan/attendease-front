export interface Students {
  totalRows: number;
  data: Datum[];
}

export interface Datum {
  id: number;
  accountId: number;
  groupId: number | null;
  group: Group | null;
  account: Account;
}

export interface Account {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Group {
  id: number;
  name: string;
  EPId: number;
  teacherId: number;
  ep: Ep;
}

export interface Ep {
  id: number;
  name: string;
  facultyId: number;
  faculty: Faculty;
  subject?: Subject;
}

export interface Subject {
  id: number;
  name: string;
}

export interface Faculty {
  id: number;
  name: string;
}


export interface List {
  label: string;
  value: number;
}
