import "./index.css";
import Image from "next/image";
import { reviews } from "@/utils/mockData/review";

const Reviews = () => {
    const user_reviews = reviews()
    return (
        <div className="reviewWrapper">

            <div>
                <p>TESTIMONIALS</p>
                <h1>Read What Other have to Say</h1>
            </div>

            <div className="reviewsContainer">
                {
                    user_reviews?.map((review, i) => <div key={i + "x"} className="reviewBox">

                        <Image alt="user" src={review.avater} width={"130px"} height={"130px"} />
                        <h3>{review.name}</h3>
                        <p>{review.description}</p>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Reviews;