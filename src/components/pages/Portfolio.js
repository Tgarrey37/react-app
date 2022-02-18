import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import TripPhoto from '../assets/last-minute-trip-planner.png'
import YelpPhoto from '../assets/baby-yelp.png'
import WeatherPhoto from '../assets/weather-dashboard.png'
import TeamPhoto from '../assets/team-profile-generator.png'
import SocialPhoto from '../assets/social.png'
import SchedulerPhoto from '../assets/scheduler.png'
export default function Portfolio() {
  let [projects] = useState([
    {
      name: "Last Minute Trip Planner",
      alt: "Last Minute Trip Planner",
      src: TripPhoto,
      description:
        "If you are taking a last minute trip this is the perfect application for you !",
      tech: "Html, CSS Javascript.",
      link: "https://tgarrey37.github.io/super-team-project/",
      github: "https://github.com/Tgarrey37/super-team-project",
    },
    {
      name: "Baby Yelp",
      alt: "Baby Yelp",
      src: YelpPhoto ,
      description:
        "Add a Restaurant and leave a review !",
        
      tech: "Javascript, Node.js, Sequelize, Handlebars.js, Parsley.js, mySQL, Express.js, bcrypt, CSS.",
      link: "https://baby-yelp.herokuapp.com/",
      github: "https://github.com/BennetWilson/baby-yelp",
    },
    {
      name: "Weather Dashboard",
      alt: "Weather Dashboard",
      src: WeatherPhoto,
      description:
       "Any city weather for the next five days!",
      tech: "Html, CSS Javascript, Weather Api.",
      link: "https://tgarrey37.github.io/weather-dashboard/",
      github: "https://github.com/Tgarrey37/weather-dashboard",
    },
    {
      name: "Team Profile Generator",
      alt: "Team Profile Generator",
      src: TeamPhoto,
      description:
        "Create your work team profiles with your roles! You can add managers as well.",
      tech: "Html, CSS, Javascript.",
      link: "https://vimeo.com/665043124/5892fe0dba",
      github: "https://github.com/Tgarrey37/team-profile-generator",
    },
    {
      name: "Social Network Api",
    alt: "Social Network Api",
    src: SocialPhoto,
    description:"Create thoughts, add friends, leave comments on a social media API!",
    tech: "Express, MongoDB, Moment.js,Nodemon, Javascript.",
    link: "https://vimeo.com/manage/videos/675727790",
    github: "https://github.com/Tgarrey37/social-network-api"},
    {
    name: "Work Day Scheduler",
    alt: "Work Day Scheduler",
    src: SchedulerPhoto,
    description:"Create todo's for your schedule! You will be shown what you need to do based off of the time in the day.",
    tech: "Javascript, Html, CSS, Moment.js.",
    link: "https://tgarrey37.github.io/work-scheduler/",
    github: "https://github.com/Tgarrey37/work-scheduler"}
  ]);
  return (
    <main className='container footer-spacing'>
    <div className='row'>
      {projects.map((project) => (
        <div className='col-sm-4 mt-3 '>
        <Card className='card-size'>
          <Card.Img className='photo-size'variant="top" src={project.src} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>
              {project.description}
              <br />
              <br />
              {project.tech}
            </Card.Text>
            <div className='row justify-content-center'>
            <Card.Link href={project.github} target='_blank' className="btn btn-primary col m-3">Github</Card.Link>
            <Card.Link href={project.link} target='_blank' className="btn btn-primary col m-3">Deployed</Card.Link>
            </div>
          </Card.Body>
        </Card>
        </div>
      ))}
    </div>
    </main>
  );
}
