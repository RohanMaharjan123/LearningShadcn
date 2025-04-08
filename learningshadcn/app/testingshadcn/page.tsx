import React from 'react'
import { Button } from '@/components/ui/button'
const page = () => {
    return (
        <main className="h-full flex flex-col justify-center items-center border-amber-50 border-2">
            <div>
                Hello page.
            </div>
                <button className='px-4 py-6 bg-blue-400 rounded my-3 hover:bg-blue-700'>
                    Testing button
                </button>
                <Button variant={'link'} size={'sm'}>Shad cn button</Button>
        </main>
    )
}

export default page
