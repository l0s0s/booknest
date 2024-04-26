import {storage} from './Firebase';
import {ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadCover = async (id: string, file: File): Promise<string> => {
    const storageRef = ref(storage, `covers/${id}`);

    try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
}


export default uploadCover;