// import { supabase } from "./supaBase";
// import { create } from "zustand";

// export const useUserStore = create((set) => ({
//     currentUser: null,
//     isLoading: true,
//     fetchUserInfo: async (uid) => {
        
//         if(!uid) return set({ currentUser:null, isLoading: false })

//         try {
//             const { data, error } = await supabase
//                 .from('users')
//                 .select('*')
//                 .eq('id', uid)
//                 .single()

//             if (error || !data){
//                 console.log("Error fetching user info:", error)
//                 set({ currentUser: null, isLoading: false })
//                 return
//             }

//             // Save on session storage
//             sessionStorage.setItem("user", JSON.stringify(data));
//             set({currentUser: data, isLoading:false})

//         } catch (error) {
//             console.log(error)
//             return set({ currentUser:null, isLoading: false})
//         }
//     },

//     loadUserFromStorage: () => {
//         const storedUser = sessionStorage.getItem("user");
//         if(storedUser) {
//             set({ currentUser: JSON.parse(storedUser), isLoading: false });
//         } else {
//             set({ currentUser: null, isLoading: false });
//         }
//     }
    
// }));