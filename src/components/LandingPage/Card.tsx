import Container from "../Container";
import Link from "next/link";

type Props = {
  day: String;
  month: String;
  title: String;
  desc: String;
  detailsURL: string;
};

export default function SliderCard({
  day,
  month,
  title,
  desc,
  detailsURL,
}: Props) {
  return (
    <Container
      fluid
      className={`w-[280px] h-[350px] flex flex-col p-[10px] items-center justify-center gap-[20px] relative bg-slate-100`}
    >
      <div className="rounded-[50%] h-[80px] w-[80px] bg-black text-slate-100 text-wrap absolute top-[-30px] left-[30px] flex flex-col justify-center items-center shadow-lg shadow-stone-800">
        <span className="text-[20px] font-bold">{day}</span>
        <span className="text-[17px]">{month}</span>
      </div>

      <h3 className="w-fit text-[20px] font-[500]">{title}</h3>

      <p className="text-[15px]">{desc}</p>

      <Link href={detailsURL}>
        <button className="w-[150px] h-[40px] bg-transparent border-2 border-black p-0">
          VIEW DETAILS
        </button>
      </Link>
    </Container>
  );
}
