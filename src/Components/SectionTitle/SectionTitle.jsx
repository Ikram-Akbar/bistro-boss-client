

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto my-8">
            <p className="text-yellow-600" >--- {subHeading} --- </p>
            <h3 className="text-3xl uppercase border-y-2 py-2 my-2"> {heading} </h3>
            
        </div>
    );
};

export default SectionTitle;