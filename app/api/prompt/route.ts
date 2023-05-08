import Prompt from '@/models/prompt'
import { connectToDB } from '@/utils/database'

export const GET = async (req: Request, res: Response) => {
  try {
    // Conect to DB
    await connectToDB()

    // get all prompts
    const prompts = await Prompt.find({}).populate('creator')

    // Send all prompts to client
    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response('Failed to get all prompts', { status: 500 })
  }
}
