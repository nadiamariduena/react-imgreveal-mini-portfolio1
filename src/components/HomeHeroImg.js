import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ImgBeauty1 from "../img/Tom_van_der_Borght_metalmagazine-19.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const HomeHeroImg = () => {
  //
  //
  let sideTwoTwin = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  //
  //
  // tl stands for TimelineLite
  //   You need to declare this to make the animations
  let tl = new TimelineLite();
  //
  //
  /*
   the container div is represented here, 1 represents the DURATION,
    in other words it takes 1sec to load/reveal

    You can change the duration from 1 to 0 , so that you dont 
    have to wait a second to see the animation.

  */
  useEffect(() => {
    tl.to(sideTwoTwin, 0, {
      css: { visibility: "visible" },
    })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.5 });
  });
  //
  //
  //
  //
  return (
    <section className="bannerTwinImg">
      <div className="sideOneTwin">
        <div class="textOneTwin">
          <p>
            CHASING DEATH IN THE REALMS OF POINTILLISM WITH A BALL-POINT PEN
          </p>

          <h4>
            The phrase memento mori is not supposed to instil fear or
            apprehension.
          </h4>
          <h5>
            <Link className="linkMore" to="/Portfolio">
              Read More
            </Link>
          </h5>
        </div>
      </div>
      {/* ------------ */}
      <div ref={(el) => (sideTwoTwin = el)} className="sideTwoTwin">
        <>
          <div className="img-container">
            <img ref={(el) => (image = el)} src={ImgBeauty1} alt="" />
          </div>
        </>
      </div>
    </section>
  );
};
//
//

export default HomeHeroImg;

/*

  //
  useEffect(() => {
    //   the container div is represented here, 1 represents the DURATION, in other words it takes 1sec to load/reveal
    // You can change the duration from 1 to 0 , so that you dont have to wait a second to see the animation
    tl.to(container, 1, {
      // the css represents what you want to animate
      css: { visibility: "visible" },
      //   imageReveal will reveal the sudo class element :after on line 9
    })
      .to(
        imageReveal,
        1.4,
        { width: "0%", ease: Power2.easeInOut }
        // duration : imageReveal, 1.4,
        // what happens in img reveal is that you are changing the width: to a 0% , if you notice it correspond to the reveal curtain arriving to the end
      )
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.5 });
    //   the last line starting from the "FROM", will be to set up the zoom out while the reveal is happening, this zoom out is more a scaling effect
    // .from(image, 1.4, { scale: 1.6,  means that it starts FROM a zoomed/scaled 1,6 and it will end up zooming out to its original size

    // the delay here:  delay: -1.5 }); will be to set up the moment from when the scaling animation will start
    // So if we set up the scaling in -1.5 you will notice it s from a second before the reveal start. I tried to add a delay of 2 or 1 only and it start from where the reveal is nearly done, so its to slow
  });

  //--------------------------
  //
    <section className="main">

      the ref makes allusion to the line 9 , by adding this ref here, you will have a connection to this div  
     
     
      <div ref={(el) => (container = el)} className="container">
        <>
          <div className="img-container">
            <img ref={(el) => (image = el)} src={ImgBeauty1} alt="image" />
          </div>
        </>
      </div>
    </section>


*/

/*












import React, { useRef, useEffect } from "react";
import ImgBeauty1 from "../img/people.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const HomeHeroImg = () => {
  //
  //
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  //
  //
  // tl stands for TimelineLite
  //   You need to declare this to make the animations
  let tl = new TimelineLite();
  //
  //

 useEffect(() => {
  tl.to(container, 1, {
    css: { visibility: "visible" },
  })
    .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
    .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.5 });
});
//
//
//
//
return (
  <>
    <section className="bannerTwinImg">
      <div className="sideOneTwin">
        <p>
          CHASING DEATH IN THE REALMS OF POINTILLISM WITH A BALL-POINT PEN
        </p>

        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          velit.
        </h4>
        <h5>
          <a href="memento.html" target="_self">
            Read More
          </a>
        </h5>
      </div>
     
      <div className="sideTwoTwin"></div>
    </section>

    <section className="main">
      <div ref={(el) => (container = el)} className="container">
        <>
          <div className="img-container">
            <img ref={(el) => (image = el)} src={ImgBeauty1} alt="" />
          </div>
        </>
      </div>
    </section>
  </>
);
};
//
//

export default HomeHeroImg;



*/
