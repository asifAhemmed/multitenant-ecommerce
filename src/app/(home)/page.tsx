import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
   <div className="p-8">
     <Button variant="elevated">Click Me</Button>
     <p className='text-rose-500'>Hello World</p>
     <div>
       <Textarea placeholder="Type something..." />
     </div>
   </div>
  );
}
