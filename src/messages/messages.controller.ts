import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages-services'

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService) {}

    @Get()
    listMessage() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        const { content } = body;
        this.messagesService.create(content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        if(!message) {
            throw new NotFoundException("Not Found");
        }

        return message;
    }
}
