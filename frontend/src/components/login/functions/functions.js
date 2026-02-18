import { toast } from "react-toastify";
export const validate = (username, email, password) => {
            if (!username || !email || !password) {
                toast.error("Please fill in all fields");
                return false;
            }
            if (password.trim().length < 6) {
                toast.error("Password must be at least 6 characters long");
                return false;
            }
            if (username.trim().length < 3) {
                toast.error("User name must be at least 3 characters long");
                return false;
            }
            if(!email.includes("@")) {
                toast.error("Please enter a valid email address");
                return false;
            }
}
