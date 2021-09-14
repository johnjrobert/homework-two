var MODEL = (function () {
  var _homePageView = `
<div id="content">
  <div class="hero home-hero">
      <div class="header-contain">
          <h1 class="page-header">The Burger</h1>
          <h1 class="page-header">Joint</h1>
          <h2 class="page-subheader">A place for friends</h2>
      </div>
  </div>

  <div class="home-info">
      <div class="home-info-container">
          <h1 class="page-subheader">Have some grub with us</h1>
          <p class="standardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum molestiae, incidunt maiores totam ab quasi dolorum harum, assumenda et beatae amet quisquam. Porro aperiam pariatur voluptas explicabo nam voluptate!</p>
          <a id="menu" href="#"><div class="button fancyText">Check out our menu!</div></a>
      </div>
      
      <div class="home-section-image food-image"></div>
      
  </div>

  <div class="home-info">

      <div class="home-section-image bar-image"></div>


      <div class="home-info-container">
          <h1 class="page-subheader">Have a drink with us</h1>
          <p class="standardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum molestiae, incidunt maiores totam ab quasi dolorum harum, assumenda et beatae amet quisquam. Porro aperiam pariatur voluptas explicabo nam voluptate!</p>
          <a id="menu" href="#"><div class="button fancyText">Check out our menu!</div></a>
      </div>
      
      
      
  </div>
</div>



`;
  var _aboutPageView = `<div id="content">
  <div class="hero about-hero">
      <div class="header-contain">
          <h1 class="page-header">About</h1>
          <h1 class="page-header">the Joint</h1>
          <h2 class="page-subheader">Best staff, Best Burgers, Best Beers</h2>
      </div>
  </div>    

  <div class="middle-sect">
      <h1 class="mission">Our Mission</h1>
      <div class="mission-wrap">
          <div class="wrap-one">
      <p class="mission-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam delectus cumque, voluptatum harum dolorem minima odit quasi rem dignissimos quae porro voluptatibus maiores ipsam reprehenderit blanditiis at natus distinctio aliquam.</p>
      <p class="mission-para">Ab praesentium, provident libero quam quae, commodi nesciunt perspiciatis et adipisci placeat ipsa impedit soluta natus doloribus quod dicta odit molestiae dolore necessitatibus nostrum ullam pariatur blanditiis earum in? Enim?</p>
  </div>
  <div class="wrap-two">
      <p class="mission-para">Fugiat similique soluta dicta neque repellendus, est natus deserunt nemo mollitia libero voluptas facilis consectetur consequuntur et odio! Similique quaerat eaque corrupti facere quos? Et nostrum soluta beatae dolore quos?</p>
      <p class="mission-para">Fugiat similique soluta dicta neque repellendus, est natus deserunt nemo mollitia libero voluptas facilis consectetur consequuntur et odio! Similique quaerat eaque corrupti facere quos? Et nostrum soluta beatae dolore quos?</p>
  </div>
  </div>
  </div>

  <h1 class="meet-the-team">Meet our Staff</h1>

  <div class="card-wrapper">

      
  
      <div class="card">
          <div class="card-image person-one"></div>
          <div class="card-about">
              <div class="card-title">Owner</div>
              <div class="card-desc"><p>Dolorum dolor delectus, sapiente sint temporibus nam libero est reprehenderit similique alias, beatae repellendus quia ea.</p></div>
          </div>
      </div>

      <div class="card">
          <div class="card-image person-two"></div>
          <div class="card-about">
              <div class="card-title">Owner</div>
              <div class="card-desc"><p> Dolorum dolor delectus, sapiente sint temporibus nam libero est reprehenderit similique alias, beatae repellendus quia ea.</p></div>
          </div>
      </div>

      <div class="card">
          <div class="card-image person-three"></div>
          <div class="card-about">
              <div class="card-title">Manager</div>
              <div class="card-desc"><p>Dolorum dolor delectus, sapiente sint temporibus nam libero est reprehenderit similique alias, beatae repellendus quia ea.</p></div>
          </div>
      </div>

      <div class="card">
          <div class="card-image person-four"></div>
          <div class="card-about">
              <div class="card-title">Sales/Marketing</div>
              <div class="card-desc"><p>Dolorum dolor delectus, sapiente sint temporibus nam libero est reprehenderit similique alias, beatae repellendus quia ea.</p></div>
          </div>
      </div>

      <div class="card">
          <div class="card-image person-five"></div>
          <div class="card-about">
              <div class="card-title">Bar Head</div>
              <div class="card-desc"><p>Dolorum dolor delectus, sapiente sint temporibus nam libero est reprehenderit similique alias, beatae repellendus quia ea.</p></div>
          </div>
      </div>

      <div class="card">
          <div class="card-image person-six"></div>
          <div class="card-about">
              <div class="card-title">Chef</div>
              <div class="card-desc"><p>Dolorum dolor delectus, sapiente sint temporibus nam libero est reprehenderit similique alias, beatae repellendus quia ea.</p></div>
          </div>
      </div>

      

   </div>
</div>`;
  var _menuPageView = `
  <div id="content">
    <div class="hero menu-hero">
        <div class="header-contain">
            <h1 class="page-header">Our</h1>
            <h1 class="page-header">Menu</h1>
            <h2 class="page-subheader">What we have in store for you</h2>
        </div>
    </div>

    <div class="home-info">
        <div class="home-info-container">
            <h1 class="page-subheader">Food Hall</h1>
            <p class="standardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum molestiae, incidunt maiores totam ab quasi dolorum harum, assumenda et beatae amet quisquam. Porro aperiam pariatur voluptas explicabo nam voluptate!</p>
            <a id="menu" href="#"><div class="button fancyText">Menu</div></a>
        </div>
        
        <div class="home-section-image food-menu-image"></div>
        
    </div>

    <div class="home-info">

        <div class="home-section-image bar-menu-image"></div>


        <div class="home-info-container">
            <h1 class="page-subheader">Wine/OnTap/Spirits</h1>
            <p class="standardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum molestiae, incidunt maiores totam ab quasi dolorum harum, assumenda et beatae amet quisquam. Porro aperiam pariatur voluptas explicabo nam voluptate!</p>
            <a id="menu-button" href="#"><div id="menu-button" class="button fancyText">Menu</div></a>
        </div>
        
        
        
    </div>


    `;
  var _contactPageView = `<div id="content">
    <div class="hero contact-hero">
        <div class="header-contain">
            <h1 class="page-header">Contact</h1>
            <h1 class="page-header">Us</h1>
            <h2 class="page-subheader">Reach out, we're friendly</h2>
        </div>
    </div>

    

    <div id="contactDirect">
    <h1 class="page-header">Say Hi!</h1>
    <form class="contact-form" action="">
        <input class="contact-norm" type="text" placeholder="name...">
        <input class="contact-norm" type="text" placeholder="email...">
        <input class="contact-norm" type="text" placeholder="phone...">
        <input class="contact-large" type="text" placeholder="message...">

        <button class="btn">Submit.</button>

    </form>
    </div>
</div>`;

  var _getMyContent = function (btnID, callback) {
    let clickedID = "_" + btnID + "PageView";
    $("#content").html(eval(clickedID));
    console.log(btnID);

    if (callback) {
      callback(clickedID);
    }
  };

  return {
    getMyContent: _getMyContent,
  };
})();
