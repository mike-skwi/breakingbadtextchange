import './Logo.css'

interface Props {
  result: string[]
}
export default function Logo({result}: Props) {
  return (
    <>
      <span>{result[0]}</span>
      <span>{result[1]}</span>
      <span>{result[2]}</span>
    </>
  )
}