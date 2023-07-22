import { db } from "../../config/firestore-config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getImagesByQuery } from "./unsplash-services";
import { cleanData } from "../helpers/helpers";

export const getAllProducts = async (collectionRef) => {
  const querySnapshot = await getDocs(collectionRef);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// export const getSummaryData = async (featuredCollection) => {
//   const collectionRef = collection(db, "products");

//   const querySnapshot = await getDocs(collectionRef);

//   featuredCollection.map((c) => )
//   querySnapshot.docs.map((doc) => {
//     console.log({ id: doc.id, ...doc.data() });
//   });
// };

export const getCollections = async (collection) => {
  try {
    const data = await getImagesByQuery("photos", collection);
    const cleanedData = [];

    for (const item of data) {
      const cleanedItem = await cleanData(item, collection);
      cleanedData.push(cleanedItem);
    }

    return cleanedData;
  } catch (err) {
    throw new Error("Error getting images: ", err);
  }
};

export const setDefaultDatabase = async (collectionRef) => {
  const collections = ["most popular", "nature", "aurora", "urban"];

  try {
    const cleanedData = await Promise.all(
      collections.map(async (collection) => await getCollections(collection))
    );

    for (const item of cleanedData.flat()) {
      const docRef = await addDoc(collectionRef, item);
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (err) {
    throw new Error("Error adding doc: ", err);
  }
};

export const updateDocument = async (obj) => {
  const collectionRef = collection(db, "products");

  try {
    for (const [key, value] of Object.entries(obj)) {
      const querySnapshot = await getDocs(collectionRef);
      const { orderQty } = value;

      querySnapshot.forEach(async (docSnapshot) => {
        const data = docSnapshot.data();
        if (data.id === key) {
          const docRef = doc(collectionRef, docSnapshot.id);
          const available = data.quantity - orderQty;
          await updateDoc(docRef, { quantity: available });
        }
      });
    }
    console.log("Documents updated successfully.");
  } catch (err) {
    throw new Error("Error updating document: ", err);
  }
};

export const checkCollectionEmpty = async (collectionRef) => {
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.empty;
};

export const checkDatabaseStatus = async () => {
  const collectionRef = collection(db, "products");

  try {
    const isEmpty = await checkCollectionEmpty(collectionRef);
    if (isEmpty) {
      return setDefaultDatabase(collectionRef);
    } else {
      return getAllProducts(collectionRef);
    }
  } catch (err) {
    throw new Error("Error while checking database", err);
  }
};
