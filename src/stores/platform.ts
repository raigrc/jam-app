import { PlatformStore } from "@/types";
import { create } from "zustand";

export const usePlatformStore = create<PlatformStore>((set) => ({
  platforms: [],
  setPlatforms: (platforms) => set({ platforms }),
  addPlatforms: (platforms) => set((prev)=> ({platforms: [...prev.platforms, platforms]})),
  fetchPlatforms: async () => {
    const response = await fetch("/api/platforms");
    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();

    set({
      platforms: data.platforms,
    });
  },
}));
