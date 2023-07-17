import { db } from "../../config/firestore-config";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { getImagesByQuery } from "./unsplash-services";
import { cleanData } from "../helpers/helpers";

export const getAllProducts = async (collectionRef) => {
  const querySnapshot = await getDocs(collectionRef);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const setDefaultDatabase = async (collectionRef) => {
  try {
    const data = await getImagesByQuery("photos", "street");
    const cleanedData = [];

    for (const item of data) {
      const cleanedItem = await cleanData(item);
      cleanedData.push(cleanedItem);
    }

    for (const item of cleanedData) {
      const docRef = await addDoc(collectionRef, item);
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (err) {
    console.log("Error adding doc: ", err);
  }
};

export const checkCollectionEmpty = async (collectionRef) => {
  const querySnapshot = await getDocs(collectionRef);
  console.log(querySnapshot.empty, "--- empty? ");
  return querySnapshot.empty;
};

export const checkDatabaseStatus = async () => {
  const collectionRef = collection(db, "products");

  try {
    const isEmpty = await checkCollectionEmpty(collectionRef);
    console.log(isEmpty, "--- isEmpty? ");
    if (isEmpty) {
      return setDefaultDatabase(collectionRef);
    } else {
      console.log(isEmpty, "--- isEmpty? Nope!");
      return getAllProducts(collectionRef);
    }
  } catch (err) {
    console.log("Error - checkDatabaseStatus()", err);
  }
};
