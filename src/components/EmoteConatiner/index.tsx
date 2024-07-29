interface EmoteContainerProps {
  svgData: string;
  svgAlt?: string;
}
const EMOTE_MAP: Record<string, string> = {
  chat: `💬`,
  hand: `👋`,
  sad: `😞`,
};

const EmoteContainer = ({ svgData }: EmoteContainerProps) => {
  return (
    <div className="emote-container h-[48px] w-[48px] flex justify-center items-center rounded-full bg-[#27292D]">
      <span className="text-sm">{EMOTE_MAP[svgData]}</span>
    </div>
  );
};

export default EmoteContainer;
