import Image from "next/image";

export default function Header(props) {
    return(
        <>
        <h1 className="text-2xl">{props.title}</h1>
        <Image className="py-7" src={props.sorce} width={200} height={120}/>
        </>
    )
}