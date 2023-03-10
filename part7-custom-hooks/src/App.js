import { useCounter, useField } from './hooks'

const App = () => {
  const counter = useCounter()

  return (
    <div className='App clickCount'>
      <div className='count'>{counter.value}</div>
      <button id='add' onClick={counter.increase}>
        plus
      </button>
      <button id='minus' onClick={counter.decrease}>
        minus
      </button>
      <button id='reset' onClick={counter.zero}>
        zero
      </button>
      <ClickCount />
      {/* <FormField /> */}
    </div>
  )
}

const ClickCount = () => {
  const left = useCounter()
  const right = useCounter()

  return (
    <div className='clickCount'>
      {left.value}
      <button id='left' onClick={left.increase}>
        left
      </button>
      <button id='right' onClick={right.increase}>
        right
      </button>
      {right.value}
    </div>
  )
}

// const FormField = () => {
//   const name = useField('text')
//   const born = useField('date')
//   const height = useField('number')

//   return (
//     <>
//       <form>
//         name:
//         <input type={name.type} value={name.value} onChange={name.onChange} />
//         {/* without custom hooks */}
//         {/* <input
//           type='text'
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />  */}
//         <br />
//         birthdate:
//         <input type={born.type} value={born.value} onChange={born.onChange} />
//         <br />
//         height:
//         <input
//           type={height.type}
//           value={height.value}
//           onChange={height.onChange}
//         />
//       </form>
//       <div>
//         <h5>Name: {name} </h5>
//         <p> Birth: {born} </p>
//         <p> Height: {height} </p>
//       </div>
//     </>
//   )
// }

export default App
