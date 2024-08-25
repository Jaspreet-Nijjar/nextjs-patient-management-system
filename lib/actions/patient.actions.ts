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

  console.log(parseStringify(newUser));

  return newUser;
};
