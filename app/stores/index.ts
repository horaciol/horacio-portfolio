import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface AuthState {
  username: string
  password: string
  access_token: string
  expires_in: number
  refresh_token: string
  setUserName: (name: string) => void
}

interface OrdersState {
  numberOfOrders: number
  increaseOrders: () => void
}

interface FoodStoreState {
  fishes: number
  addAFish(): void
}

export const useAuthStore = create<AuthState>(set => ({
  username: "",
  password: "",
  access_token: "",
  expires_in: 0,
  refresh_token: "",
  setUserName: (username: string) => set(() => ({ username })),
}))

export const useOrdersStore = create<OrdersState>(set => ({
  numberOfOrders: 0,
  increaseOrders: () =>
    set(state => ({ numberOfOrders: state.numberOfOrders + 1 })),
}))

export const useScansStore = create<FoodStoreState>()(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
