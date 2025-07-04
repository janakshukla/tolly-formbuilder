import Container from "./components/custom/Container"


const App = () => {
  return (
  <>
  <Container>
  <div className='flex flex-col h-screen w-screen bg-gray-100'>
    <div className='h-1/4 bg-gradient-to-r from-violet-600 to-indigo-600' >
      {/* this is the banner part */}
    </div>
    <div></div>
  </div>
  </Container>
  </>
  )
}

export default App