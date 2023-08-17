import { create } from "zustand";

interface TableState {
  categoryTable: string;
  editData: {
    id: number,
    name: string,
    email: string,
    phone: number,
    category: string,
    office: string,
    status: boolean,
  };
  idDetail: number;
  choiceCategoryTable: (data: any) => void;
  addEditData: (data: any) => void;
  updateId: (data: any) => void;
}

const useTableStore = create<TableState>()((set) => ({
  categoryTable: "",
  editData: {
    id: 1,
    name: "Dummy",
    email: "email",
    phone: +628238830283,
    category: "Customers",
    office: "default",
    status: true,
  },
    idDetail: 0,
  choiceCategoryTable: (data) => {
    console.log(data);
    set((state) => ({ categoryTable: data }));
  },
  addEditData: (data) => set((state) => ({ editData: data })),
  updateId: (data) => set((state) => ({ idDetail: data})),
}));

export default useTableStore;
