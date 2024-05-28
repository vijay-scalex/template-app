import { create } from "zustand";
import type { TLoginRequest } from "../../services/auth/auth.service.types";

interface AuthState {
  isAuthorized: boolean;
  loading: boolean;
}

interface AuthActions {
  login: (request: TLoginRequest) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  isAuthorized: false,
  loading: false,

  login: async (_: TLoginRequest) => {
    set((state) => ({ ...state, loading: true }));
    setTimeout(async () => {
      await Promise.resolve("Logged in");
    }, 4000);

    set((state) => ({ ...state, isAuthorized: true, loading: false }));
  },
  logout: async () => {
    set((state) => ({ ...state, isAuthorized: false }));
  },
}));

export default useAuthStore;
