import { useEffect, useState } from "react";
import { Card } from "../Card/Card";

export default function Main() {

    const localData = localStorage.getItem('rankStats')
    const [rankStats, setRankStats] = useState(JSON.parse(localData) || [
        {
            category: 'tank',
            stats: {
                victories: 0,
                defeats: 0,
            },
            img: './images/tank.png'
        },
        {
            category: 'damage',
            stats: {
                victories: 0,
                defeats: 0,
            },
            img: './images/dmg.png'
        },
        {
            category: 'support',
            stats: {
                victories: 0,
                defeats: 0,
            },
            img: './images/support.png'
        },
    ])

    useEffect(() => {
        if (localData) {
            setRankStats(JSON.parse(localData))
        } else {
            localStorage.setItem('rankStats', JSON.stringify(rankStats))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 grid-rows-1 md:grid-cols-3 px-4 py-6 sm:px-0">
                        {
                            rankStats.map(item => <Card key={item.category} data={item} />)
                        }
                    </div>
                    <div className="flex h-80 max-md:h-auto">
                    </div>
                </div>
            </main>
        </>
    )
}
