import { CloseButton } from '../closeButton';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from 'react';
import { FeedbackTypeStep } from './steps/FeedbackTypeStep';

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

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
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
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