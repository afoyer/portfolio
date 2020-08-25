import React from "react";

export const items = [
  {
    title: "Radiosity-Based Renderer",
    titlecolor: "#ffffff",
    imgsource:
      "https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/render.PNG",
    background: "#53090E",
    backgroundHover: "#f05545",
    content: (
      <>
        <h1 className="content-header">This Was Harder Than I Thought.</h1>
        <h3 className="img-description">Written on 8/24/2020</h3>
        <h2 className="content-tab">Intro</h2>
        <p className="content-text">
          <span className="bold-opening">
            It is the last week of our Computer Graphics Block.
          </span>{" "}
          <br />
          <br />
          That means we have a final project to come up with! My partner and I
          were trying to brainstorm what a good project would be until we both
          stumbled on{" "}
          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Global_illumination"
            target="_blank"
          >
            Global Illumination
          </a>
          . So we had to try this out and figure out how that worked.
        </p>
        <img
          className="content-img"
          src="https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/drawboard.jpg"
          alt="whiteboard draft"
        />
        <h3 className="img-description">
          A very rough/early mockup of what we were doing.
        </h3>
        <p className="content-text">
          Essentially what you see up here is the basis of a{" "}
          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Radiosity_(computer_graphics)"
            target="_blank"
          >
            Radiosity-based
          </a>{" "}
          renderer. The advantage that a radiosity-based renderer gave us was
          the ability to fully move around the scene once it was rendered since
          all dots now had their values set.
        </p>
        <h2 className="content-subheader">
          That's great, but what does it mean?
        </h2>
        <p className="content-text">
          We decided to create planes with them having grids of dots within them
          that are evenly spaced to cover the whole plane.
        </p>
        <img
          className="content-img"
          src="https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/dotpnanesketch.jpg"
          alt="dot-sketch"
        />
        <h3 className="img-description">
          Basic way the dots are placed and what a dot means.
        </h3>
        <p className="content-text">
          Once all these dots are placed and the scene is set up (we also made
          special planes that already have light within them to act as a
          "light-box") we can start shooting rays! These rays travel from one
          dot to the other and each dot is compared to all other dots.
        </p>
        <h3 className="img-description">
          that's a lot of dots depending on how dense our planes are (which we
          can customize!).
        </h3>
        <p className="content-text">
          The ray first checks if the dot is "visible" from one dot to the
          other. This is achieved by taking the normal vector of that dot's
          plane and checking if the direction of the ray is less that 180
          degrees. Once that check is made and approved, the receiving dot is
          updated with a new light which is dependent on radiant flux.
        </p>
        <a
          rel="noopener noreferrer"
          href="https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/codeSnippet-min.png"
          target="_blank"
        >
          <img
            className="content-img"
            src="https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/codeSnippet-min.png"
            alt="code-view"
          />
        </a>
        <h3 className="img-description">A lot of checking.</h3>

        <h2 className="content-subheader">Radiant Flux?</h2>
        <p className="content-text">
          Yes! It is essentially how much energy is transferred from one light
          to the other since if the light transfer were 1-to-1 the whole scene
          would just be a ball of light.
        </p>
        <h2 className="content-tab">Problems</h2>
        <p className="content-text">
          The first problem I noticed was that since our program was going to be
          single threaded, it was going to be slow. While adding a progress
          indicator was nice we had to figure out a faster way to process all
          the dots in a shorter time (since our renders could take hours if the
          dot density was high enough).
          <br />
          <br />
          That is when we realized we could have <i>less</i> dots by making our
          code have more variables!
          <br />
          <br />
          Now, our render still had problems. One of which is that the edges of
          planes had this black trim on it (you can see it on the header of this
          card). This most likely has to do with planes overlapping each other
          and the renderer getting confused about which dot should appear on
          top. We decided to not fix it because we thought it looked kind of
          nice.
        </p>
        <h2 className="content-tab">In Action</h2>
        <div className="content-video">
          <iframe
            title="demo video"
            src="https://www.youtube.com/embed/HUUy67lb5YA"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <h3 className="img-description">
          Notice the shadow and light gradient on the white wall
        </h3>

        <h2 className="content-tab">Final Thoughts</h2>
        <p className="content-text">
          Overall, being able to set all this up and complete it in less than a
          week was definitely the highlight of all of this. Plus having such a
          visual feedback when something was working was incredible to see, even
          though it sometimes had to be us sitting and waiting for our scene to
          render. <br />I think I've had my good dose of linear algebra now.
        </p>
      </>
    ),
  },
  {
    title: "Events Application",
    titlecolor: "#ffffff",
    imgsource:
      "https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/events.png",
    background: "#525F9D",
    backgroundHover: "#525F9D",
    content: (
      <>
        <h1 className="content-header">
          As of Right Now, The Funnest Thing I Have Done.
        </h1>
      </>
    ),
  },
];
