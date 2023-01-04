import cleanBuild from './clean-up.js'
import { buildExportedComponents, buildEntryFile } from "./build-exported-components.js"

cleanBuild()
buildExportedComponents(['components'], ['Rvt'], ['vue'])
buildEntryFile()