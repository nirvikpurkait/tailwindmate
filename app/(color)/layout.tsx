import Footer from "components/footer";
import Header from "components/header";
import Nav from "components/nav";
import Link from "next/link";

export default function ColorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page flex min-h-screen flex-col justify-between">
      <Header />
      <main className="w-screen px-8 py-20">
        <section className="mx-auto flex w-full max-w-[1200px] flex-col justify-center md:w-[90%] lg:flex-row lg:justify-between">
          <div className="mb-8 w-full lg:mb-0">
            <h1 className="hidden text-center text-3xl sm:block md:w-[600px] md:text-4xl lg:text-left">
              Experience Effortless Color Conversion for Tailwind with
              TailwindMate
            </h1>
            <h1 className="text-center text-4xl sm:hidden">
              Effortless Color <br /> Conversion <br /> for Tailwind CSS
            </h1>
            <p className="mx-auto mt-7 max-w-[650px] text-center text-[15px] text-neutral-400 sm:mt-6 lg:mx-0 lg:text-left">
              Save time and enhance your workflow by easily converting colors to
              their closest Tailwind counterparts or translating Tailwind color
              classes to HEX, RGB, RGBA, HSL, and HSLA formats.
            </p>
          </div>
          <button
            className="mx-auto h-min w-full rounded-xl bg-blue-600 bg-gradient-to-r px-14 py-3 text-sm font-medium text-white sm:max-w-[250px] lg:mx-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #004ef5, #3B82F6, #418cc9, #10B981)",
              backgroundSize: "200% 200%",
              animation: "gradient-animation 5s ease-in-out infinite",
            }}
          >
            <Link href={"https://github.com/JaleelB/tailwindmate"}>
              Visit Project Repo
            </Link>
          </button>
        </section>

        <section className="mx-auto mt-20 w-full max-w-[1200px]">
          <aside>
            <Nav />
          </aside>
        </section>

        {children}
      </main>
      <Footer />
    </div>
  );
}
