// src/providers/UserConfig-store-provider.tsx
'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import {
  type UserConfigStore,
  createUserConfigStore,
  initUserConfigStore,
} from '@/base/stores/user-config.store'

export type UserConfigStoreApi = ReturnType<typeof createUserConfigStore>

export const UserConfigStoreContext = createContext<UserConfigStoreApi | undefined>(undefined)

export interface UserConfigStoreProviderProps {
  children: ReactNode
}

export const UserConfigStoreProvider =  ({ children }: UserConfigStoreProviderProps) => {
  const storeRef = useRef<UserConfigStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createUserConfigStore( initUserConfigStore())
  }

  return (
    <UserConfigStoreContext.Provider value={storeRef.current}>
      {children}
    </UserConfigStoreContext.Provider>
  )
}

export const useUserConfigStore = <T,>(selector: (store: UserConfigStore) => T): T => {
  const userConfigStoreContext = useContext(UserConfigStoreContext)

  if (!userConfigStoreContext) {
    throw new Error(`useUserConfigStore must be used within UserConfigStoreProvider`)
  }

  return useStore(userConfigStoreContext, selector)
}
