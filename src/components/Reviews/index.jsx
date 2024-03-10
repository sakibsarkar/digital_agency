import "./index.css";
import Image from "next/image";
import { reviews } from "@/utils/mockData/review";

const Reviews = () => {
    const user_reviews = reviews()
    return (
        <section className="reviewWrapper">

            <div className="reviewTitle">
                <p>TESTIMONIALS</p>
                <h1>Read What Other have to Say</h1>
            </div>

            <div className="reviewsContainer">
                {
                    user_reviews?.map((review, i) => <div key={i + "x"} className="reviewBox">

                        <div className="speaker">
                            <Image alt="user" src={review.avater} width={129} height={130} />
                            <h3>{review.name}</h3>
                        </div>

                        <p>{review.description}</p>

                    </div>)
                }
            </div>

        </section>
    );
};

export default Reviews;