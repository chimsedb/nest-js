import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private readonly catModel: Model<CatDocument>) { }

    async getAllCats(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }

    // findCat(id: number): Cat {
    //     return this.cats.find((cat) => cat.id == id);
    // }

    async addCat(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = this.catModel.create(createCatDto);
        return createdCat;
    }
}
