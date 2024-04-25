import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography
} from "@material-tailwind/react";
import React from "react";

export default function Home() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-md"
      >

        <a href="#" className="flex items-center" style={{ color: '#4B5563' }}>
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-md"
      >

        <a href="#" className="flex items-center" style={{ color: '#4B5563' }}>
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-md"
      >

        <a href="#" className="flex items-center" style={{ color: '#4B5563' }}>
          Contact
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-md"
      >
        <a href="#" className="flex items-center" style={{ color: '#4B5563' }}>
          Blog
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      {/* Section Navbar */}
      <div>
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 shadow-none">
          <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 "
            >
              <span className="font-bold text-lg">Aero</span><span className=" text-lg text-secondary-500" style={{ color: '#4B5563' }}>Ship</span>
            </Typography>
            <div className="hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm" className="hidden lg:inline-block" style={{ textTransform: 'none' }}>
                <span>Log in</span>
              </Button>
              <Button
                variant="filled"
                size="sm"
                className="hidden lg:inline-block rounded-sm" style={{ textTransform: 'none' }}
              >
                <span>Sign up</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <MobileNav open={openNav}>
            <div className="container mx-auto ">
              <div className="flex justify-center">

                {navList}
              </div>
              <div className="flex justify-center items-center gap-x-1">
                <Button size="sm" className="w-1/2 rounded" style={{ textTransform: 'none' }}>
                  <span>Log in</span>
                </Button>
                <Button
                  variant="filled"
                  size="sm"
                  className="rounded w-1/2" style={{ textTransform: 'none' }}
                >
                  <span>Sign up</span>
                </Button>
              </div>
            </div>
          </MobileNav>
        </Navbar>
      </div>
      {/* Section Navbar- Ended */}

      {/* Section-1 */}
      <div className="py-5">
        <div className="flex justify-center align-items-center">
          <div className="container px-5 md:py-5">
            <div className="flex flex-col md:flex-row items-center justify-center md:py-8">
              <div className=" lg:w-2/3">
                <div className="w-full flex justify-center">
                  <span className="text-4xl md:text-7xl font-bold text-start">Marketing website done with Aero</span>
                </div>
                <div className="py-5">
                  <p className="md:text-lg" style={{ color: '#475569' }}>Aeroship is a starter template for startups, marketing websites & landing pages.
                    Built with Aero.build and TailwindCSS.
                    You can quickly create any website with this starter.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3  mt-5 justify-start">
                  <button class=" bg-black hover:bg-blue-gray-900 text-white py-2 px-4 rounded-md md:mr-3 mb-2 md:mb-0 "><i class="fas fa-cloud-download"></i> Download for Free</button>
                  <button class=" text-black  py-2 px-4 rounded-md md:mr-4 mb-2 md:mb-0 border-2 border-black"><i class="fa-brands fa-github"></i> GitHub Repo</button>
                </div>
              </div>
              <div className="w-1/2 md:w-1/2 hidden lg:block">
                <div className="p-5 flex justify-center items-center">
                  <img src="./images/herosection.webp" className="w-full md:w-auto"></img>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Section-1 ended */}

      {/* Section-2 */}
      <div className="py-5">
        <div className="flex flex-row md:flex-row items-center justify-center">
          <div className="container px-4">

            <div className="md:w-full">
              <span className="text-4xl md:text-5xl font-bold text-start">Everything you need to start a website</span>
            </div>
            <div className="py-5">
              <div className="w-full">
                <p className="md:text-md text-left" style={{ color: '#475569' }}>Aero comes batteries included.
                  It takes the best parts of state-of-the-art tools and adds its own innovations.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Section-2 ended */}
      {/* Section-3  */}
      <div className="container mx-auto flex justify-center">
        <div className="w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="container mx-auto px-4 p-5">
              <div className="grid grid-cols-12">
                <div className="col-span-2 flex items-start justify-start">
                  <div class="rounded-full bg-black p-3 px-4">
                    <i className="fa-solid fa-briefcase text-white"></i>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-10  grid md:grid-cols-1 items-start justify-start">
                  <h1 className="font-bold">Bring Your Own Framework</h1>
                  <p className=" text-secondary ">Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.</p>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 p-5">
              <div className="grid grid-cols-12">
                <div className="col-span-2 flex items-start justify-start">
                  <div class="rounded-full bg-black p-3 px-4">
                    <i className="fa-regular fa-window-maximize text-white"></i>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-10 grid grid-cols-1 items-start justify-start">
                  <h1 className="font-bold">100% Static HTML, No JS</h1>
                  <p className="">Aero renders your entire page to static HTML, removing all JavaScript from your final build by default.</p>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 p-5">
              <div className="grid grid-cols-12">
                <div className="col-span-2 flex items-start justify-start">
                  <div class="rounded-full bg-black p-3 px-4">
                    <i className="fa-solid fa-database text-white"></i>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-10 grid grid-cols-1 items-start justify-start">
                  <h1 className="font-bold">On-Demand Components</h1>
                  <p className="">Need some JS? Aero can automatically hydrate interactive components when they become visible on the page.</p>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 p-5">
              <div className="grid grid-cols-12">
                <div className="col-span-2 flex items-start justify-start">
                  <div class="rounded-full bg-black p-3 px-4">
                    <i className="fa-solid fa-robot text-white"></i>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-10 grid grid-cols-1 items-start justify-start">
                  <h1 className="font-bold">Broad Integration</h1>
                  <p className="">Aero supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.</p>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 p-5">
              <div className="grid grid-cols-12">
                <div className="col-span-2 flex items-start justify-start">
                  <div class="rounded-full bg-black p-3 px-4">
                    <i className="fa-solid fa-file-contract text-white"></i>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-10 grid grid-cols-1 items-start justify-start">
                  <h1 className="font-bold">SEO Enabled</h1>
                  <p className="">Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!</p>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 p-5">
              <div className="grid grid-cols-12">
                <div className="col-span-2 flex items-start justify-start">
                  <div class="rounded-full bg-black p-3 px-4">
                    <i className="fa-solid fa-user text-white"></i>
                  </div>
                </div>
                <div className="col-span-10 md:col-span-10 grid grid-cols-1 items-start justify-start">
                  <h1 className="font-bold">Community</h1>
                  <p className="">Aero is an open source project powered by hundreds of contributors making thousands of individual contributions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section-3 ended */}

      {/* Technology section */}
      <div class="mt-24">
        <h2 class="text-center text-slate-500">Works with your technologies</h2>
        <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
          <svg viewBox="0 0 24 24" class="h-8 md:h-12" astro-icon="simple-icons:react"><path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path></svg> <svg viewBox="0 0 24 24" class="h-8 md:h-12" astro-icon="simple-icons:svelte"><path fill="currentColor" d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168z"></path></svg> <svg viewBox="0 0 24 24" class="h-8 md:h-14" astro-icon="simple-icons:tailwindcss"><path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path></svg>
          <svg viewBox="0 0 24 24" class="h-8 md:h-16" astro-icon="simple-icons:alpinedotjs"><path fill="currentColor" d="m24 12-5.72 5.746-5.724-5.741 5.724-5.75L24 12zM5.72 6.254 0 12l5.72 5.746h11.44L5.72 6.254z"></path></svg>
          <svg viewBox="0 0 24 24" class="h-8 md:h-12" astro-icon="simple-icons:vercel"><path fill="currentColor" d="M24 22.525H0l12-21.05 12 21.05z"></path></svg>
          <svg viewBox="0 0 24 24" class="h-8 md:h-12" astro-icon="simple-icons:astro"><path fill="currentColor" d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 0 1-.236-1.029c0-1.11.652-1.523 1.41-2.003.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 0 0 .378-1.494 3.14 3.14 0 0 0-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 0 0-5.222-1.768L12.35 4.8a.37.37 0 0 0-.71.002l-2.81 9.603a18.175 18.175 0 0 0-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 0 1 .654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0 1 15.55.6z"></path></svg>
        </div>
      </div>
      {/* Technology ended */}
      <div className="container bg-black max-w-screen-lg md:h-[20rem] h-auto mx-auto flex flex-col justify-center items-center p-8 md:px-30 md:py-20 mt-20 rounded-lg">
        <h2 className="text-white text-4xl md:text-6xl tracking-tight text-center">
          Build faster websites.
        </h2>
        <p className="text-white mt-4 text-lg md:text-xl text-center">
          Pull content from anywhere and serve it fast with Aero's next-gen island
          architecture.
        </p>
        <div className="mt-5">
          <button className="text-black py-2 px-4 rounded-md md:mr-4 mb-2 md:mb-0 border-2 bg-white">
            Get Started
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="container flex flex-col mx-auto text-center justify-center items-center mt-5 py-5">
                <span>Copyright © 2024 Aeroship. All rights reserved.</span>
                <span>Made by Midhun Raj</span>
      </div>
      {/* Footer - ended */}
    </>
  );
}

