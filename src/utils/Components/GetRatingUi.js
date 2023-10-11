import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function GetRatingUi({ rating }) {

    let solidStars = Math.floor(rating);
    let partialStars = rating - solidStars;
    let emptyStars = 5 - solidStars - Math.ceil(partialStars);

    return (
        <div className='flex items-center gap-[2px]'>
            {
                [...Array(solidStars)].map((e, i) => {
                    return <BsStarFill key={i} className="text-[#F4B400]" />
                })
            }
            {
                partialStars > 0 && <BsStarHalf className="text-[#F4B400]" />
            }
            {
                [...Array(emptyStars)].map((e, i) => {
                    return <BsStar key={i} className="text-[#F4B400]" />
                })
            }
        </div>
    )
}
