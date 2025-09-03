
type PropsChildren = {
    children: React.ReactNode
}

export const ErrorMessage = ({children}:PropsChildren) => {
  return (
    <div>
        <p className="text-red-600 text-center bg-red-100 p-1">{children}</p>
    </div>
  )
}
