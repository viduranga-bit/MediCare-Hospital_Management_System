import React from 'react'
import { earningData} from '../../data/dummy';

export default function UsersCounts() {
  return (
     <div>
         <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-25 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-40  p-4 pt-4 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.7 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold"></span>
                
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      </div>
  )
}
