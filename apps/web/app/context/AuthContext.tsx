"use client";
import { login, signUp } from "@/lib/api";
import React, { createContext, useContext, useState } from "react";

interface Response {
	ok?: boolean;
	success: boolean;
	message: string;
	data: {
		user: {
			email: string;
			id: string;
		};
	};
}
interface IUser {
	email: string;
}

interface AuthContextType {
	loginUser: (email: string, password: string) => Promise<Response>;
	signUpUser: (email: string, password: string) => Promise<Response>;
}

const AuthContext = createContext<AuthContextType>({
	loginUser: async () => {
		throw new Error("loginUser function not implemented.");
	},
	signUpUser: async () => {
		throw new Error("signUpUser function not implemented.");
	},
});

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<IUser | null>(null);

	const loginUser = async (email: string, password: string) => {
		const response = await login(email, password);
		return response;
	};

	const signUpUser = async (email: string, password: string) => {
		const response = await signUp(email, password);
		return response;
	};
	return (
		<AuthContext.Provider value={{ loginUser, signUpUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
