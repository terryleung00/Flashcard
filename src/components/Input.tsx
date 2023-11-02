import { useState } from 'react';
import { addFlashcards } from '../openai';
import { FlashcardT } from '../types/flashcard';

interface InputProps {
	flashcards: FlashcardT[];
	setFlashcards: React.Dispatch<React.SetStateAction<FlashcardT[]>>;
}

const Input = ({ flashcards, setFlashcards }: InputProps) => {
	const [topic, setTopic] = useState('');

	const generateFlashcard = () => {
		if (topic.length < 10)
			return window.alert('Topic needs at least 10 characters');
		else {
			addFlashcards(topic)
				.then((res) => {
					if (res.cards.length === 0)
						throw new Error('No Card within flashcard');
					setFlashcards((flashcards) => [...flashcards, res]);
					localStorage.setItem(
						'flashcards',
						JSON.stringify([...flashcards, res])
					);
				})
				.catch((e) => console.error(e));
		}
	};

	return (
		<div>
			<div className='flex flex-col items-center p-10'>
				<input
					type='text'
					className='p-3 rounded-full border-2 border-gray-300 focus:border-orange-500 outline-none transition-colors w-10/12'
					placeholder='Enter a topic with at least 10 characters'
					onChange={(e) => setTopic(e.target.value)}
				/>
				<button
					className='mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors'
					onClick={() => generateFlashcard()}
				>
					Generate Flashcard
				</button>
			</div>
		</div>
	);
};

export default Input;
