import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
  return (
    <div className='absolute bottom-4 right-4'>
      <button className="bg-brand-500 rounded-full px-3 h-12">
        <ChatTeardropDots className="w-6 h-6" />
      </button>
    </div>
  );
}
