import detect from 'detect-port'

const libraryChecker = async (configs) => {
    // Do we need dist or just index.js with install?
    return {
        configureServer(server) {
            detect(5173)
                .then(port => {
                    if(5173 === port) {
                        console.log("`npm run dev` the library project in another terminal before starting the test project")
                        process.exit()
                    }
                })
        }
    }
}

export default libraryChecker