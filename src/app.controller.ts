import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppControoler {
    @Get()
    getRootRoute(){
        return 'home page';
    }

    @Get('/about')
    getAboutRoute(){
        return 'about page';
    }
}