import Header from "./Accueil/Header";
import logo from './assets/images/logo.svg';
import dropdownMenu from './assets/images/align-justify.svg';



function App() {
  return (
        <div>
          <header>
              <div className="header-logo_container">
                  <a className="link-logo"> 
                      <img className="logo-header" src={logo} alt="logo" />
                  </a>
                  <img className="small-category_icon" src={dropdownMenu} id="btn-category" alt="menu des categories"/>
              </div>


              <nav class="header-nav">
                <Header /> 
              </nav>

              <div className="user-board_container" id="userboardContainer">
                      <span className="userName_text"> John Doe </span>
                      <a className="user-profil_link">Accedez à votre profil</a>
              </div>

              <div className="user-panel_container"> 
                  <img className="user-picture_img" src="assets/images/male-default-profile-picture.jpg" />
              </div>  

              <a className="user-subscribe_link" id="subscribe-container"href="./subscribe-check.php">Inscrivez-vous</a>
              <div className="small-connexion_container">
                  <img src="assets/images/house-user.svg" className="small-connexion_icon" id="btn-img_connexion" />
              </div>

              <div className="user-connexion_container" id="container-formConnect">
                  <form className="user-connexion_form" method="POST" action="connexion-check.php" id="form-user">
                      <input className="input" type="text" name="email" placeholder="Adresse mail" />
                      <input className="input" type="password" name="password" placeholder="Mot de passe" />
                  </form>
                  <div className="user-connexion_btn" id="submit-btn" role="button" tabindex="0">
                      <img className="user-connexion_img" src="assets/images/arrow-circle-right_pageArticle.svg" />
                  </div>
              </div>

              <ul id="menu" className="responsive-dropdown_close responsive_dropdown">
                  <li className="responsive-text_container"> 
                      <a href="index.php?category='.$categories[$i]['theme'].'" className="dropdown-text '.$categories[$i]['theme'].'_responsive"> '.$categories[$i]['name'].'</a> 
                  </li>
              </ul>
          </header>
      </div>
    )
}

export default App;
