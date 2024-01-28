

function Home() {
  return (
    <>
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className=" overflow-hidden bg-[url(https://images.unsplash.com/photo-1616410011236-7a42121dd981?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat"
>
  <div className="mt-[50px] bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Mobile Phones</h2>

      <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
        doloribus iure architecto quae voluptatum beatae excepturi dolores.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 hover:text-white"
        >
          Get Yours Today
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Home