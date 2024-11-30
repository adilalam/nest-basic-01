import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessage() {
        return "hi"
    }

    @Post()
    createMessage(@Body() body: { message: string }) {
        const { message } = body;
        console.log('body ', message);

    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log('id ', id);
        
    }
}
