import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { useState } from 'react';
import { FlashcardT } from './types/flashcard';
import AllFlashcard from './pages/AllFlashCard';
import DetailedFlashcard from './pages/DetailedFlashcard';

function App() {
	const [flashcards, setFlashcards] = useState<FlashcardT[]>(
		JSON.parse(localStorage.getItem('flashcards') || '[]')
	);

	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route index element={<Home flashcards={flashcards} setFlashcards={setFlashcards}/>} />
				<Route path='/flashcards' element={<AllFlashcard flashcards={flashcards}/>} />
				<Route path='/flashcards/:id' element={<DetailedFlashcard flashcards={flashcards} />} />
			</Route>
		</Routes>
	);
}

export default App;
