import Prompt from '@/models/prompt'
import { connectToDB } from '@/utils/database'

export const POST = async (req: Request) => {
  // Get Value from Front end
  const { userId, prompt, tag } = await req.json()

  try {
    // Conect to DB
    await connectToDB()

    // Create Prompt
    const newPrompt = new Prompt({ creator: userId, prompt, tag })
    await newPrompt.save()

    // Send new Prompt to client
    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 })
  }
}
