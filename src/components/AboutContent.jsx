import flightImg from "../assets/flight.png";
import londonImg from "../assets/london.png";
import madisonImg from "../assets/madison.png";

export default function AboutContent() {
  return (
    <div className="p-8 md:p-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 text-left">
          <h2 className="text-4xl font-black text-ateneo uppercase tracking-tighter">
            The Journey So Far
          </h2>

          <div className="space-y-6 text-md text-slate-700 leading-relaxed">
            <p>
              Born in 1993 and raised just outside of Madison in Sun Prairie,
              Wisconsin, I've been surrounded by technology for as long as I can
              remember. My adolescence was defined by PC gaming and building
              hardware, which eventually led me to tinker with websites, PHP,
              and CMS systems back in high school. While I didn't pursue it
              academically at the time, that foundational curiosity for how
              systems function never left me.
            </p>
            <p>
              In 2017, my career took a turn into aviation with Envoy Air, later
              transitioning to Delta Air Lines in 2022. This path allowed me to
              travel the world and even clock around 60 hours of casual flight
              training. However, in 2023, I decided to further my education and
              enrolled in an AAS program at FVTC. Balancing full-time airline
              employment with rigorous coursework, I've spent the last three
              years diving deep into software development.
            </p>
            <p>
              As I approach graduation this spring, I've decided to push beyond
              the associate level. After completing higher-level mathematics
              through Calculus III, I've been accepted into the Computer Science
              program at Arizona State University for the Fall of 2026. I'm
              eager to continue growing in the tech space.
            </p>
            <p>
              Currently, I split my time between my hometown of Madison and
              Dallas, Texas, where I live with my partner of four years. When
              I'm away from the keyboard, I'm likely watching the Packers,
              Chelsea FC, Avalanche, or the Brewers. I also stay rooted in
              Wisconsin sports, following the Badgers and Forward Madison FC.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100">
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                Origin
              </span>
              <span className="text-ateneo font-bold">Madison, WI</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                Base
              </span>
              <span className="text-ateneo font-bold">Dallas, TX</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                Next Waypoint
              </span>
              <span className="text-ateneo font-bold">ASU Fall '26</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-100 aspect-square overflow-hidden border-2 border-ateneo shadow-md rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={londonImg}
              alt="Photo at Stamford Bridge Stadium"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-slate-100 aspect-square overflow-hidden border-2 border-cochineal shadow-md -rotate-10 hover:rotate-0 transition-transform duration-500 mt-8">
            <img
              src={madisonImg}
              alt="Photo of Bascom Hill"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-slate-100 aspect-[3/4] overflow-hidden border-2 border-ateneo shadow-md -rotate-2 hover:rotate-0 transition-transform duration-500 mt-8">
            <img
              src={flightImg}
              alt="Photo of me in a Piper Archer"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
