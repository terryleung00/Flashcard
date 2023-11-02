import ReactCardFlip from 'react-card-flip';
import { FlashcardT } from '../types/flashcard';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

interface DetailedFlashcardProps {
	flashcards: FlashcardT[];
}

const DetailedFlashcard = ({ flashcards }: DetailedFlashcardProps) => {
	const { id } = useParams();
	const [isFlipped, setIsFlipped] = useState(false);
	const [cardCount, setCardCount] = useState(0);
	const flashcard = flashcards.find((flashcard) => flashcard.id == id);

	return (
		<div className='flex-grow'>
			<h1 className='text-3xl font-bold mb-4 text-center py-10'>
				{flashcard?.topic}
			</h1>
			<div className='flex justify-center'>
				<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
					<div
						className='h-80 w-96 bg-white rounded-lg border border-gray-200 shadow-md flex justify-center items-center'
						onClick={() => {
							setIsFlipped(true);
						}}
					>
						<div className='p-5 overflow-auto'>
							<p className='mb-3 font-bold text-gray-700'>
								{flashcard?.cards[cardCount].question}
							</p>
						</div>
					</div>
					<div
						className='h-80 w-96 bg-white rounded-lg border border-gray-200 shadow-md flex justify-center items-center'
						onClick={() => {
							setIsFlipped(false);
						}}
					>
						<div className='p-5 overflow-auto'>
							<p className='mb-3 font-bold text-gray-700'>
								{flashcard?.cards[cardCount].answer}
							</p>
						</div>
					</div>
				</ReactCardFlip>
			</div>
			<div className='flex justify-center mt-4'>
				{cardCount != 0 && (
					<button
						className='mr-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
						onClick={() => {
							setCardCount(cardCount - 1);
						}}
					>
						Prev
					</button>
				)}
				{flashcard?.cards.length != undefined &&
					flashcard?.cards.length != cardCount + 1 && (
						<button
							className='mr-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
							onClick={() => {
								setCardCount(cardCount + 1);
							}}
						>
							Next
						</button>
					)}
			</div>
		</div>
	);
};

export default DetailedFlashcard;
