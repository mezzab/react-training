import { useLocalStorage } from '../hooks/useLocalStorage'

const Form = () => {
  const [name, setName] = useLocalStorage('name')

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit" aria-label="submit"></input>
    </form>
  )
}

export default Form
