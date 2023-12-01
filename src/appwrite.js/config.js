import { envHelper } from "@/helpers/envVariables";
import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint(envHelper.baasUrl).setProject(envHelper.baasProjectId);

export const account = new Account(client);

/* DATABASES */

export const databases = new Databases(client, envHelper.todoDbId);
