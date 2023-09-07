import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD6Vdl_UC3-h0jhMMV1mSG7xQlKaH1gBxY",
  authDomain: "hatsu-project-ccdf3.firebaseapp.com",
  projectId: "hatsu-project-ccdf3",
  storageBucket: "hatsu-project-ccdf3.appspot.com",
  messagingSenderId: "307123925678",
  appId: "1:307123925678:web:0200c2ec45e133a791333f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)