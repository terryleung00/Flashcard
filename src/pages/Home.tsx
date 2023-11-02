import Input from "../components/Input";
import { FlashcardT } from "../types/flashcard";
import FlashcardList from "../components/FlashcardList";

interface HomeProps {
    flashcards: FlashcardT[];
	setFlashcards: React.Dispatch<React.SetStateAction<FlashcardT[]>>;
}

const Home = ({ flashcards, setFlashcards }: HomeProps) => {
    return (
        <>
            <div className='flex-grow'>
                <Input flashcards={flashcards} setFlashcards={setFlashcards}/>
                <FlashcardList title='Top Flashcards' flashcards={flashcards} />
            </div>
        </>
    )
}

export default Home;
