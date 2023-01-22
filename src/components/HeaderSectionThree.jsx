import React from 'react'

const HeaderSectionThree = () => {
    const stats = [
        { name: 'Total Subscribers', stat: '71,897',img : "./images/pizza.png" },
        { name: 'Avg. Open Rate', stat: '58.16%', img : "./images/vig.png" },
        { name: 'Avg. Click Rate', stat: '24.57%',  img : "./images/vig.png"},
        { name: 'Total Subscribers', stat: '71,897',img : "./images/pizza.png" },

      ]
  return (
    <div className='max-w-7xl mx-auto mt-4 mb-4'>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-2">
        {stats.map((item,ind) => (
          <div key={ind} className=" transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 overflow-hidden  px-4 py-5  sm:p-6">
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                <img src={item.img} height={500} width={500} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default HeaderSectionThree