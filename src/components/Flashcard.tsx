import { Link } from "react-router-dom";
import { FlashcardT } from "../types/flashcard";

interface flashcardProps {
    flashcard: FlashcardT;
} 

const Flashcard = ({flashcard}: flashcardProps) => {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {flashcard.topic}
                </h3>
                <button className="text-orange-500 hover:underline">
                    <Link to={'/flashcards/'+flashcard.id}>
                    View Cards →
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Flashcard;
