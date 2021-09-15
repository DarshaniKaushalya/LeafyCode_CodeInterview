import React from 'react'

const card = () => {
    return (
        // <div className="px-4 py-10">
        //     <div className="mx-auto overflow-hidden bg-white rounded-lg md:w-2/4">
        //         <section className="p-8">
        //             <h1 className="text-xl font-semibold text-green-500">Join with Us</h1>
        //             <h2 className="pt-4 font-semibold text-green-400">30-day hassle-free mony back guarentee</h2>
        //             <p className="pt-2 text-justify text-black" >
        //      A price card provides a way to apply common pricing for 
        //      a group of sellable items without repeating the same pricing
        //     definition in each.These tasks can be performed by either 
        //     a Pricer or Pricer Manager, except for approving or rejecting 
        //     a snapshot, which can only be performed by a Pricer Manager.</p>
                    
        //         </section>

        //         <section className="text-white md:flex-row md:flex">
        //             <div className="p-8 bg-green-400 md:w-1/2">
        //                <h2 className="text-lg font-semibold ">Money Subscription</h2>
        //                 <div className="flex items-center pt-2">
        //                     <p className="text-2xl font-semibold">$50</p>
        //                     <p className="ml-2 font-hairline">per month</p>
                            
        //                 </div>
        //                 <p className="text-sm font-light">Full access for less than $1 a day</p>
        //                 <button className="w-full px-4 py-2 mt-6 font-bold text-white bg-green-800 rounded shadow-md hover:bg-yellow-500">
        //                     Hire Me
        //                     </button>
                                                
        //             </div>

                    
        //             <div className="p-8 text-black bg-green-200 md:w-1/2">

        //                 <h2 className="text-lg font-semibold">Why Us</h2>
        //                 <div className="pt-2 text-xs font-light">
        //                 <p>Coding Lessons</p>
        //                 <p>Tutorials</p>
        //                 <p>Easy to learn</p>
        //                 <p>Coding Lessons</p>
        //                 <p>Tutorials</p>
        //                 <p>Easy to learn</p>
        //             </div>
        //             </div>
                    
        //         </section>
                
           

        //     </div>
           
        // </div>



        <div className="container px-4 py-24 mx-auto">
  
  <header className="mb-16 text-center">
    <h1 className="mb-4 text-5xl">My Plans</h1>
    <p className="leading-normal text-grey-dark md:w-1/2 md:mx-auto">Follow you can see three types of plans that I am offering.Just click & hire me. </p>
  </header>
  
  <div className="lg:flex lg:items-center lg:-mx-2">
    
    <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 ">
      <div className="p-10 text-center bg-green-300 rounded border-grey-light bg-gradient-to-r from-green to to-green-500 ">
        <h2 className="mb-4 text-lg font-semibold">Basic</h2>
        <div className="mb-6">
          <span className="block pb-2 text-5xl">$29</span>
          <span className="text-sm text-grey">Basic items contains</span>
        </div>
        <ul className="mb-6 leading-loose text-grey list-reset">
          <li>Website Development</li>
          <li>1 page</li>
          <li>responsive</li>
          <li>5 revisions</li>
          <li>Ontime delivery</li>
        </ul>
        <a className="inline-block w-full p-3 text-sm font-bold tracking-wide no-underline uppercase bg-green-600 rounded border-red text-red hover:bg-green-900 " href="#">Get started</a>
      </div>
    </div>
    
    <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 animate-pulse">
      <div className="p-10 text-center bg-green-400 rounded border-grey-light lg:py-16 lg:shadow-lg bg-gradient-to-r from-green to-green-500">
        <h2 className="mb-4 text-lg font-semibold">Premium</h2>
        <div className="mb-6">
          <span className="block pb-2 text-5xl">$79</span>
          <span className="text-sm text-grey">Premium items contains</span>
        </div>
        <ul className="mb-6 leading-loose text-grey-dark list-reset">
          <li>Website Development</li>
          <li>10 page</li>
          <li>responsive</li>
          <li>unlimited revisions</li>
          <li>Ontime delivery</li>
        </ul>
        <a className="inline-block w-full p-3 text-sm font-bold tracking-wide no-underline uppercase bg-green-600 rounded border-red text-red lg:border-none lg:bg-red lg:hover:bg-red-dark lg:text-white hover:bg-white hover:text-green-900" href="#">Get started</a>
      </div>
    </div>
    
    <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 ">
      <div className="p-10 text-center bg-green-300 rounded border-grey-light bg-gradient-to-r from-green to-green-500">
        <h2 className="mb-4 text-lg font-semibold">Standarded</h2>
        <div className="mb-6">
          <span className="block pb-2 text-5xl">$49</span>
          <span className="text-sm text-grey">Standared items contains</span>
        </div>
        <ul className="mb-6 leading-loose text-grey list-reset">
          <li>Website Development</li>
          <li>5 page</li>
          <li>responsive</li>
          <li>10 revisions</li>
          <li>Ontime delivery</li>
        </ul>
        <a className="inline-block w-full p-3 text-sm font-bold tracking-wide no-underline uppercase bg-green-600 rounded border-red text-red hover:bg-green-900" href="#">Get started</a>
      </div>
    </div>
    
  </div>
</div>
    )
}

export default card
