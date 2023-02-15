import sun from '../assets/images/soleil.jpg';
import uranus from '../assets/images/uranus.jpg';
import neptune from '../assets/images/neptune.jpg';
import jupiter from '../assets/images/jupiter.jpg';
import mars from '../assets/images/mars.jpg';
import mercure from '../assets/images/mercure.jpg';
import saturne from '../assets/images/saturne.jpg';
import terre from '../assets/images/terre.jpg';
import venus from '../assets/images/venus.jpg';
import eris from '../assets/images/eris.jpg';
import pluton from '../assets/images/pluton.jpg';
import haumea from '../assets/images/haumea.jpg';
import makemake from '../assets/images/makemake.jpg';

const dataLocal = [
  {
    id: 'soleil',
    image: sun,
    description: 'Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet.',
  },
  {
    id: 'uranus',
    image: uranus,
    description: `Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.

    It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.`,
  },
  {
    id: 'neptune',
    image: neptune,
    description: `Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.

    The Latest
     New Study Finds Unexpected Temperature Changes on Neptune
     Hubble's Grand Tour of the Outer Solar System
    More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.
    
    NASA's Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system.`,
  },
  {
    id: 'jupiter',
    image: jupiter,
    description: `Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.

    Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.
    
    Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.
    
    One spacecraft – NASA's Juno orbiter – is currently exploring this giant world.`,
  },
  {
    id: 'mars',
    image: mars,
    description: `Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet.

        The Sun is the largest object in our solar system. The Sun’s volume would need 1.3 million Earths to fill it. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of debris in orbit around it. The hottest part of the Sun is its core, where temperatures top 27 million degrees Fahrenheit (15 million degrees Celsius). The Sun’s activity, from its powerful eruptions to the steady stream of charged particles it sends out, influences the nature of space throughout the solar system.`,
  },
  {
    id: 'mercure',
    image: mercure,
    description: `The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.

    From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.
    
    Because of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset.`,
  },
  {
    id: 'saturne',
    image: saturne,
    description: `Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.

    Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's.
    
    Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.`,
  },
  {
    id: 'terre',
    image: terre,
    description: `Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.

    Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.
    
    NASA currently has two rovers (Curiosity and Perseverance), one lander (InSight), and one helicopter (Ingenuity) exploring the surface of Mars.
    
    Perseverance rover – the largest, most advanced rover NASA has sent to another world – touched down on Mars on Feb. 18, 2021, after a 203-day journey traversing 293 million miles (472 million kilometers). The Ingenuity helicopter rode to Mars attached to the belly of Perseverance.
    
    Perseverance is one of three spacecraft that arrived at Mars in 2021. The Hope orbiter from the United Arab Emirates arrived on Feb. 9, 2021. China’s Tianwen-1 mission arrived on Feb. 10, 2021, and includes an orbiter, a lander, and a rover. Europe and India also have spacecraft studying Mars from orbit.
    
    In May 2021, China became the second nation to ever land successfully on Mars when its Zhurong Mars rover touched down.
    
    An international fleet of eight orbiters is studying the Red Planet from above including three NASA orbiters: 2001 Mars Odyssey, Mars Reconnaissance Orbiter, and MAVEN.
    
    These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.`,
  },
  {
    id: 'venus',
    image: venus,
    description: `Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.

    Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough to melt lead. The surface is a rusty color and it’s peppered with intensely crunched mountains and thousands of large volcanoes. Scientists think it’s possible some volcanoes are still active.
    
    Venus has crushing air pressure at its surface – more than 90 times that of Earth – similar to the pressure you'd encounter a mile below the ocean on Earth.
    
    Another big difference from Earth – Venus rotates on its axis backward, compared to most of the other planets in the solar system. This means that, on Venus, the Sun rises in the west and sets in the east, opposite to what we experience on Earth. (It’s not the only planet in our solar system with such an oddball rotation – Uranus spins on its side.)
    
    Venus was the first planet to be explored by a spacecraft – NASA’s Mariner 2 successfully flew by and scanned the cloud-covered world on Dec. 14, 1962. Since then, numerous spacecraft from the U.S. and other space agencies have explored Venus, including NASA’s Magellan, which mapped the planet's surface with radar. Soviet spacecraft made the most successful landings on the surface of Venus to date, but they didn’t survive long due to the extreme heat and crushing pressure. An American probe, one of NASA's Pioneer Venus Multiprobes, survived for about an hour after impacting the surface in 1978.
    
    More recent Venus missions include ESA’s Venus Express (which orbited from 2006 until 2016) and Japan’s Akatsuki Venus Climate Orbiter (orbiting since 2016).
    
    NASA’s Parker Solar Probe has made multiple flybys of Venus. On Feb. 9, 2022, NASA announced the spacecraft had captured its first visible light images of the surface of Venus from space during its February 2021 flyby.`,
  },
  {
    id: 'eris',
    image: eris,
    description: `Eris is one of the largest known dwarf planets in our solar system. It's about the same size as Pluto but is three times farther from the Sun.

    At first, Eris appeared to be larger than Pluto. This triggered a debate in the scientific community that led to the International Astronomical Union's decision in 2006 to clarify the definition of a planet. Pluto, Eris, and other similar objects are now classified as dwarf planets.
    
    Eris was discovered on Jan. 5, 2005, from data obtained on Oct. 21, 2003 during a Palomar Observatory survey of the outer solar system by Mike Brown, a professor of planetary astronomy at the California Institute of Technology; Chad Trujillo of the Gemini Observatory; and David Rabinowitz of Yale University.`,
  },
  {
    id: 'pluton',
    image: pluton,
    description: `Pluto is a dwarf planet in the Kuiper Belt, a donut-shaped region of icy bodies beyond the orbit of Neptune. There may be millions of these icy objects, collectively referred to as Kuiper Belt objects (KBOs) or trans-Neptunian objects (TNOs), in this distant region of our solar system.

    Pluto – which is smaller than Earth’s Moon – has a heart-shaped glacier that’s the size of Texas and Oklahoma. This fascinating world has blue skies, spinning moons, mountains as high as the Rockies, and it snows – but the snow is red.
    
    On July 14, 2015, NASA’s New Horizons spacecraft made its historic flight through the Pluto system – providing the first close-up images of Pluto and its moons and collecting other data that has transformed our understanding of these mysterious worlds on the solar system’s outer frontier.
    
    In the years since that groundbreaking flyby, nearly every conjecture about Pluto possibly being an inert ball of ice has been thrown out the window or flipped on its head.
    
    “It’s clear to me that the solar system saved the best for last!” said Alan Stern, New Horizons principal investigator from the Southwest Research Institute, Boulder, Colorado. “We could not have explored a more fascinating or scientifically important planet at the edge of our solar system. The New Horizons team worked for 15 years to plan and execute this flyby and Pluto paid us back in spades!”`,
  },
  {
    id: 'haumea',
    image: haumea,
    description: `Originally designated 2003 EL61 (and nicknamed Santa by one discovery team), Haumea is located in the Kuiper Belt, a donut-shaped region of icy bodies beyond the orbit of Neptune. The other known dwarf planets in the Kuiper Belt are Pluto, Eris, and Makemake (dwarf planet Ceres is located in the main asteroid belt between Mars and Jupiter).

    Haumea is roughly the same size as Pluto. It is one of the fastest rotating large objects in our solar system. The fast spin distorts Haumea's shape, making this dwarf planet look like a football.
    
    Two teams claim credit for discovering Haumea citing evidence from observations made in 2003 and 2004. The International Astronomical Union’s Gazetteer of Planetary Nomenclature lists the discovery location as Sierra Nevada Observatory in Spain on Mar. 7, 2003, but no official discoverer is listed.
    
    Everything we know about Haumea is from observations with ground-based telescopes from around the world.`,
  },
  {
    id: 'makemake',
    image: makemake,
    description: `Along with fellow dwarf planets Pluto, Eris, and Haumea, Makemake is located in the Kuiper Belt, a donut-shaped region of icy bodies beyond the orbit of Neptune. Slightly smaller than Pluto, Makemake is the second-brightest object in the Kuiper Belt as seen from Earth (while Pluto is the brightest). It takes about 305 Earth years for this dwarf planet to make one trip around the Sun.

    Makemake holds an important place in the history of solar system studies because it – along with Eris – was one of the objects whose discovery prompted the International Astronomical Union to reconsider the definition of a planet and to create the new group of dwarf planets.
    
    Makemake was first observed in March 2005 by M.E. Brown, C.A. Trujillo, and D.L. Rabinowitz at the Palomar Observatory. Its unofficial codename was Easterbunny. Before this dwarf planet was confirmed, its provisional name was 2005 FY9. In 2016, NASA’s Hubble Space Telescope spotted a small, dark moon orbiting Makemake.`,
  },
];
export default dataLocal;
