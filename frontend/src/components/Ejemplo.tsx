
type ejemploProps = {
    nombre: string
    apellido: string
    email: string
}

export default function Ejemplo({nombre, apellido, email} : ejemploProps) {
  return (
    <div className="border-2 rounded bg-red-300 p-2 m-1 w-auto h-auto">
        
        <p className=" text-9xl">{nombre}</p>
        <p className=" text-9xl">{apellido}</p>
        <p className=" text-9xl">{email}</p>
    </div>
  )
}
