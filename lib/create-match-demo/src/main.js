import { Client, Databases, ID } from 'node-appwrite';

export default async ({ req, res, log, error }) => {

  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1");
  client.setProject("664eb7990012ea2e93ff");
  client.setKey("e9ebaff4f2a9e579c75236fd3381fd7caf5ad5c48b4bbea7c227fd1cd0f13f3347e343916435836e3d81afc283175346de5581228874dff93f22fec41b72259784c3296dcbb2689e8954d68a8edc4f109bd6babb0c447ea61ac0d8e5b4d3faf5705d69d48310993d14ba0cb118b0de7a04cfa79f69ae514449ee335b94e3d008");

  const databases = new Databases(client);

  const result = databases.createCollection("668da72e003067d8f83f", ID.unique(), "Demo Battle Room")
    .then((response) => {
      log(response);
      return res.send(response.$id);
    })
    .catch((exception) => {error(exception)});

  log("Test");
  log(result);

  return res.empty();

};
