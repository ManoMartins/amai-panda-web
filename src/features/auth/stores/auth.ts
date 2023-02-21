import { create, StateCreator } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'
import api from '@/services/api'

interface User {
    id: string
    name: string
}

interface Auth {
    isLogged: () => boolean
    token: string | null
    user: User | null

    actions: {
        login: (data: { token: string; user: User }) => void
        logout: () => void
    }
}

type MyPersist = (
    config: StateCreator<Auth>,
    options: PersistOptions<Auth>
) => StateCreator<Auth>

const useAuthStore = create<Auth>(
    (persist as MyPersist)(
        (set, get) => {
            return {
                isLogged: () => !!get().user,
                token: null,
                user: null,

                actions: {
                    login: (data) => {
                        set(() => {
                            return {
                                user: data.user,
                                token: data.token,
                            }
                        })
                    },
                    logout: () => {
                        set(() => {
                            return {
                                user: null,
                                token: null,
                            }
                        })
                    },
                },
            }
        },
        {
            name: '@amai-panda',
            storage: createJSONStorage(() => sessionStorage),
            onRehydrateStorage: () => {
                return (state) => {
                    api.defaults.headers.Authorization = `Bearer ${state?.token}`
                }
            },
        }
    )
)

const useToken = () => useAuthStore((state) => state.token)

const useIsLogged = () => useAuthStore((state) => state.isLogged())

const useUser = () => useAuthStore((state) => state.user)

const useAuthActions = () => useAuthStore((state) => state.actions)

export { useUser, useToken, useIsLogged, useAuthActions }
