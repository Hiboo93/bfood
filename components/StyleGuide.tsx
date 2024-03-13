import Link from 'next/link.js';
import React from 'react'
import { Button } from './ui/button';
import { Label } from './ui/label';

type Props = {}

const StyleGuide = (props: Props) => {
  return (
    <>
      {/* typography */}
      <div className='flex flex-col gap-y-4 p-24'>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet eius repellat aspernatur quas quos. Repellendus nobis et sed veritatis libero doloribus eaque architecto delectus perferendis beatae! Deserunt, consequatur illum?
        </p>
      </div>
      <div className='bg-black p-24 flex flex-col gap-y-4'>
        <Link href="/">Link</Link>
        {/* buttons */}
        <Button variant="default">Button 1</Button>
        <Button variant="orange">Button 2</Button>
        <Button variant="input">Button 3</Button>
        <Button variant="orange" size="sm">
          Button 2
        </Button>
        {/* label & input */}
        <div>
          <Label htmlFor='firstname'>First Name</Label>
        </div>
      </div>
    </>
  )
}

export default StyleGuide;