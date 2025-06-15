const SectionHeader = ({ title, className = "" }) => {
    return (
        <div className={`text-center mb-16 ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 px-4">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader; 