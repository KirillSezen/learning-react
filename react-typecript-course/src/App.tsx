import Card, { CardVariant } from "./components/Card"

function App() {

  return (
    <>

      <h1>Hello, TypeScript!</h1>
      <Card width="256px" height="25px" variant={CardVariant.outlined}>
        <button>Кнопка</button>
      </Card>

    </>
   
  )
}

export default App
