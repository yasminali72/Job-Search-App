import multer from "multer";

import path from "node:path"
import fs from "node:fs"
export const fileValidations={
    image:["image/jpeg","image/png","image/gif"],

}
export const uploadFileDisk=(customPath="general",fileValidation=[])=>{
    const basePath=`uploads/${customPath}`
    console.log(basePath);
    const fullPath=path.resolve(`./src/${basePath}`)
    console.log(fullPath);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath,{recursive:true})
    }
    const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,fullPath)
        },
        filename:(req,file,cb)=>{
            console.log(file);
            const finalFileName=Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname
            file.finalPath=basePath+"/"+finalFileName
            console.log(file);
            cb(null,finalFileName)
        }
    })

    function filterFile(req,file,cb) {
        if (fileValidation.includes(file.mimetype)) {
            cb(null,true)
        }else{
            cb("in-valid file format",false)
        }
    }
    return multer({dest:"temPath",storage})
}