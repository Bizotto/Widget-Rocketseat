import { ArrowLeft, Camera } from 'phosphor-react';
import { useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../closeButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-50 hover:text-zinc-500 "
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className=" text-x1 leading-6 flex items-center gap-2 ">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full focus:outline-none">
        <textarea
          className=" min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 
          text-zinc-100 bg-transparent rounded-md focus:border-brand-500 
          focus:ring-offset-brand-500 border-zinc-600 focus:ring-1 focus:ring-brand-500 resize-none 
          focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte-nos detalhes do que está acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 
            flex justify-center items-center text-sm hover:bg-brand-300 
            focus:outline-none focus:ring-2 focus:ring-offset-zinc-900 
            focus:ring-brand-500 transition-colors"
          >
            Envias o Feedback??!!
          </button>
        </footer>
      </form>
    </>
  );
}
