import React from "react";
const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
export const items = [
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
            The{" "}
            <a
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
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Global_illumination"
            target="_blank"
          >
            Global Illumination
          </a>
          . So we had to try this out and figure out how to build it.
        </p>
        <img
          className="content-img auto-h"
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
          className="content-img auto-h"
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
            className="content-img auto-h"
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
    imgsource:
      "https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/events.png",
    background: "#525F9D",
    backgroundHover: "#525F9D",
    content: (
      <>
        <h1 className="content-header">
          Our First Step Into React-Native (and JavaScript).
        </h1>
        <img
          className="content-img auto-h"
          src="https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/groupphoto.JPG"
          alt="Our Team"
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
          <img
            className="content-img"
            src="https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/ccmockup1.png"
            alt="Mockup in Dark Mode"
          />
          <img
            className="content-img"
            src="https://raw.githubusercontent.com/afoyer/portfolio/master/public/images/ccmockup2.png"
            alt="Mockup in Light Mode"
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
      </>
    ),
  },
];
