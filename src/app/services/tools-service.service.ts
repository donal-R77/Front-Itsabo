var sha1 = require('js-sha1');
export class ToolsServices {
    public convertToSha1(text:any){
        return sha1(text);
    }; 
}