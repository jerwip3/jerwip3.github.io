import flightImg from "../assets/flight.png";
import londonImg from "../assets/london.png";
import madisonImg from "../assets/madison.png";

export default function AboutContent() {
  return (
    <div className="p-8 md:p-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 text-left">
          <h2 className="text-4xl font-black text-ateneo dark:text-white uppercase tracking-tighter">
            The Journey So Far
          </h2>

          <div className="space-y-6 text-md text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              My interest in technology started with PC building and tinkering
              with PHP and CMS systems long before I pursued it professionally.
              After several years in aviation I decided to return to my roots in
              software. Balancing full-time airline work with rigorous
              coursework, I've spent the last few years diving deep into
              full-stack development, logic, and mathematics.
            </p>
            <p>
              As I wrap up my AAS in Software Development this spring and
              prepare to join Arizona State University's Computer Science
              program in the fall, I'm focused on building applications that are
              as as intuitive as they are robust. Currently splitting my time
              between Madison and Dallas, I spend my life away from the keyboard
              cheering for the Packers, Chelsea FC, and the Avalanche, or
              staying rooted in Wisconsin sports with the Badgers and Forward
              Madison.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100 dark:border-white/10">
            <div>
              <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest">
                Origin
              </span>
              <span className="text-ateneo dark:text-white font-bold">
                Madison, WI
              </span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest">
                Base
              </span>
              <span className="text-ateneo dark:text-white font-bold">
                Dallas, TX
              </span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest">
                Next Waypoint
              </span>
              <span className="text-ateneo dark:text-white font-bold">
                ASU Fall '26
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-square overflow-hidden border-2 border-ateneo shadow-md rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={londonImg}
              alt="Photo at Stamford Bridge Stadium"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-square overflow-hidden border-2 border-cochineal shadow-md -rotate-10 hover:rotate-0 transition-transform duration-500 mt-8">
            <img
              src={madisonImg}
              alt="Photo of Bascom Hill"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-[3/4] overflow-hidden border-2 border-ateneo shadow-md -rotate-2 hover:rotate-0 transition-transform duration-500 mt-8">
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
