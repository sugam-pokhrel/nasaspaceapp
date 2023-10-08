import { Client ,ID,Storage,Databases} from 'appwrite';

const client = new Client();
export const id=ID
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6521c0ece1373ef247ba');


let storage = new Storage(client);    
export default storage;
export const db = new Databases(client);


