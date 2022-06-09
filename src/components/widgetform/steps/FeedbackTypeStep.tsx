import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../closeButton';

interface FeedbackContentStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackContentStepProps) {
  return (
    <>
      <header>
        <span className=" text-x1 leading-6 ">Deixe seu Feedback</span>
        <CloseButton />

      </header>

      <div className="flex pv-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center 
          gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus: outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <span>
                <img src={value.image.source} alt={value.image.alt} />
                {value.title}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
