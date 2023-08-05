import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./FeaturedItem.css";
import featuredImg from "../../../assets/home/featured.jpg";

const FeaturedItem = () => {
    return (
      <div className="featured-item text-white pt-8 my-16  bg-fixed">
        <SectionTitle
          subHeading="check it out"
          heading="featured item"
        ></SectionTitle>
        <div>
          <div className="md:flex justify-center items-center pb-20 pt-12 px-32 ">
            <div>
              <img className="img" src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
              <p>31 July 1997</p>
              <p className="uppercase">where can i get some ?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quos, laborum temporibus ipsam nulla, nesciunt error eaque magni
                saepe, nostrum obcaecati consectetur deleniti quod perferendis
                id! Harum totam, voluptas libero sapiente soluta dignissimos
                placeat error saepe. Sunt, corrupti? Reprehenderit magnam
                quaerat fuga temporibus amet repudiandae exercitationem libero
                iure, facere at?
              </p>
              <button className="btn btn-outline btn-primary mt-2 border-0 border-b-4">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FeaturedItem;
