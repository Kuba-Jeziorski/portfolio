type Props = {
  children: React.ReactNode;
  url: string;
};

export default function Link({ children, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex px-4 py-2 font bg-primary-accent rounded-xl border-none transition-filter duration-300 hover:brightness-125"
    >
      {children}
    </a>
  );
}
