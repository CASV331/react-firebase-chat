import { supabase } from "./supaBase";
import { create } from "zustand";

export const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (uid) => {
        console.log("fetchUserInfo ejecutando con uid: ", uid)

        if(!uid) {
            console.log("No se recibio uid, abortando")
            return set({ currentUser:null, isLoading: false })
        }
        try {
            console.log("Entrando al try con uid: ", uid)
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', uid)
                .single()
                console.log(data, error)
            if (error || !data){
                console.log("Error fetching user info:", error)
                set({ currentUser: null, isLoading: false })
                return
            }
            console.log("Usuario encontrado:", data);
            sessionStorage.setItem("user", JSON.stringify(data));
            set({ currentUser: data, isLoading: false });
            

        } catch (error) {
            console.log(error)
            return set({ currentUser:null, isLoading: false})
        }
    },
    }
    
));