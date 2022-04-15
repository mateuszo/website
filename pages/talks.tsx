import BrutList from "../components/brut-list";

export interface Talk {
  date: string;
  venue: string;
  title: string;
  link: string;
}

function Talks({ talks }: { talks: Talk[] }) {
  return (
    <div className="border-8 border-black my-4">
      <h1 className="text-6xl font-bold uppercase  text-center ">My Talks</h1>
      <div className="font-mono border-8 border-black m-2">
        <p className="m-5 text-lg">
          Sharing is caring. You can meet me at conferences, meetups and
          webinars. Here&apos;s a list of talks that I&apos;ve given.
        </p>
        <BrutList items={talks}></BrutList>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      talks: [
        {
          date: "2022-04-07",
          venue: "Divante Webinar",
          title: "When project manager meets developer",
          link: "https://youtu.be/zPHheusbNME",
        },
        {
          date: "2022-04-04",
          venue: "4Developers 2022",
          title: "Single Page Applications - was it a good idea?",
          link: "https://4developers.org.pl/",
        },
        {
          date: "2022-04-01",
          venue: "Warszawskie Dni Informatyki - WDI",
          title: "Build your own framework",
          link: "https://warszawskiedniinformatyki.pl/",
        },
        {
          date: "2022-01-26",
          venue: "JS Poland",
          title: "Angular SSR - The Good, The Bad & The Ugly",
          link: "https://js-poland.pl/",
        },
        {
          date: "2021-10-14",
          venue: "dev.js summit",
          title: "Kill the mutants",
          link: "https://www.youtube.com/watch?v=QC40DJvXVow",
        },
        {
          date: "2021-09-17",
          venue: "Divante Webinar",
          title: "Webinar: What's new in Spartacus? SAP Spartacus 4.0",
          link: "https://www.youtube.com/watch?v=hyuWmEcHVbI",
        },
        {
          date: "2021-03-12",
          venue: "Śniadanie z Programowaniem #74",
          title: "Front-end news",
          link: "https://www.youtube.com/watch?v=jw_308mQFLU",
        },
        {
          date: "2019-10-01",
          venue: "4Developers Kraków 2019",
          title: "How to test your tests - Mutation testing in python",
          link: "https://archiwum.4developers.org.pl/lecture_krakow_2019/#id=55322",
        },
        {
          date: "2019-09-23",
          venue: "PyLight Kraków #8 meetup",
          title: "Programowanie Obiektowe - fakty i mity",
          link: "https://www.meetup.com/PyLight-KRK/events/264749696/",
        },
        {
          date: "2019-06-19",
          venue: "Pytech - Kraków Python Meetup #1",
          title: "Music in python",
          link: "https://crossweb.pl/en/events/pytech-krakow-python-meetup-1-czerwiec-2019",
        },
        {
          date: "2019-04-09",
          venue: "dev.js Kraków #5 meetup",
          title: "Vanilla MVC",
          link: "https://goingapp.pl/wydarzenie/dev-js-krakow-5/kwiecien-2019",
        },
        {
          date: "2018-12-20",
          venue: "epizody meetup",
          title: "Muzyka napisana w Pythonie",
          link: "https://www.facebook.com/events/309981246286214/",
        },
        {
          date: "2018-09-27",
          venue: "PyKonik Tech Talks #38",
          title: "Muzyka napisana w Pythonie",
          link: "https://www.youtube.com/watch?v=KUHoC4xCV2Y",
        },
        {
          date: "2017-10-14",
          venue: "DevCamp 2017",
          title: "Warsztaty Messenger Bot - to prostsze niż myślisz!",
          link: "https://codecool.com/pl/blog/mentorzy-codecool-na-devcamp/",
        },
        {
          date: "2017-06-05",
          venue: "Tipi UX #2 Kraków",
          title:
            "Jak pozbyć się frontu - czyli conversational UI okiem programisty",
          link: "https://crossweb.pl/en/events/tipi-ux-2-krakow",
        },
        {
          date: "2017-03-02",
          venue: "Pykonik #31 Tech Talks Meetup",
          title: "Python na początek ?",
          link: "https://www.meetup.com/Pykonik/events/237708800/",
        },
        {
          date: "2016-06-24",
          venue: "meet.js",
          title: "The Bot UX/UI",
          link: "https://www.meetup.com/pl-PL/KrakowJS/events/231689755/",
        },
        {
          date: "2016-06-21",
          venue: "KRUG #6",
          title: "Conversational UI",
          link: "https://www.meetup.com/Krakow-Ruby-Users-Group/events/231859660/",
        },
      ] as Talk[],
    },
  };
}

export default Talks;
