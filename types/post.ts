import { IUser } from './user'

export type Post = {
  _id: string
  prompt: string
  tag: string
  creator: IUser
}
