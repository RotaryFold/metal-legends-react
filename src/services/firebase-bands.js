import { database } from "../firebase/firebase";
import { ref, get, set, push, remove } from "firebase/database";

const BANDS_REF = "bands";

// Obtener todas las bandas de Firebase
export async function getBands() {
  const snapshot = await get(ref(database, BANDS_REF));
  if (!snapshot.exists()) return [];

  const data = snapshot.val();
  return Object.entries(data).map(([key, value]) => ({
    ...value,
    firebaseKey: key,
  }));
}

// Guardar una nueva banda en Firebase
export async function addBand(band) {
  const newRef = push(ref(database, BANDS_REF));
  await set(newRef, band);
  return { ...band, firebaseKey: newRef.key };
}

// Reemplazar todas las bandas en Firebase (usado en import)
export async function setAllBands(bandsArray) {
  const bandsObj = {};
  bandsArray.forEach((band, index) => {
    const key = band.id || `band-${index}`;
    const { firebaseKey, ...rest } = band;
    bandsObj[key] = rest;
  });
  await set(ref(database, BANDS_REF), bandsObj);
}

// Eliminar una banda de Firebase
export async function deleteBand(firebaseKey) {
  await remove(ref(database, BANDS_REF + "/" + firebaseKey));
}
