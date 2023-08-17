import { create } from 'zustand'

interface HandleState {
    isSideBarOpen: boolean,
    isPopUpAddUser: boolean,
    isPopUpEditUser: boolean,
    isPopupConfirm: boolean,
    isDropDownTable: boolean,
    isDropDownPagination: boolean,
  handleToggles: (data: any) => void
}

const useHandleStore = create<HandleState>()((set) => ({
 
    isSideBarOpen: false,
    isPopUpAddUser: false,
    isPopUpEditUser: false,
    isPopupConfirm: false,
    isDropDownTable: false,
    isDropDownPagination: false,

  handleToggles: (data) => { switch (data) {
    case "isSideBarOpen":
        set((state) => ({ isSideBarOpen: !state.isSideBarOpen }))
        break;
    case "isPopUpAddUser":
        set((state) => ({ isPopUpAddUser: !state.isPopUpAddUser }))
        break;
    case "isPopUpEditUser":
        set((state) => ({ isPopUpEditUser: !state.isPopUpEditUser }))
        break;
    case "isPopupConfirm":
        set((state) => ({ isPopupConfirm: !state.isPopupConfirm }))
        break;
    case "isDropDownTable":
        set((state) => ({ isDropDownTable: !state.isDropDownTable }))
        break;
    case "isDropDownPagination":
        set((state) => ({ isDropDownPagination: !state.isDropDownPagination }))
        break;
    default:
        break;
  }
   },
}))

export  default useHandleStore