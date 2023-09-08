import { getDocs, addDoc, collection, query, where } from "firebase/firestore";
import { db } from "../firebase-config/firebaseConfig";

export const addDocument = async (collectionName, dataFields) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), dataFields);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {

        console.error("Error adding document: ", e);
      }
}

export const getUserBookmarks = async (collectionName, uid) => {
    const bookmarks = []

    const q = query(collection(db, collectionName), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        bookmarks.push(doc.data());
    });

    return bookmarks
}