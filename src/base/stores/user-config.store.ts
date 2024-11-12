import { getCookie } from 'cookies-next/client'
import { createStore } from 'zustand/vanilla'

export type UserConfigState = {
  locale: string
}

export type UserConfigActions = {
  changeLocale: (locale: string) => void
}

export type UserConfigStore = UserConfigState & UserConfigActions

export const initUserConfigStore = (): UserConfigState => {
  return { locale: getCookie('locale') || 'en' }
}

export const defaultInitState: UserConfigState = {
  locale: 'en',
}

export const createUserConfigStore = (initState: UserConfigState = defaultInitState) => {
  return createStore<UserConfigStore>()((set) => ({
    ...initState,
    changeLocale: (locale) => set((state) => ({ ...state, locale })),
  }))
}
