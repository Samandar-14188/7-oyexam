// import { useRouter } from "next/navigation";



// export default function Button({ text, id }) {
//   // const router = useRouter();

//   // function handleClick() {
//   //   const targetId = id !== undefined ? id - 1 : -1;
//   //   router.push(`/earphones/${targetId}`);
//   // }

//   return <button >{text}</button>;

export default function Button({text}) {
  return (
    <button>{text}</button>
  )
}
