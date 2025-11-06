import "./login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { supabase } from "../../lib/supaBase.js";

const Login = () => {

    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    });
    
    const [loading, setLoading] = useState(false);

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        });
    }}


    const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    console.log("Antes del login")
    try {
        console.log("entrando a la promesa")
        const {
        data: { user, session },
        error,
        } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
        console.error("Error de login:", error.message);
        } else {
        console.log("Usuario logueado:", user);
        console.log("Session token:", session?.access_token);
        console.log("Refresh token:", session?.refresh_token);
        }
    } catch (err) {
        console.log("Error de promesa")
        console.error("Excepción en login:", err);
    }
    setLoading(false);
    console.log("Despues del login")
    };



    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const { email, password, username } = Object.fromEntries(formData);
        try {
            // Create user in Supabase Auth
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
            });
            if (authError) throw authError;

            const userId = authData.user.id;

            // Upload avatar if exists
            let avatarUrl = null;
            if (avatar.file) {
                const fileExt = avatar.file.name.split('.').pop();
                const filePath = `avatars/${userId}.${fileExt}`;

                const {error: uploadError } = await supabase.storage
                    .from('avatars')
                    .upload(filePath, avatar.file, {
                        cacheControl: '3600',
                        upsert: false
                    });
                if (uploadError) throw uploadError;
                
                const { data: publicUrlData } = supabase.storage
                    .from('avatars')
                    .getPublicUrl(filePath);

                avatarUrl = publicUrlData.publicUrl;
                console.log(avatarUrl)
            }

            // Insert user profile in 'users' table
            const {error: profileError } = await supabase
                .from('profiles')
                .update([
                    { id: userId, username, avatar_url: avatarUrl }
                ]);

            if (profileError) throw profileError;
            toast.success("Account created successfully");
        } catch (err) {
            toast.error("Registration failed. Please try again. " + err.message);
        } finally {
            setLoading(false);
        }
    }


  return (
    <div className="login">
        <div className="item">
            <h2>Welcome back</h2>
            <form onSubmit={handleLogin} >
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button disabled={loading}>{loading ? "Loading...":"Sign in"}</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                <img src={"./avatar.png"}  alt="" />
                Upload an image
                </label>
                <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="Username" name="username" />
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password"/>
                <button disabled={loading}>{loading ? "Loading...":"Sign up"}</button>
            </form>
        </div>
    </div>
  )
}

export default Login