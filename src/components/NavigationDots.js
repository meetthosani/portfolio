import { items } from "./Navbar/Navbar";

function NavigationDots({ activeItem }) {
  return (
    <div className="app__navigation">
      {items.map((item, index) => (
        <a
          href={`#${item}`}
          className="app__navigation-dot"
          key={item + index}
          style={activeItem === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
