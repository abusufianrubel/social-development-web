import Image from "next/image";

export default function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-forest-700">
            Moments that matter
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-forest-950 sm:text-4xl">
            A community in action
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            A glimpse of what people can do when they show up for one another.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <div className="group relative col-span-2 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&h=750&fit=crop"
              alt="Volunteers working together"
              width={1000}
              height={750}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
            <p className="font-display absolute bottom-5 left-5 text-lg font-bold text-white">
              Stronger, together
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=700&h=750&fit=crop"
            alt="People helping their community"
            width={700}
            height={750}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="h-64 w-full rounded-3xl object-cover sm:h-80"
          />
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&h=750&fit=crop"
            alt="Community tree planting"
            width={700}
            height={750}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="h-64 w-full rounded-3xl object-cover sm:h-80"
          />
          <Image
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700&h=600&fit=crop"
            alt="Volunteers preparing donations"
            width={700}
            height={600}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="h-52 w-full rounded-3xl object-cover sm:h-60"
          />
          <div className="group relative col-span-2 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1000&h=600&fit=crop"
              alt="Volunteers planning a community project"
              width={1000}
              height={600}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-52 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
            <p className="font-display absolute bottom-5 left-5 text-lg font-bold text-white">
              Every helping hand counts
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&h=600&fit=crop"
            alt="Community support activity"
            width={700}
            height={600}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="h-52 w-full rounded-3xl object-cover sm:h-60"
          />
        </div>
      </div>
    </section>
  );
}
