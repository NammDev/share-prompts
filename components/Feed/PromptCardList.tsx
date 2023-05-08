import { Post } from '@/types/post'
import PromptCard from './PromptCard'

export interface IPromptCardList {
  data: Post[]
  handleTagClick: (tagName: string) => void
}

const PromptCardList = ({ data, handleTagClick }: IPromptCardList) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}

export default PromptCardList
