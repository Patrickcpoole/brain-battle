import { Client, Databases, ID } from 'node-appwrite';
// import { project, database, key } from '@/lib/app-details';

export default async ({request, response, log, error}) => {

    // context.log("123");
    // context.error("123");
    log("123");
    error("123");

    return response.send("Hello World :)");

    /*  
  
    const client = new Client();
    client.setEndpoint(project.endpoint);
    client.setProject(project.id);
    client.setKey(key);

    const databases = new Databases(client);

    const result = await databases.createCollection(database.id, ID.unique(), "Test Collection");

    */
    
};
