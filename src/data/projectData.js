import React from "react";
import ImageContainer from "./../components/ImageContainer";
const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
export const items = [
  /**
   *
   *
   *
   * AWS
   *
   *
   *
   */

  {
    title: "Amazon Web Services",
    titlecolor: "#ffffff",
    background: "#232f3e",
    imgsource: process.env.PUBLIC_URL + "/images/aws/aws",
    backgroundHover: "#232f3e",
    content: (
      <>
        <h1 className="content-header">
          Cloudscape, Data Centers, and Monitoring
        </h1>
        <h3 className="img-description">Written on 5/29/2022, updated 09/05/2023</h3>
        <p className="content-text">
          I have been working at AWS for the past year working on giving data
          center operators a better way to visualize how their data center is
          running. Me and my team have been building various dashboards to show
          power consumption, rack temperatures, alarm agregation, and more in a
          single pane of glass UI.
        </p>
        <p className="content-text">
          InfraMap is primarily focused on giving that UI and provides the tools
          for operational excellence for data centers globally within AWS.
        </p>
        <h2 className="content-tab">Things I've built.</h2>
        <p className="content-text">
          I've been working on a configuration based website builder that, through a JSON file, will
          create and format a page full of metrics following the cloudscape visual design automatically without further action
          from the user.
        </p>
        <p className="content-text">
          This allows for support people to troubleshoot and update various data-centers around the world without developer assistance.
          I've also created an extensive set of tools using S3, AppSync and Lambda to update these configuration files through an intuitive
          and quick to use UI instead of going through the regular S3 workflow of deleting files, adding them back, then renaming them correctly.
        </p>
      </>
    ),
  },

  /**
   *
   *
   *
   * Pantonify
   *
   *
   *
   */
  {
    title: "Pantonify",
    titlecolor: "#ffffff",
    imgsource: process.env.PUBLIC_URL + "/images/pantonify/pantonify",
    background: "#1DB954",
    backgroundHover: "#1DB954",
    content: (
      <>
        <h1 className="content-header">See The Color in Your Favorite Songs</h1>
        <h3 className="img-description">Written on 3/24/2021</h3>
        <ImageContainer
          name="pantonify-sketch"
          second="png"
          alt="Concept"
          cssclass="content-img auto-h"
          path="/images/pantonify/"
        />

        <h3 className="img-description">
          early mockup of final product which is very similar to what I ended up
          making.
        </h3>
        <h2 className="content-tab">About</h2>
        <p className="content-text">
          Pantonify is a Spotify web-app (not by Spotify, however) that takes
          someone's top 4 favorite songs from the past month, six months or all
          time, and turns them into a Pantone color guide-inspired card. This
          project was built over the course of two weeks with the use of React,
          NextJS, Next-Auth, the Spotify API, and other libraries to handle
          album art and colors.
        </p>
        <p className="content-text">
          This project was built over the course of 2 months with an early
          mockup using Figma (as seen above) and plenty of user feedback to
          improve the flow.
        </p>
        <h2 className="content-tab">The planning phase</h2>
        <p className="content-text">
          Early on, I knew that I wanted to create some website utilizing{" "}
          <a
            className="linkhover"
            rel="noopener noreferrer"
            href="https://developer.spotify.com/documentation/web-api/"
            target="_blank"
          >
            the Spotify API.
          </a>{" "}
          The only hurdle I had to pass was figuring out authentication.
          <br />
          <br />
          When I first started learning React, I quickly found out about{" "}
          <a
            className="linkhover"
            rel="noopener noreferrer"
            href="https://nextjs.org/"
            target="_blank"
          >
            NextJS
          </a>
          , a server-sided rendering method for React. I tried to implement with
          with{" "}
          <a
            className="linkhover"
            rel="noopener noreferrer"
            href="https://next-auth.js.org/"
            target="_blank"
          >
            NextAuth
          </a>{" "}
          which simplifies authentication with OAuth protocols. But before I
          started with this whole project, I wanted to try out this package on
          something else: Reddit. That turned out to be a bigger detour than I
          expected.
        </p>
        <h2 className="content-tab">
          Reddit authentication, community contributions, and bug finding
        </h2>
        <p className="content-text">
          Reddit authentication turned out to be way more complex than expected
          due to the fact that Reddit authentication was not implemented within
          NextAuth. The reason behind it was that it was a known bug that Reddit
          would refuse to authenticate with their boilerplate methods.
        </p>
        <p className="content-text">
          After spending some time looking at the source code, I realized that
          NextAuth was not creating the correct headers for Reddit, which uses a
          different format for authentication purposes compared to usual OAuth2
          credentials when making a call.
        </p>
        <p className="content-text">
          After a small{" "}
          <a
            className="linkhover"
            rel="noopener noreferrer"
            href="https://github.com/nextauthjs/next-auth/pull/1094"
            target="_blank"
          >
            pull request
          </a>
          , I managed to get the fix and play around with the package for the
          actual project.
        </p>
        <h2 className="content-tab">Framer motion and responsive design.</h2>
        <p className="content-text">
          While I had a bit of experience using Framer Motion with this personal
          website, the responsive design was more thoroughly thought about
          compared to the afterthought in this page.
        </p>
        <p className="content-text">
          There were also other considerations such as smooth transitions
          between the cards which make it a whole lot more complicated since
          timings have to be more in line.
        </p>
        <h2 className="content-tab">Thoughts and reflections a year later</h2>
        <p className="content-text">
          This is still one of my proudest projects as it was a completely solo
          one with a complete timeline from inception to actual product with
          user feedback. After learning so much more about React since I have
          been at Amazon I would definitely improve network calls to reduce the
          load. Currently, changing the time will make a new call instead of
          using a previously cached one, which is not ideal.
        </p>

        <p className="content-text">Anyways, check it out below.</p>
        <div className="content-github">
          <a
            href="https://pantonify.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
        </div>
      </>
    ),
  },
  /**
   *
   *
   *
   * RADIOSITY
   *
   *
   *
   */
  {
    title: "Radiosity-Based Renderer",
    titlecolor: "#b0bec5",
    imgsource: process.env.PUBLIC_URL + "/images/render",
    background: "#53090E",
    backgroundHover: "#f05545",
    content: (
      <>
        <h1 className="content-header">This Was Harder Than I Thought.</h1>
        <h3 className="img-description">Written on 8/24/2020</h3>
        <h2 className="content-tab">Intro</h2>
        <p className="content-text">
          <span className="bold-opening">
            The{" "}
            <a
              className="linkhover"
              rel="noopener noreferrer"
              href="https://www.coloradocollege.edu/basics/blockplan/"
              target="_blank"
            >
              block plan
            </a>{" "}
            makes everything faster pace, which means we had 5 days from coming
            up with this project to finishing it.
          </span>{" "}
          <br />
          <br />
        </p>
        <p className="content-text">
          My partner and I were trying to brainstorm what a good project for our
          computer graphics course would be until we both stumbled on{" "}
          <a
            className="linkhover"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Global_illumination"
            target="_blank"
          >
            Global Illumination
          </a>
          . So we had to try this out and figure out how to build it.
        </p>
        <ImageContainer
          name="drawboard"
          second="jpg"
          alt="Drawboard Concept"
          cssclass="content-img auto-h"
          path="/images/Radiosity/"
        />

        <h3 className="img-description">
          A very rough visual brainstorm session.
        </h3>
        <p className="content-text">
          Essentially what you see up here is the basis of a{" "}
          <a
            className="linkhover"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Radiosity_(computer_graphics)"
            target="_blank"
          >
            Radiosity-based
          </a>{" "}
          renderer. The advantage that a radiosity-based renderer gave us was
          the ability to fully move around the scene once it was rendered since
          all dots now had their values set while still being relatively snappy.
        </p>
        <h2 className="content-subheader">
          That's great, but what does it mean?
        </h2>
        <p className="content-text">
          Just a warning: If you expect a good <i>written</i> explanation from
          me, prepare to be disappointed.
        </p>
        <p className="content-text">
          We decided to create planes with them having grids of dots within them
          that are evenly spaced to cover the whole plane.
        </p>
        <ImageContainer
          name="dotpnanesketch"
          second="jpg"
          alt="Dot Sketch"
          cssclass="content-img auto-h"
          path="/images/Radiosity/"
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

        <ImageContainer
          name="codeSnippet-min"
          second="png"
          alt="Code Snippet"
          cssclass="content-img auto-h"
          path="/images/Radiosity/"
        />
        <h3 className="img-description">A lot of (not so clean) checking.</h3>

        <h2 className="content-subheader">Radiant Flux?</h2>
        <p className="content-text">
          Radiant flux is how much energy is transferred from one light to the
          other. If the light transfer were one-to-one, the whole scene would
          just be a ball of light.
        </p>
        <h2 className="content-tab">Problems</h2>
        <p className="content-text">
          The first problem we noticed was that since our program was going to
          be single threaded, it was going to be slow. While adding a progress
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
            title="Render Test"
            src="https://player.vimeo.com/video/451997779"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
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
        <div className="content-github">
          <a
            href="https://github.com/afoyer/GlobalIllumination-Radiosity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </>
    ),
  },
  /**
   *
   *
   *
   * EVENTS APP
   *
   *
   *
   */
  {
    title: "Events Application",
    titlecolor: "#ffffff",
    imgsource: process.env.PUBLIC_URL + "/images/events",
    background: "#525F9D",
    backgroundHover: "#525F9D",
    content: (
      <>
        <h1 className="content-header">
          Our First Step Into React-Native (and JavaScript).
        </h1>
        <ImageContainer
          name="groupphoto"
          second="jpg"
          alt="Our Team"
          cssclass="content-img auto-h"
          path="/images/CCEvents/"
        />
        <h3 className="img-description">
          A project consited of the members:
          <br />
          Sophia Quick
          <br />
          Drew Shippey
          <br />
          Clifford Chirwa
          <br />
          Ian Sanborn
          <br />
          and me
        </h3>
        <h2 className="content-tab">Before We Start</h2>
        <p className="content-text">
          The information below is a recap of the written portion of this
          project. It was used as a foundaction for presenting it as our senior
          project.{" "}
        </p>
        <h2 className="content-tab">Intro</h2>
        <h2 className="content-subheader">Client</h2>
        <p className="content-text">
          {tab}The Office of Campus Activities at Colorado College: The Office
          of Campus Activities enriches the student experience by providing a
          variety of involvement opportunities, free events, and activities that
          promote holistic student development, learning, community, wellness,
          and fun! Campus Activities works hard in order to provide the student
          body with a crucial facet of student success on campus, which is a
          sense of place.
        </p>
        <p className="content-text">
          {" "}
          Our main points of contact with Campus Activities involved: Amy Hill -
          who is the current Director of Campus Activities and Antonio Soto -
          who is the Paraprofessional of Campus Activities for the 2019 - 2020
          academic school year. It took a few days to establish our final
          clients, as we had solicited our services to a few other potential
          clients before moving forward with Campus Activities. The deciding
          factor was the essentially the potential impact of the project on the
          Colorado College community and the challenge presented to us from
          working on software that was completely new to us. In our initial
          interviews, we established the following.
        </p>
        <p className="content-text">
          One of the largest problems facing Campus Activities is the
          inconsistency in event advertisement from campus partners. Campus
          partners range from affinity groups - such as the SOMOS (which is the
          latinx student group), the Asian Student Union, and the Black Student
          Union - to minor sports teams, such as club hockey. With so many
          different avenues for advertising events (bulletin boards, Student
          Digest, Facebook events, word of mouth. . . ), students experience a
          lack of knowledge regarding a comprehensive list of events at Colorado
          College. As a result, there is a major deficit in student engagement
          at most events and which is also reflected in the greater Colorado
          College community.
        </p>
        <p className="content-text">
          We were able to present a solution to this problem in the form of a
          mobile application upon our client’s request.
        </p>
        <h2 className="content-subheader">Project Objectives</h2>
        <p className="content-text">
          The purpose of this project was to develop a platform in which
          students could view campus-wide events and activities put on by
          on-campus clubs and organizations, sports teams, academic departments,
          or any other student affinity groups. Campus Activities wanted our
          team to create a mobile application that worked for both iOS and
          Android. The hope for this project was as such: to provide a
          centralized location for students, especially the campus organizations
          they are a member of, to post events on the application. In addition,
          students should be able to view all the events occuring on campus and
          should be able to interact with them, in ways such as adding events to
          their calendars. The intended result of this project would be an
          increased engagement at campus events, specifically by students as
          well as the greater Colorado College community.
        </p>

        <h2 className="content-tab">Requirements</h2>
        <h2 className="content-subheader">Accomplished Goals</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="content-img"
            src="https://raw.githubusercontent.com/afoyer/EventsApp/master/Screenshot_20200819-114025_CC%20Events.jpg"
            alt="CC app homescreen"
          />
          <img
            className="content-img"
            src="https://raw.githubusercontent.com/afoyer/EventsApp/master/Screenshot_20200819-114032_CC%20Events.jpg"
            alt="CC app add event"
          />
        </div>
        <h3 className="img-description">
          View of the application as it is today.
        </h3>
        <ul className="content-list">
          <li className="list-item">
            Create an inclusive platform to advertise events - Campus Activities
            App
            <ul>
              <li>
                Mobile application works with both Android and iOS devices
              </li>
            </ul>
          </li>
          <li className="list-item">
            Allow users to create and post events
            <ul>
              <li>
                Allow students to upload a picture with event posting (digital
                version of a poster, image from the event in the past, etc.)
              </li>
              <li>Who (student, club, department) is hosting the event</li>
              <li>Choose a start and end date and time for the event</li>
              <li>Have a title and short description for event</li>
              <li>Set the location for the event</li>
            </ul>
          </li>
          <li className="list-item">
            Pull in events from RSS feed
            <ul>
              <li>Automatically populate feed with events from RSS</li>
              <li>
                These events are ones already set up and approved by Campus
                Activities and the student government
              </li>
            </ul>
          </li>
          <li className="list-item">
            Make events “clickable” to be taken to a webpage with more
            information on the event
          </li>
          <li className="list-item">
            Allow users to add events to their calendar by clicking on an event
            that opens their mobile device’s calendar
            <ul>
              <li>
                This feature would also load in all of the information from the
                app into the user’s calendar (i.e. date, time, and title of the
                event)
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="content-tab">Development</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ImageContainer
            name="ccmockup1"
            second="png"
            alt="Mockup in Dark Mode"
            cssclass="content-img"
            path="/images/CCEvents/"
          />
          <ImageContainer
            name="ccmockup2"
            second="png"
            alt="Mockup in Light Mode"
            cssclass="content-img"
            path="/images/CCEvents/"
          />
        </div>
        <h3 className="img-description">
          Rough mockup made on Adobe XD of what the app would look like.
        </h3>
        <p className="content-text">
          Before starting coding, I had made some quick mockups of what the UI
          could look like in Adobe XD. Those before Thanksgiving break and many
          of us tried to create a functional proof of concept over that time
          using{" "}
          <a
            rel="noopener noreferrer"
            href="https://callstack.github.io/react-native-paper/"
            target="_blank"
          >
            React-Native-Paper
          </a>
          .
        </p>
        <p className="content-text">
          Clifford and I mostly focused on making a functional UI using a
          navigation bar and small details (that we often put too much time
          into) to make the app pleasing to the eye and nice to use. I also
          worked on implementing the add to calendar functionality using
          Sophia's RSS parser to add the event and its information directly into
          the user's calendar app.
        </p>
        <p className="content-text">
          A major setback for our app development was the last minute change to
          a different database. Had we done more research and not simply assumed
          that MySQL would work with react-native, we could have not only
          progressed further but also avoided refactoring code to fit the new
          tech which caused us problems. Through this we also were working
          quickly to get things to work and we neglected documentation and some
          good coding practices.
        </p>
        <div className="content-github">
          <a
            href="https://github.com/afoyer/EventsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </>
    ),
  },
];
