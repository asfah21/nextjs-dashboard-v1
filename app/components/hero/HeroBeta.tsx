export default function HeroBeta() {
  return (
    <section className="px-6 md:px-20 relative z-10 flex flex-col gap-2 w-full mt-16 lg:mt-44">
      <div className="flex flex-col gap-8">
        <div>
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
              Dark Mode
            </h1>
            <div>
              <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
                is&nbsp;
              </h1>
              <h1 className="tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
                effortless.
              </h1>
            </div>
          </div>
          <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full">
            HeroUI comes with a fully well-scaled default dark theme that you
            can apply to your application with just adding the
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex relative w-full h-auto bg-gradient-to-tr from-[#FFB457] to-[#FF705B] rounded-2xl items-center justify-center py-14 px-4 lg:px-8">
              <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-small rounded-large backdrop-blur-md backdrop-saturate-150 transition-transform-background motion-reduce:transition-none border-none bg-background/60 dark:bg-default-100/50"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="flex relative w-full h-auto bg-gradient-to-tr from-[#FFB457] to-[#FF705B] rounded-2xl items-center justify-center py-14 px-4 lg:px-8">
              <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-small rounded-large backdrop-blur-md backdrop-saturate-150 transition-transform-background motion-reduce:transition-none border-none bg-background/60 dark:bg-default-100/50"></div>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-start">
            <a className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 text-tiny gap-2 rounded-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-warning/20 text-warning-700 dark:text-warning data-[hover=true]:opacity-hover max-w-fit">
                Hello
            </a>
        </div>
      </div>
    </section>
  );
}
