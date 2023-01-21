// import BasicTree from 'lib/MyFolderTree'
export const siteTitle = 'Data Science Notes'
export default function Layout({children}) {

    return (
        <div>
            <main className= "theme-light">
                {children}
            </main>
        </div>
    )
}

