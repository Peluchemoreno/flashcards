import './Homepage.css'
import Stack from '../Stack/Stack'
import { stackList } from '../../utils/stackList'

export default function Homepage({stackChoice}){
  return (
    <main className="homepage">
      <ul className="stacks">
        {stackList.map((list, index) => {
          return (
            <Stack stackChoice={stackChoice} key={index} index={index} name={list.name}/>
          )
        })}
      </ul>
    </main>
  )
}