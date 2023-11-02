import { FlashcardT } from '../types/flashcard';
import Flashcard from './Flashcard';

interface FlashcardListProps {
	title: string;
	flashcards: FlashcardT[];
}

const FlashcardList = ({ title, flashcards }: FlashcardListProps) => {
	return (
		<div className='max-w-screen-xl mx-auto p-4'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-2xl font-bold'>{title}</h2>
				{title == 'Top Flashcards' && (
					<a href='/flashcards' className='text-orange-500 hover:underline'>
						View All →
					</a>
				)}
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4'>
				{flashcards.map((flashcard, idx) => {
					return <Flashcard key={idx} flashcard={flashcard} />;
				})}
			</div>
		</div>
	);
};

export default FlashcardList;
