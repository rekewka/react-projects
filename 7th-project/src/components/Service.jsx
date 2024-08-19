export default function Service(props) {
  let { img, heading, text, width } = props;

  return (
    <div className="flex flex-col gap-[15px] items-start">
      <img className="w-[100px]" src={img} alt="" />
      <h1 className="font-[500] text-[#EE4248] text-[28px]">{heading}</h1>
      <p
        className={`leading-[150%] text-[#30444E] text-[18px] w-[329px] h-[108px]`}
      >
        {text}
      </p>
      <button className="bg-[#EE4248] w-[119px] h-[42px] text-white">
        Read More
      </button>
    </div>
  );
}
