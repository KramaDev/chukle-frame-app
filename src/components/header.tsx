import Navigation from "./navigation";

const Header = () =>{
    return<>
    <div className="header">
    <img className="header__img" src="https://www.svgrepo.com/show/454562/animal-cat-circle.svg" alt="ChuckleFrame" />
    <div className="header__nav">
    <Navigation name="UNSPLASH" linkUrl="https://unsplash.com/"/>
    <Navigation name="UI COLORS" linkUrl="https://color.adobe.com/create/color-wheel"/>
    <Navigation name="GITHUB" linkUrl="https://github.com/"/>


    </div>
    </div>
    </>
}
export default Header;