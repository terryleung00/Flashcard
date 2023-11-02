import FlashcardList from "../components/FlashcardList";
import { FlashcardT } from "../types/flashcard";

interface AllFlashcardProps {
    flashcards: FlashcardT[];
}

const AllFlashcard = ({ flashcards }: AllFlashcardProps) => {
    return (
        <div className='flex-grow'>
            <FlashcardList title="Flashcards" flashcards={flashcards} />
        </div>
    )
}

export default AllFlashcard;
