import * as info from "./index.js"

let downloadTag = document.querySelector('#download_tag')
downloadTag.href=`${info.backend_path}/download/`

console.log(downloadTag);