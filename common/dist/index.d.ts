import { z } from 'zod';
export declare const SingupInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type SignupParams = z.infer<typeof SingupInput>;
