import { useState, createContext, useContext } from "react";

type ToolStateContextType = {
    addBtn: boolean;
    setAddBtn: React.Dispatch<React.SetStateAction<boolean>>;
    editBtn: boolean;
    setEditBtn: React.Dispatch<React.SetStateAction<boolean>>;
    deleteBtn: boolean;
    setDeleteBtn: React.Dispatch<React.SetStateAction<boolean>>;
    whichSite: string;
    setWhichSite: React.Dispatch<React.SetStateAction<string>>;
    onLandingPage: boolean;
    setOnLandingPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToolStateContext = createContext<ToolStateContextType>({
    addBtn: false,
    setAddBtn: () => {},
    editBtn: false,
    setEditBtn: () => {},
    deleteBtn: false,
    setDeleteBtn: () => {},
    whichSite: "",
    setWhichSite: () => {},
    onLandingPage: false,
    setOnLandingPage: () => {},
});

export const useToolState = () => useContext(ToolStateContext);

export const ToolStateProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [addBtn, setAddBtn] = useState(false);
    const [editBtn, setEditBtn] = useState(false);
    const [deleteBtn, setDeleteBtn] = useState(false);
    const [whichSite, setWhichSite] = useState("");
    const [onLandingPage, setOnLandingPage] = useState(false);

    return (
        <ToolStateContext.Provider
            value={{
                addBtn,
                setAddBtn,
                editBtn,
                setEditBtn,
                deleteBtn,
                setDeleteBtn,
                whichSite,
                setWhichSite,
                onLandingPage,
                setOnLandingPage,
            }}
        >
            {children}
        </ToolStateContext.Provider>
    );
};
