import { NavigationDots, SocialMedia } from "../components";
function AppWrap(Component, idName, classNames) {
  return function HOC() {
    return (
      <div id={idName} className={`app_container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
}

export default AppWrap;
