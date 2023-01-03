import React, { useEffect, useState } from 'react'

export const Card = ({ data }) => {

  const [stats, setStats] = useState({ victories: data.stats.victories, defeats: data.stats.defeats })
  const handleVictories = () => {
    setStats({ ...stats, victories: stats.victories + 1 })
  }

  const handleDefeats = () => {
    setStats({ ...stats, defeats: stats.defeats + 1 })
  }

  function handleReset() {
    setStats({ victories: 0, defeats: 0 })
  }

  useEffect(() => {
    if (localStorage.getItem('rankStats')) {
      const newData = JSON.parse(localStorage.getItem('rankStats'))
        .map(item => (item.category === data.category) ? { ...item, stats: { victories: stats.victories, defeats: stats.defeats } } : item)
      localStorage.setItem('rankStats', JSON.stringify(newData))
    }
  }, [stats, data])


  return (
    <div className="sm:h-96 py-6 w-full rounded-lg border-4 border-dashed border-gray-200">
      <div className="flex gap-0 items-center justify-center my-2">
        <img src={data.img} alt="Logo Class" className='h-20' />
      </div>
      <div className="mt-10 sm:mx-4 md:px-2 md:max-w-none">
        <div className="flex justify-around">
          <div className="relative flex flex-col gap-2 sm:flex-row md:flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white font-bold text-2xl sm:shrink-0">V</div>
            <div className="sm:min-w-0 sm:flex-1">
              <p className="text-3xl font-semibold text-gray-900 flex">{stats.victories}</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-2 sm:flex-row md:flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white font-bold text-2xl sm:shrink-0">D</div>
            <div className="sm:min-w-0 sm:flex-1">
              <p className="text-3xl font-semibold leading-8 text-gray-900">{stats.defeats}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-5">
          {
            stats.victories === 7 || stats.defeats === 20 ?
              <>
                <button className='px-6 py-2 bg-slate-600 rounded-lg text-white' onClick={handleVictories} disabled>Victoria!</button>
                <button className='px-6 py-2 bg-slate-600 rounded-lg text-white' onClick={handleVictories} disabled>Derrota!</button>
              </>
              :
              <>
                <button className='px-6 py-2 bg-emerald-600 rounded-lg text-white' onClick={handleVictories}>Victoria!</button>
                <button className='px-6 py-2 bg-rose-600 rounded-lg text-white' onClick={handleDefeats}>Derrota!</button>
              </>
          }
        </div>
        <div className="flex justify-center mt-5">
          <button className='px-6 py-2 bg-orange-600 rounded-lg text-white' onClick={handleReset}>Reiniciar</button>
        </div>
      </div>
    </div>
  )
}
