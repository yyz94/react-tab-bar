import './App.css'
import Navbar from './Navbar'

function App () {
  const navigation = [
    {
      title: 'Design',
      description: 'text',
      value: '1'
    },
    {
      title: 'Component',
      description: 'text',
      value: '2'
    },
    {
      title: 'Develop',
      description: 'text',
      value: '3'
    },
    {
      title: 'Resources',
      description: 'text',
      value: '4'
    },
    {
      title: 'Blog',
      description: 'text',
      value: '5'
    }
  ]

  const onTabChanged = (tab) => {
    // callback function for tab changed
    console.log("Current Tab is "+ tab.title)
  }
  return (
    <div className='App'>
      <Navbar navigation={navigation} onTabChanged={onTabChanged}></Navbar>
    </div>
  )
}

export default App
