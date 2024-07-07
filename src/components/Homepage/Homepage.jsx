import './Homepage.css'
import Stack from '../Stack/Stack'
import { stackList } from '../../utils/stackList'

export default function Homepage(){
  return (
    <main className="homepage">
      <ul className="stacks">
        {stackList.map((list, index) => {
          return (
            <Stack key={index} index={index} name={list.name}/>
          )
        })}
      </ul>
    </main>
  )
}