'use server';

import { ID, Query } from 'node-appwrite';
import { users } from '../appwrite.config';
import { parseStringify } from '../utils';

export const createUser = async (user: CreateUserParams) => {
  const newUser = await users.create(
    ID.unique(),
    undefined,
    undefined,
    undefined,
    user.name
  );

  return newUser;
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.log(error);
  }
};
