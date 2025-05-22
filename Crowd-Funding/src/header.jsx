import logoMasterCraft from './assets/logo-mastercraft.svg';
import bookmarkImage from './assets/icon-bookmark.svg';
function Header(){
    return(
        <div>
            <img src={logoMasterCraft}></img>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div>
                <button>Back this project</button>
                <button><img src={bookmarkImage}/>Bookmark</button>
            </div>
        </div>
    );
}
export default Header;