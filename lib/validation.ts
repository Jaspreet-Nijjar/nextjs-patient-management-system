import { z } from 'zod';

export const userFormValidation = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address.'),
});
