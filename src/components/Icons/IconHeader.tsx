type iconNavProps = {
  name: string;
  src: string;
};

export default function IconHeader({ name, src }: iconNavProps) {
  return <img className='cursor-pointer w-[28px]' src={src} alt={name} />;
}
