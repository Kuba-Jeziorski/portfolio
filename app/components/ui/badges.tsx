type Props = {
  badges: string[];
};

export default function Badges({ badges }: Props) {
  return (
    <>
      {badges.map((badge) => (
        <span
          className="bg-badge-tag-fill brightness-150 text-sm text-muted-text px-2 py-1 rounded-md"
          key={badge}
        >
          {badge}
        </span>
      ))}
    </>
  );
}
