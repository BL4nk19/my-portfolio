"use client"

const ToolsCard = () => {
  const tools = [
    { name: "VS Code", description: "Code Editor" },
    { name: "Cursor", description: "AI Code Editor" },
    { name: "Figma", description: "Design Tool" },
    { name: "GitHub", description: "Version Control" },
    { name: "Vercel", description: "Deployment" },
    { name: "Postman", description: "API Testing" },
  ]

  const ToolIcon = ({ tool }: { tool: typeof tools[0] }) => (
    <div 
      className="bg-white dark:bg-white aspect-square w-[3rem] max-sm:max-w-[2.75rem] p-0 rounded-2xl hover:scale-125 transition-all shadow-custom-all duration-300 ease-in-out hover:shadow-white/40 dark:hover:shadow-dark-1/20 opacity-90"
      title={tool.description}
    >
      <div className="w-full aspect-square p-2.5 flex items-center justify-center text-xs font-bold text-gray-600">
        {tool.name}
      </div>
    </div>
  )

  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-7 max-sm:py-2 max-sm:gap-2 !shadow-none">
      <div className="row-start-2 row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-8">
        <div className="h-full p-px border w-max mx-auto rounded-3xl border-dark-4 dark:border-dark-5/40 bg-transparent">
          <div className="relative w-max border dark:border-dark-5/60 border-dark-3 rounded-3xl flex flex-col items-center justify-center h-full gap-2.5 max-sm:px-3 px-2 py-2 mx-auto max-sm:flex-row flex-wrap max-sm:w-full dark:bg-white bg-zinc-800/10 dark:bg-white/10 backdrop-blur-2xl">
            {tools.map((tool) => (
              <ToolIcon key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolsCard
