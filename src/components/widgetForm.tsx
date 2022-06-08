import { CloseButton } from './closeButton';
import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';
import { useState } from 'react';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de lampada',
    },
  },
  OTHER: {
    title: 'Outra',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de nuvem',
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col 
    items-center shadow-lg w-[calc(100vw-20rem)] md:w-auto"
    >
      <header>
        <CloseButton />

        <span className=" text-x1 leading-6 ">Deixe seu Feedback</span>
      </header>

      {!feedbackType ? (
        <div className="flex pv-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center 
                  gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus: outline-none"
                onClick={() => setFeedbackType(key as FeedbackType)}
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
      ) : (
        <p> Clicaste?!!</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com 🖤 pelo
        <a
          className="underline underline-offset-2"
          href="http://187.94.101.50/safebank/index.html"
        >
          {' '}
          SafeBank
        </a>
      </footer>
    </div>
  );
}
