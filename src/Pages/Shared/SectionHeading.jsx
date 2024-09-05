
const SectionHeading = ({subHeading, heading}) => {
    return (
        <div className="my-10 text-center md:w-3/6 w-5/6 mx-auto">
            <p className='text-yellow-500  md:text-xl italic my-5'>--- {subHeading} ---</p>
            <h3 className='uppercase my-5 text-xl md:text-4xl font-semibold py-4 border-y-2 border-gray-400'>{heading}</h3>
            
        </div>
    );
};

export default SectionHeading;