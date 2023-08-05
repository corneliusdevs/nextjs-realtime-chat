import { db } from '@/lib/db'
import './globals.css'
import Button from '@/components/ui/Button'



export default async function Home() {

  return (
    <div  className="text-red-500" >
     Home
     <Button variant = 'ghost'> Hello </Button>
    </div>
  )
}
