export default function BuildWith() {
  return (
    <section className="relative z-10 flex flex-col gap-2 w-full text-center mt-24 lg:mt-32">
      <h3 className="text-large text-default-500">Supported and backed by</h3>
      <div className="w-full flex flex-wrap gap-x-5 gap-y-3 justify-center items-center">
        <a
          className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-hover active:opacity-disabled transition-opacity flex flex-col items-center justify-center"
          href="https://story.to.design?utm_source=heroui&amp;utm_marketing=partnership"
          target="_blank"
          rel="noopener noreferrer"
        >
            {/* file svg disini */}
        </a>
        <a
          className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-hover active:opacity-disabled transition-opacity flex flex-col items-center justify-center"
          href="https://coderabbit.ai/?utm_source=heroui&amp;utm_marketing=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
            {/* file svg disini */}
        </a>
        <a
          className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-hover active:opacity-disabled transition-opacity flex flex-col items-center justify-center"
          href="https://www.mochii.ai/?utm_source=heroui&amp;utm_marketing=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
            {/* file svg disini  */}
        </a>
        <a
          className="tap-highlight-transparent no-underline hover:opacity-hover active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-4 min-w-20 h-10 gap-2 rounded-medium [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default data-[hover=true]:opacity-hover group text-sm border-dashed font-normal text-default-600 data-[hover=true]:bg-default-100/50"
          href="https://patreon.com/jrgarciadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            height="24"
            role="presentation"
            viewBox="0 0 24 24"
            width="24"
            className="text-danger group-data-[hover=true]:animate-heartbeat"
          >
            <path
              d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
              fill="currentColor"
            ></path>
          </svg>
          Your Company
        </a>
      </div>
    </section>
  );
}
