import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'
import { useDispatch, useSelector } from 'react-redux'
import { formActions } from './store/form-slice'


function App() {
  const formIsVisible = useSelector(state => state.formVisible.isVisible);
  const dispatch = useDispatch();
  function handleToggleForm(){
    dispatch(formActions.toggleForm())
  }
  return (
    
    <div className='p-5 mx-auto w-full'>
      <div className='w-full mb-5'>
        {formIsVisible && <CreatePost/>}
      </div>
      <button onClick={handleToggleForm}>Toggle Post Form</button>
      <Posts/>
    </div>
 
  )
}

export default App
