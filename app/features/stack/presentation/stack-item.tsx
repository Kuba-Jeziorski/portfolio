import Image from "next/image";
import { Tool } from "../domain/model";

type Props = {
  tool: Tool;
};

export default function StackItem({ tool }: Props) {
  const { icon, name, commercial_experience, overall_experience, status } =
    tool;

  return (
    <div className="w-full flex items-center justify-between gap-3 py-5 border-b border-b-slate-400/20 last:border-b-0">
      <div className="flex items-center gap-2">
        {icon && <Image src={icon} width={36} height={36} alt={`${name}`} />}
        {name && <p className="text-xl">{name}</p>}
      </div>
      <div className="flex flex-col items-end gap-1 text-secondary-text">
        {status && (
          <p className="text-sm">
            <span className="font-bold">{status}</span>
          </p>
        )}
        {commercial_experience && (
          <p className="text-sm">
            Commercial experience:{" "}
            <span className="font-bold">{commercial_experience}</span>
          </p>
        )}
        {overall_experience && (
          <p className="text-sm">
            Overall experience:{" "}
            <span className="font-bold">{overall_experience}</span>
          </p>
        )}
      </div>
    </div>
  );
}
