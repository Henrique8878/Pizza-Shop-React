import {z} from 'zod'

const validationSchemaEnv = z.object({
    MODE:z.enum(['production','development','test']),
    VITE_API_URL:z.string()
})

export const env = validationSchemaEnv.parse(import.meta.env)
