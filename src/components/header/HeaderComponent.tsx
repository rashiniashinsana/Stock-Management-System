interface HeaderComponentProps {
    section?: string;
}

export const HeaderComponent = ({ section }: HeaderComponentProps) => {
    return (
        <div className="p-6 bg-gray-800 shadow-md rounded-r-xl">
            <h1 className="text-center text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                    {section}
                </span>
            </h1>
        </div>
    );
};
