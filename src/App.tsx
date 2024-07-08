import { useEffect, useState } from "react"

interface Iadvice{
id:number,
advice:string
}

function App() {
  const [data,setData]=useState<Iadvice | null>
  (null)
  const [loading,setLoading]=useState<boolean>(true)
  const [refresh,setRefresh]=useState<boolean>(false)
  const handleClick=()=>{
    setRefresh(refresh=>!refresh)
  }
  useEffect(()=>{
    const getAdvice=async()=>{
      const data =await fetch('https://api.adviceslip.com/advice')
      const result =await data.json()
      setLoading(false)
      setData(result.slip)
    }
    getAdvice()
  },[refresh])

  return (
    <>
    <section className="min-h-screen bg-DarkBlue grid place-items-center font-Manrope">
      <main className="w-[375px] min-h-[350px] bg-DarkGrayishBlue rounded-lg grid place-items-center p-7 relative md:w-[500px] md:min-h-[270px]">
      <div className="flex flex-col  items-center relative space-y-5 md:border-spacing-y-7 ">
        <h2 className="text-NeonGreen2 font-semibold uppercase tracking-[0.3rem] text-xs justify-self-start">Advice #{data?.id}</h2>
        <p className="text-center text-LightCyan font-bold opacity-[0.95] text-base capitalize">{loading ? "loading...." : data?.advice}</p>
        <div><svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg></div>
      </div>
      <button className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 rounded-full  bg-NeonGreen grid place-items-center w-16 h-16 md:w-14  md:h-14 hover:shadow-NeonGreen shadow-lg transition-all ease-linear delay-75  " onClick={handleClick}> 
      <svg className="scale-[1.1]" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button>
      </main>
    </section>
    </>
  )
}

export default App
