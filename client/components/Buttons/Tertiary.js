export function Tertiary ({ children, ...props }) {
  return (
    <button type="button" {...props} className='border-green-400 border w-full md:w-[28rem] min-w-[200px]  relative lg:w-[28rem] lg:h-14 py-3 select-none shadow-lg rounded-xl font-md text-lg '>
        {children}
    </button>
  )
}
