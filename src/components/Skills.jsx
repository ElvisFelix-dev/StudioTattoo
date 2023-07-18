import { useEffect, useInsertionEffect, useState } from 'react'
// useInView hook
import { useInView } from 'react-intersection-observer'
// circular progressbar
import { CircularProgressbar } from 'react-circular-progressbar'

export default function Skills() {
  // destructure useInView
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  // progressbars states
  const [fullBody, setFullBody] = useState(0)
  const [piercing, setPiercing] = useState(0)
  const [fullColor, setFullColor] = useState(0)
  const [temp, setTemp] = useState(0)

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1)
        }
        if (piercing < 80) {
          setPiercing(piercing + 1)
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1)
        }
        if (temp < 95) {
          setTemp(temp + 1)
        }
      }, 50)
    } else {
      setFullBody(0)
      setPiercing(0)
      setFullColor(0)
      setTemp(0)
    }
  }, [inView, fullBody, piercing, fullColor, temp])

  // circular progressbar style
  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#eeeeee',
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  }

  return (
    <section id="special" ref={ref} className="section font-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row gap-y-12">
          {/* progressbar 1 */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}
            />
            <div className="font-light text-center uppercase">Tatuagens</div>
          </div>
          {/* progressbar 2 */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={piercing}
              styles={styles}
              text={`${piercing}%`}
            />
            <div className="font-light text-center uppercase">Piercing</div>
          </div>
          {/* progressbar 3 */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={fullColor}
              styles={styles}
              text={`${fullColor}%`}
            />
            <div className="font-light text-center uppercase">Tattoo Color</div>
          </div>
          {/* progressbar 4 */}
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={temp}
              styles={styles}
              text={`${temp}%`}
            />
            <div className="font-light text-center uppercase">
              Tatto Temporária
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
