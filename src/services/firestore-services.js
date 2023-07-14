import { db } from "../../config/firestore-config";

import { collection, getDocs } from "firebase/firestore";

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach((doc) => {
    console.log({ id: doc.id, ...doc.data() });
  });
};
