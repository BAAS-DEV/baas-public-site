import { ReactElement } from "react"

export interface ContainerConfig {
    Columns: Column[]
}

interface Column {
    component: ReactElement,
    backgroundColor?: string
}

export default function Container(config: ContainerConfig) {
    let { Columns } = config
    return (
        <>
            <div className={`
                    grid 
                    gap-1
                    xs:grid-cols-1
                    sm:grid-cols-2 
                    md:grid-cols-${config.Columns.length} 
                    lg:grid-cols-${config.Columns.length} 
                    xl:grid-cols-${config.Columns.length} 
                    w-full
                `}

                style={{
                    backgroundImage: "url('/Live-Background.svg')",
                    // backgroundImage: "linear-gradient(to right, #2c90cb ,#3878bd)",
                    backgroundSize: "100%"
                }}>
                {

                    Columns.map((item, i) => (
                        <div key={i} className={`${Columns[i].backgroundColor}`}>
                            {Columns[i].component}
                        </div>
                    ))
                }
            </div >
        </>
    )
}