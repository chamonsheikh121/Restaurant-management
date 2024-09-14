
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
    const upDateUser = (result, userName, photoLink) => {
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
        localStorage.removeItem('access-token')
        return signOut(auth)
    }

    // let userEmail;
    // if (user) {
    //     userEmail = user.email
    // }
    //    console.log(userEmail);


    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            if (currentUser) {
                console.log('hello guys');
                const email = { email: currentUser.email };
                // console.log(email);
                axiosPublic.post('/api/v1/jwt', email)
                    .then(res => {
                        console.log(res.data);
                        if (res.data) {
                            localStorage.setItem('access-token', res?.data)
                            setLoading(false)
                        }
                    })
            }
            else{
                setLoading(false)
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
        upDateUser,
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