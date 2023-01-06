// Reduce reused code
import { customAlphabet } from 'nanoid'

export default function useId() {
    const nanoId = customAlphabet('0123456789abdefghijklmnopqrstuvwxyz', 10)
    
    return nanoId()
}