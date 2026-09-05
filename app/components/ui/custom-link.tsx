import Link from "next/link";

type Props = {
  children: React.ReactNode;
  url: string;
  isExternal?: boolean;
};

const linkClasses =
  "flex px-4 py-2 font bg-primary-accent rounded-xl border-none transition-filter duration-300 hover:brightness-125";

export default function CustomLink({
  children,
  url,
  isExternal = false,
}: Props) {
  return (
    <>
      {isExternal ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {children}
        </a>
      ) : (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {children}
        </Link>
      )}
    </>
  );
}
