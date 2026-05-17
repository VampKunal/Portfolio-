import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: false, // Default to light mode (false)
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setDarkMode: (value) => set({ darkMode: value }),
    }),
    {
      name: "theme-storage", // Key name in localStorage
    }
  )
);

export default useThemeStore;
