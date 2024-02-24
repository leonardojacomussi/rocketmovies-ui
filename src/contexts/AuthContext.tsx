import {
  createContext,
  useEffect,
  useState,
  FC,
} from "react";
import { api } from "../services/api";

export type User = {
  id: 1,
  name: string,
  email: string,
  password: string,
  avatar: string,
  created_at: string,
  updated_at: string
};

export type UpdateUser = {
  name: string,
  email: string,
  password: string,
  oldPassword: string,
  [key: string]: any
 };

export type AuthContextProps = {
  user: User,
  signIn: ({email, password}: {email: string, password: string}) => Promise<void>,
  signOut: () => void,
  updateUser: ({ user, avatarFile }: { user: UpdateUser, avatarFile?: File }) => Promise<void>,
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: FC<{ children: any }> = ({ children }: { children: any }): JSX.Element => {
  const [data, setData] = useState<{ user: User, token: string }>({} as { user: User, token: string });

  const signIn = async({ email, password }: { email: string, password: string }) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@RocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@RocketMovies:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error: any) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Erro ao realizar login, tente novamente mais tarde.");
      };
    };
  };

  const signOut = () => {
    localStorage.removeItem("@RocketMovies:user");
    localStorage.removeItem("@RocketMovies:token");
    api.defaults.headers.common["Authorization"] = undefined;
    setData({} as { user: User, token: string });
  };

  const updateUser = async({ user, avatarFile }: { user: UpdateUser, avatarFile?: File }) => {
    try {
      if (avatarFile) {
        const fileUploadData = new FormData();
        fileUploadData.append("avatar", avatarFile);
        const response = await api.patch("/users/avatar", fileUploadData);
        const { avatar } = response.data;
        user.avatar = avatar;
      };

      await api.put("/users", user);
      localStorage.setItem("@RocketMovies:user", JSON.stringify(user));
      setData((oldData) => ({ ...JSON.parse(JSON.stringify(oldData)), user }));
      alert("Perfil atualizado com sucesso!");
    } catch (error: any) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Erro ao atualizar perfil, tente novamente mais tarde.");
      };
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("@RocketMovies:user");
    const token = localStorage.getItem("@RocketMovies:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    };
  }, []);

  return (
    <AuthContext.Provider value={{
      user: data.user,
      signIn,
      signOut,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };