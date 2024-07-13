import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getCurrentUser } from "@/lib/appwrite";
import { UserData } from "@/types";

interface Document {
  // Define the actual properties here based on your backend data
  account_id: string;
  mail: string;
  user_name: string;
  profile_picture: string;
}

interface GlobalContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  isLoading: boolean;
}

const GlobalContext = createContext<GlobalContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
  isLoading: true,
});

export const useGlobalContext = () => useContext(GlobalContext);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      console.log('fetching user')
      try {
        const res:any = await getCurrentUser();
        if (res) {
          setIsLoggedIn(true);
          setUser(mapDocumentToUserData(res)); // Use the mapping function here
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Mapping function from Document to UserData
function mapDocumentToUserData(doc: Document): UserData {
  return {
    accountId: doc.account_id,
    email: doc.mail,
    username: doc.user_name,
    avatar: doc.profile_picture
  };
}
