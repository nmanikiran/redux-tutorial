import React, { useState, useEffect } from 'react'
import SearchForm from './presenter'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { setSearchTerm, resetSearch } from '../../../../services/filter/slice'
import {
  fetchMoviesBySearch,
  resetMovies,
} from '../../../../services/movie/slice'

export default () => {
  const { searchTerm, page, type } = useSelector(
    (state) => state.filter,
    shallowEqual
  )
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [error, setError] = useState()

  useEffect(() => {
    setInput(searchTerm)
  }, [searchTerm])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setError('')
    if (input.length < 3) {
      setError('minimum 3 chars')
      return
    }
    dispatch(setSearchTerm(input))
    dispatch(fetchMoviesBySearch({ searchTerm: input, page, type }))
  }

  const onResetHandler = (e) => {
    e.preventDefault()
    setInput('')
    setError()
    dispatch(resetSearch())
    dispatch(resetMovies())
  }

  return (
    <SearchForm
      input={input}
      setInput={setInput}
      error={error}
      searchTerm={searchTerm}
      onSubmit={onSubmitHandler}
      onReset={onResetHandler}
    />
  )
}
