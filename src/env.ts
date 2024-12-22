import {z} from 'zod'


const validationSchemaEnv = z.object({
    VITE_API_URL:z.string().url()
})

export const env = validationSchemaEnv.parse(import.meta.env)