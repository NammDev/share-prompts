'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import PromptCardList from './PromptCardList'
import { Post } from '@/types/post'

const Feed = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([])

  // Search states
  const [searchText, setSearchText] = useState<string>('')
  // const [searchTimeout, setSearchTimeout] = useState<number | null>(null)
  const [searchedResults, setSearchedResults] = useState<Post[]>([])

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt')
    const data = await response.json()
    setAllPosts(data)
  }

  console.log(allPosts)

  useEffect(() => {
    fetchPosts()
  }, [])

  const filterPrompts = (searchtext: string): Post[] => {
    const regex = new RegExp(searchtext, 'i') // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) => regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt)
    )
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    // clearTimeout(searchTimeout)
    setSearchText(e.target.value)
    const searchResult = filterPrompts(e.target.value)
    setSearchedResults(searchResult)
    // debounce method
    // setSearchTimeout(
    //   setTimeout(() => {
    //     const searchResult = filterPrompts(e.target.value)
    //     setSearchedResults(searchResult)
    //   }, 500)
    // )
  }

  const handleTagClick = (tagName: string) => {
    setSearchText(tagName)
    const searchResult = filterPrompts(tagName)
    setSearchedResults(searchResult)
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={(e) => handleSearchChange(e)}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  )
}

export default Feed
