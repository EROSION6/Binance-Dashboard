import { ReactNode, createContext, useState } from 'react';

type ContextState = {
	open: boolean;
	openAndCloseMenu: (isOpen: boolean) => void;
};

export const Context = createContext<ContextState | null>(null);

export const BurgerMenu = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState<boolean>(true);

	const openAndCloseMenu = () => {
		setOpen(!open);
	};

	return (
		<Context.Provider value={{ open, openAndCloseMenu }}>{children}</Context.Provider>
	);
};
