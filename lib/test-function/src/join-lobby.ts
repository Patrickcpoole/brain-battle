// import { Client, Databases, ID } from 'node-appwrite';
import { project, database, key } from '@/lib/app-details';

export default async () => {

    console.log(key);

    /*
    
    const client = new Client();
    client.setEndpoint(project.endpoint);
    client.setProject(project.id);
    client.setKey(key);

    const databases = new Databases(client);

    const result = await databases.createCollection(database.id, ID.unique(), "Test Collection");

    */
    
};
