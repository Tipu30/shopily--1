interface MenuItemProps {
    children: React.ReactNode;
    onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className="px-4
        py-3
        text-slate-700
        hover:bg-neutral-100 transition">{children}</div>
    )
}

export default MenuItem