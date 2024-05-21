import {Param, Body, Get, Post, Put, Delete, UseBefore, JsonController, Req, Res} from 'routing-controllers';
import {AllControllerActionsMiddleware} from "../../middlewares/AllControllerActionsMiddleware";
import {Service} from "typedi";
import {Request, Response} from "express";

@Service()
@JsonController('/status')
export class StatusController {
    @Get('/')
    async getAll(@Req() req: Request, @Res() res: Response) {
        return res.status(200).send({
            status: 'OK'
        })
    }

    @Get('//:id')
    getOne(@Param('id') id: number) {
        return 'This action returns user #' + id;
    }

    @Post('/')
    post(@Body() user: any) {
        return 'Saving user...';
    }

    @Put('/:id')
    put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }

    @Delete('/:id')
    remove(@Param('id') id: number) {
        return 'Removing user...';
    }
}