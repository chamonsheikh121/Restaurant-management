
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Services/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";






export const AuthContext = createContext([])
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState()
    const axiosPublic = UseAxiosPublic()
    const [loading, setLoading] = useState(true)




    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const upDataUser = (result, userName, photoLink) => {
        setLoading(true)
        return updateProfile(result, {
            displayName: userName,
            photoURL: photoLink
        })
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const logOut = () => {
        signOut(auth)
    }

    let userEmail;
    if (user) {
        userEmail = user.email
    }
    //    console.log(userEmail);


    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const email = { email: currentUser.email };
                // console.log(email);
                axiosPublic.post('/api/v1/jwt', email)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data) {
                            localStorage.setItem('access-token', res?.data)
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')

            }
        })

        return () => {
            return subscribe()
        }

    }, [axiosPublic])


    const info = {
        signUp,
        singIn,
        user,
        loading,
        setLoading,
        upDataUser,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;