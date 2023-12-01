import { account } from "@/appwrite.js/config";
import { v4 as uuidV4 } from "uuid";

export const auth = {
  isLoggedIn: async () => {
    try {
      const res = await account.get();
      return user;
    } catch (err) {
      return false;
    }
  },
  register: async (email, pass, name) =>
    await account.create(uuidV4(), email, pass, name),

  loginEmail: async (email, pass) =>
    await account.createEmailSession(email, pass),
};
