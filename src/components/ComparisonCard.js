const ComparisonCard = ({ title, features, titleColor = "text-blue-400", backgroundColor = "bg-gray-800"}) => {
    return (
        <div className={`${backgroundColor} rounded-lg p-10 shadow-lg`}>
            <h3 className={`text-2xl font-semibold ${titleColor} mb-10 text-center`}>
                {title}
            </h3>

            <div className="space-y-4 px-2">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-6">
                        <div className={`w-6 h-6 bg-accent rounded-full flex-shrink-0 flex items-center justify-center`}>
                            <span className="text-xs">{feature.icon}</span>
                        </div>
                        <span className={`text-base ${feature.textColor || "text-gray-300"} font-medium text-left`}>
                            {feature.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComparisonCard; 