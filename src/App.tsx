import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')

  return (
    <>
      <div className="container">
        <section>
          <h1 className="text-4xl mt-10 mb-5">Input</h1>
          <Input onChange={(e) => setInput(e.target.value)} />
          <p className="mt-2">{input}</p>
        </section>

        <section>
          <h1 className="text-4xl mt-10 mb-5">Button</h1>
          <Button variant="outline">Button</Button>
        </section>
      </div>
    </>
  )
}

export default App
