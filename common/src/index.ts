import {string, z} from 'zod'

export const SingupInput=z.object({
    username:z.string(),
    password:z.string()

})
export type SignupParams=z.infer<typeof SingupInput>