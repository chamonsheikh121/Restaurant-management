

const Divider = ({text}) => {
    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="divider ">{text}</div>
            </div>

        </div>
    );
};

export default Divider;