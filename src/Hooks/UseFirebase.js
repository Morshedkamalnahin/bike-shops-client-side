import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';

//initialize firebase
initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(`https://mysterious-temple-52045.herokuapp.com/checkAdmin/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //       if (data.role === "admin"){
    //         setIsAdmin(true);
    //         setIsLoading(false);
    //       }
    //       else {
    //         setIsLoading(false);
    //         setIsAdmin(false);
    //       }
    //     })
    //   }, [user?.email])

    const auth = getAuth();
    //register email and password
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const newUser = { email, displayName: name }
                setUser(newUser);
                saveUser(name, email);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch(error => {

                    })
                setError('')
                history.replace('/')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    //sign a user
    const logInUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                history.replace(destination);

                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }
    // save user to database
    const saveUser = (name, email) => {
        const newUser = { name, email };
        fetch('https://mysterious-temple-52045.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
    }

    //obsraved user present
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://mysterious-temple-52045.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin))
    }, [user.email])

    //logout user
    const logOutUser = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))
    }
    return {
        user, registerUser, error, logOutUser, logInUser, isLoading, isAdmin
    }
}

export default useFirebase;