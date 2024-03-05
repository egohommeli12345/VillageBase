import { useState, createContext, useContext } from "react";

type ToolStateContextType = {
    addBtn: boolean;
    setAddBtn: React.Dispatch<React.SetStateAction<boolean>>;
    editBtn: boolean;
    setEditBtn: React.Dispatch<React.SetStateAction<boolean>>;
    deleteBtn: boolean;
    setDeleteBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToolStateContext = createContext<ToolStateContextType>({
    addBtn: false,
    setAddBtn: () => {},
    editBtn: false,
    setEditBtn: () => {},
    deleteBtn: false,
    setDeleteBtn: () => {},
});

export const useToolState = () => useContext(ToolStateContext);

export const ToolStateProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [addBtn, setAddBtn] = useState(false);
    const [editBtn, setEditBtn] = useState(false);
    const [deleteBtn, setDeleteBtn] = useState(false);

    return (
        <ToolStateContext.Provider
            value={{
                addBtn,
                setAddBtn,
                editBtn,
                setEditBtn,
                deleteBtn,
                setDeleteBtn,
            }}
        >
            {children}
        </ToolStateContext.Provider>
    );
};
