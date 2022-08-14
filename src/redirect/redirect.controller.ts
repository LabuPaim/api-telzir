import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';

@Controller()
export class RedirectController {

    @Get()
    redirect(@Res() res){
        return res.redirect('/api');
    }
}
